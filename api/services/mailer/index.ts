import * as fs from 'fs';
import * as ejs from 'ejs';
import * as mailjet from 'node-mailjet'
import config from 'api/config';
import validate from 'api/utils/validate.js';

mailjet.connect(config.mailJet.apiKey, config.mailJet.apiSecret, {
	url: 'api.mailjet.com',
	version: 'v3.1',
});

async function sendEmail(params) {

	if (!params.from) {
		throw new Error('From is a required parameter');
	}

	if (!params.to) {
		throw new Error('To is a required parameter');
	}

	if (!params.subject) {
		throw new Error('Subject is a required parameter');
	}

	if (!params.template) {
		throw new Error('HTML template name is required');
  }
  
  const template = fs.readFileSync(params.template, 'utf-8');

  const emailParams = {
    'Messages':[{
      'From': {
        'Email': `${params.from}`,
        'Name': `${params.fromName ? params.fromName : ''}`
      },
      'To': [{
        'Email': `${params.to}`,
        'Name': `${params.toName ? params.toName : ''}`
      }],
      'Subject': `${params.subject}`,
      'TextPart': `${params.textPart ? params.textPart : ''}`,
      'HTMLPart': ejs.render(template),
    }]
  };

	try {
		await mailjet.post('send').request(emailParams);
		return {success: true};
	} catch (error) {
		throw new Error(error);
	}
}

async function welcomeEmail(params) {
	validate(params, {
		from: {presence: true},
		to: {presence: true},
		subject: {presence: true},
		template: {presence: true},
		user: {presence: true}
	});

	try {
		return await sendEmail(params);
	} catch (error) {
		throw new Error(error);
	}
}

export default {
	welcomeEmail,
};

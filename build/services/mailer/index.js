"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var ejs = require("ejs");
var mailjet = require("node-mailjet");
var config_1 = require("api/config");
var validate_js_1 = require("api/utils/validate.js");
mailjet.connect(config_1.default.mailJet.apiKey, config_1.default.mailJet.apiSecret, {
    url: 'api.mailjet.com',
    version: 'v3.1',
});
function sendEmail(params) {
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
    var template = fs.readFileSync(params.template, 'utf-8');
    var emailParams = {
        'Messages': [{
                'From': {
                    'Email': "" + params.from,
                    'Name': "" + (params.fromName ? params.fromName : '')
                },
                'To': [{
                        'Email': "" + params.to,
                        'Name': "" + (params.toName ? params.toName : '')
                    }],
                'Subject': "" + params.subject,
                'TextPart': "" + (params.textPart ? params.textPart : ''),
                'HTMLPart': ejs.render(template),
            }]
    };
    return mailjet.post('send').request(emailParams);
}
function welcomeEmail(params) {
    validate_js_1.default(params, {
        from: { presence: true },
        to: { presence: true },
        subject: { presence: true },
        template: { presence: true },
        user: { presence: true }
    });
    return sendEmail(params);
}
exports.default = {
    welcomeEmail: welcomeEmail,
};

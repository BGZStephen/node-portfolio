const sgMail = require('@sendgrid/mail');
const ejs = require('ejs')

function sendMail(params) {
    const msg = {
    to: params.to,
    from: params.from,
    subject: params.subject,

    // html: ejs template here
  };

  sgMail.send(msg);
}

module.exports = {
  sendMail,
};

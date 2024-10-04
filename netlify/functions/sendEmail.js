const { Resend } = require("resend");
const { VITE_API_API_KEY_RESEND, VITE_API_EMAIL_MUMA } = process.env;

exports.handler = async function (event, context) {
  try {
    const { emailto, form } = JSON.parse(event.body);
    console.log("ENV", JSON.parse(event.body));
    sgMail.setApiKey(VITE_API_API_KEY_RESEND);
    const msg = {
      to: VITE_API_EMAIL_MUMA,
      from: emailto,
      subject: "Sending with SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: form,
    };
    let response = await sgMail.send(msg);
    console.log("RES", response);
    return {
      statusCode: 200,
      body: { message: "Email sent successfully" },
    };
  } catch (error) {
    console.log("ERRORSITO", error);
    return {
      statusCode: 500,
      body: { error: "Failed to send email" },
    };
  }
};

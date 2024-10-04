const { Resend } = require("resend");
const { VITE_API_API_KEY_RESEND, VITE_API_EMAIL_MUMA } = process.env;

exports.handler = async function (event, context) {
  try {
    const { emailto, form } = JSON.parse(event.body);
    console.log("ENV", JSON.parse(event.body));
    const resend = new Resend(VITE_API_API_KEY_RESEND);

    await resend.emails.send({
      from: VITE_API_EMAIL_MUMA,
      to: emailto,
      subject: "Registro mascotera.",
      react: form,
    });

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

import nodemailer from "nodemailer";

export async function sendMail({ from, subject, body, whoSend = "" }) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  if (whoSend == "user") {
    try {
      const sendResult = await transport.sendMail({
        from: from,
        to: SMTP_EMAIL,
        subject,
        html: body,
      });
      console.log(sendResult);
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const sendResult = await transport.sendMail({
        from: SMTP_EMAIL,
        to: from,
        subject,
        html: body,
      });
      console.log(sendResult);
    } catch (error) {
      console.log(error);
    }
  }
}

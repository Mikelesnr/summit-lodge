import nodemailer from "nodemailer";

export async function sendMail({ from, subject, body, whoSend = "" }) {
  // Add your new OAuth2 variables to your .env file
  const {
    SMTP_EMAIL,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN,
  } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: SMTP_EMAIL,
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      refreshToken: GOOGLE_REFRESH_TOKEN,
    },
  });

  // Verification step (Note: This now checks OAuth2 connectivity)
  try {
    await transport.verify();
  } catch (error) {
    console.error("OAuth2 Verification Failed:", error);
    return;
  }

  // Logic for sending
  const mailOptions = {
    subject: subject,
    html: body,
  };

  if (whoSend === "user") {
    // Guest sending TO the guesthouse
    mailOptions.from = from;
    mailOptions.to = SMTP_EMAIL;
  } else {
    // Guesthouse sending TO the guest
    mailOptions.from = SMTP_EMAIL;
    mailOptions.to = from;
  }

  try {
    const sendResult = await transport.sendMail(mailOptions);
    console.log("Email sent successfully:", sendResult.messageId);
    return sendResult;
  } catch (error) {
    console.error("SendMail Error:", error);
  }
}

import { google } from "googleapis";

export async function sendMail({ from, subject, body, whoSend = "" }) {
  const {
    SMTP_EMAIL,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN,
  } = process.env;

  // 1. Setup OAuth2 Client
  const oauth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground",
  );

  oauth2Client.setCredentials({
    refresh_token: GOOGLE_REFRESH_TOKEN,
  });

  // 2. Initialize Gmail API
  const gmail = google.gmail({ version: "v1", auth: oauth2Client });

  // 3. Helper to format the email into a "Raw" Base64 string (Required by the API)
  const createRawMessage = () => {
    const toEmail = whoSend === "user" ? SMTP_EMAIL : from;
    const fromEmail = whoSend === "user" ? from : SMTP_EMAIL;

    const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString("base64")}?=`;
    const messageParts = [
      `From: ${fromEmail}`,
      `To: ${toEmail}`,
      `Content-Type: text/html; charset=utf-8`,
      `MIME-Version: 1.0`,
      `Subject: ${utf8Subject}`,
      "",
      body,
    ];
    const message = messageParts.join("\n");

    return Buffer.from(message)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  };

  // 4. Send via HTTP API instead of SMTP
  try {
    const res = await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw: createRawMessage(),
      },
    });
    console.log("Email sent via API successfully:", res.data.id);
    return res.data;
  } catch (error) {
    console.error(
      "Gmail API Send Error:",
      error.response ? error.response.data : error,
    );
    throw error; // Throw so the frontend knows it failed
  }
}

import { sendMail } from "../../../lib/mail";
import { NextResponse } from "next/server";
import { EmailTemplate } from "../../../assets/emailTemplate";

export async function POST(request) {
  let form = await request.json();
  const { BANK, ACCOUNT_TYPE, ACCOUNT_NO } = process.env;
  try {
    await sendMail({
      from: form.email,
      subject: form.subject,
      body: EmailTemplate(
        form.firstName,
        form.lastName,
        form.email,
        form.message,
        BANK,
        ACCOUNT_TYPE,
        ACCOUNT_NO
      ),
    });
    return NextResponse.json({
      status: "Email sent",
      message: form,
    });
  } catch (error) {
    return NextResponse.json({
      status: "Email not sent",
      message: error.message,
    });
  }
}

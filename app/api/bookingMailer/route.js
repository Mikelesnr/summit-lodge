import { sendMail } from "../../../lib/mail";
import { NextResponse } from "next/server";

export async function POST(request) {
  let form = await request.json();
  const { BANK, ACCOUNT_TYPE, ACCOUNT_NO } = process.env;
  try {
    await sendMail({
      from: form.email,
      subject: form.subject,
      body: `<h3>Suject: ${form.subject}</h3>
      <h3>Booking for: ${form.firstName} ${form.lastName}</h3>
      <h3>Email: ${form.email}</h3>
      <h3>Invoice </h3>
      <p>${form.message}</p>
      <h3>Payment details</h3>
      <p>Bank Name: ${BANK}</p>
      <p>Account Type: ${ACCOUNT_TYPE}</p>
      <p>Account Number: ${ACCOUNT_NO} </p>`,
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

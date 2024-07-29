import { sendMail } from "../../../lib/mail";
import { NextResponse } from "next/server";

export async function POST(request) {
  let form = await request.json();
  try {
    await sendMail({
      from: form.email,
      subject: form.subject,
      body: `<h3>Suject: ${form.subject}</h3>
      <h3>Booking for: ${form.firstName} ${form.lastName}</h3>
      <h3>Email: ${form.email}</h3>
      <h3>Invoice </h3>
      <p>${form.message}</p>`,
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

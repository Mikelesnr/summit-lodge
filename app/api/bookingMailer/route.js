import { sendMail } from "../../../lib/mail";
import { NextResponse } from "next/server";
import { EmailTemplate } from "../../../assets/emailTemplate";

export async function POST(request) {
  let form = await request.json();
  const { BANK, ACCOUNT_TYPE, ACCOUNT_NO, ADMIN_CONTACT_EMAIL } = process.env;
  try {
    const guestBody = EmailTemplate(
      form.firstName,
      form.lastName,
      form.email,
      form.message,
      BANK,
      ACCOUNT_TYPE,
      ACCOUNT_NO,
    );

    // Send the booking confirmation to the guest
    await sendMail({
      from: form.email,
      subject: form.subject,
      body: guestBody,
    });

    // Also notify staff so they see the booking, without blocking the
    // guest confirmation if this one fails. Same info the guest sees,
    // minus the bank/account details.
    if (ADMIN_CONTACT_EMAIL) {
      try {
        const staffBody = EmailTemplate(
          form.firstName,
          form.lastName,
          form.email,
          form.message,
          BANK,
          ACCOUNT_TYPE,
          ACCOUNT_NO,
          { heading: "New Booking", showPaymentDetails: false },
        );

        await sendMail({
          from: ADMIN_CONTACT_EMAIL,
          subject: `New Booking: ${form.firstName} ${form.lastName}`,
          body: staffBody,
        });
      } catch (adminError) {
        console.error("Failed to send admin booking notification:", adminError);
      }
    }

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

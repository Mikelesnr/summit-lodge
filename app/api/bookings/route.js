import data from "../../../assets/data";
import prisma from "../../utils/connect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { firstName, lastName, roomName, email, checkIn, checkOut } =
      await req.json();

    // checkIn = new Date(checkIn);
    const booking = await prisma.booking.create({
      data: {
        firstName,
        lastName,
        roomName,
        email,
        checkIn,
        checkOut,
      },
    });

    return NextResponse.json(booking);
  } catch (error) {
    console.log("ERROR CREATING BOOKING: ", error);
    return NextResponse.json({
      error: "Error creating booking",
      status: 500,
    });
  }
}

export async function GET(req) {
  try {
    const bookings = await prisma.booking.findMany();

    return NextResponse.json(bookings);
  } catch (error) {
    console.log("ERROR GETTING TASKS: ", error);
    return NextResponse.json({ error: "Error getting bookings", status: 500 });
  }
}

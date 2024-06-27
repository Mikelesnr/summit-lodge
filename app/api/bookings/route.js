import data from "../../../assets/data";
import prisma from "../../utils/connect";
import { NextResponse } from "next/server";
import { convertDate } from "../../utils/convertDate";

export async function POST(req) {
  try {
    let { firstName, lastName, roomName, phone, email, checkIn, checkOut } =
      await req.json();

    checkIn = convertDate(checkIn);
    checkOut = convertDate(checkOut);
    const rooms = JSON.parse(roomName);

    rooms.forEach(async function (room) {
      roomName = room.name;
      const booking = await prisma.booking.create({
        data: {
          firstName,
          lastName,
          roomName,
          phone,
          email,
          checkIn,
          checkOut,
        },
      });
    });

    return NextResponse.json(booking);
  } catch (error) {
    return NextResponse.json({
      error: error,
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

export async function DELETE(req) {
  try {
    const urlParams = new URLSearchParams(req.url.split("?")[1]);
    const id = urlParams.get("id"); // Assuming the ID is passed as a query parameter

    await prisma.booking.delete({
      where: {
        id: id, // Keep the ID as a string
      },
    });

    return NextResponse.json({
      message: `Booking deleted successfully`,
    });
  } catch (error) {
    console.error("Error deleting booking:", error);
    return NextResponse.json({ error: "Internal server error", status: 500 });
  }
}

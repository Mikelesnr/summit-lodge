import prisma from "@/app/utils/connect";
// import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/authOptions";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // if (!userId) {
    //   return NextResponse.json({ error: "Unauthorized", status: 401 });
    // }

    const { name, email, room, checkIn, checkOut } = await req.json();

    // const nameArr = splitString(assigned, " ");
    // const fName = nameArr[0];
    // const lName = nameArr[nameArr.length - 1];
    // const records: any =
    //   await prisma.$queryRaw`SELECT * FROM User WHERE firstName = ${fName} AND lastName = ${lName} `;
    // const assignedId = records[0].id;
    // const email = records[0].email;

    //   const body = compileTaskCreateTemplate(fName, title, description);
    //   await sendMail({
    //     to: email,
    //     subject: "New Task",
    //     body: body,
    //     attachments: [],
    //   });

    //   if (!title || !description || !date) {
    //     return NextResponse.json({
    //       error: "Missing required fields",
    //       status: 400,
    //     });
    //   }

    //   if (title.length < 3) {
    //     return NextResponse.json({
    //       error: "Title must be at least 3 characters long",
    //       status: 400,
    //     });
    //   }

    const booking = await prisma.task.create({
      data: {
        name,
        email,
        room,
        checkIn,
        checkOut,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.log("ERROR CREATING TASK: ", error);
    return NextResponse.json({ error: "Error creating task", status: 500 });
  }
}

export async function GET(req) {
  try {
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const bookings = await prisma.user.findMany();

    return NextResponse.json(users);
  } catch (error) {
    console.log("ERROR GETTING TASKS: ", error);
    return NextResponse.json({ error: "Error getting tasks", status: 500 });
  }
}

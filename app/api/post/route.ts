import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "../../../lib/db";
import PostModel from "../../../app/models/PostModel";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {
  console.log("hit get post", new Date().getSeconds());
  try {
    await dbConnect();
    const post = await PostModel.create({ name: "post double render" });
    return new NextResponse("Posted");
  } catch (error) {
    console.log("error from route", error);
    return new NextResponse("Error");
  }
}

import { connectionStr } from "@/app/libs/dbConnect";
import { User } from "@/app/libs/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionStr);
  const data = await User.find();

  return NextResponse.json({ result: data });
}

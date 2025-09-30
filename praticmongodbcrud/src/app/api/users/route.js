import { NextResponse } from "next/server";
import dbConnect from "../../../../libs/dbConnect";
import User from "../../../../models/user";

export async function POST(request) {
  const { title, des } = await request.json();
  await dbConnect();
  await User.create({ title, des });
  return NextResponse.json({ message: "Topic create" }, { status: 201 });
}

import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Accordion from "@/models/mydata";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDes: des } = await request.json();
  await connectMongoDB();
  await Accordion.findByIdAndUpdate(id, { title, des });
  return NextResponse.json({ message: "update ok" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const accordions = await Accordion.findOne({ _id: id });
  return NextResponse.json({ accordions }, { status: 200 });
}

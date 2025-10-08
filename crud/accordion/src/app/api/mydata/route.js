import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Accordion from "../../../../models/mydata";

 

export async function GET() {
  await connectMongoDB();
  const accordions = await Accordion.find();
  return NextResponse.json({ accordions });
}
 
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectMongoDB from "@/lib/mongodb";
import Firsttry from "@/models/user";

export async function POST(request: Request) {
  const { name, email, password, conformPassword } = await request.json();
  if (!name || !email || !password || !conformPassword) {
    return NextResponse.json({ message: "All field req" }, { status: 400 });
  }
  if (conformPassword !== password) {
    return NextResponse.json(
      { message: "password don't match" },
      { status: 400 }
    );
  }

  try {
    await connectMongoDB();
    const existingUser = await Firsttry.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "user already exit" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Firsttry({
      email,
      name,
      password: hashedPassword,
    });

    await newUser.save();
    return NextResponse.json({ message: "user create" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "sometning worng" }, { status: 500 });
  }
}

// export async function GET() {
//   await connectMongoDB();
//   const topics = await Topic.find();
//   return NextResponse.json({ topics });
// }

// export async function DELETE(request) {
//   const id = request.nextUrl.searchParams.get("id");
//   await connectMongoDB();
//   await Topic.findByIdAndDelete(id);
//   return NextResponse.json({ message: "topic delete" }, { status: 200 });
// }

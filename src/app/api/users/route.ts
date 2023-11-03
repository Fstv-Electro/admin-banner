import connectMongoDB from "../../../utils/mongodb";
import User from "../../../../models/users";
import { NextRequest, NextResponse } from "next/server";

// http://localhost:3000/api/users

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();

  await connectMongoDB();
  await User.create({ name, email });
  return NextResponse.json(
    {
      message: {
        user: name,
        email: email,
      },
    },
    { status: 201 }
  );
}

export async function GET() {
  try {
    await connectMongoDB();
    const users = await User.find({});
    return NextResponse.json( users );
  } catch (error) {
    console.log("Не вдалося отримати список користувачів");
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await User.findByIdAndDelete(id);
    const users = await User.find();
    return NextResponse.json(users , { status: 200 });
  } catch (error) {
    console.log("Не вдалося видалити користувача");
  }
}

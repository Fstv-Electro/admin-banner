import connectMongoDB from "../../../../utils/mongodb";
import User from "../../../../../models/users";
import { NextRequest, NextResponse } from "next/server";

// http://localhost:3000/api/users/id

export async function PUT(req: NextRequest, { params }:any) {
  const { id } = params;
  const { newName: name, newEmail: email } = await req.json();

  await connectMongoDB();
  await User.findByIdAndUpdate(id, { name, email });
  const users = await User.find();
  return NextResponse.json(users , { status: 200 });
}

export async function GET(req: NextRequest, { params }:any) {
  const { id } = params;

  await connectMongoDB();
  const user = await User.findById({ _id: id });

  return NextResponse.json( user , { status: 200 });
}

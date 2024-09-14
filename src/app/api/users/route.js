import { NextResponse } from "next/server";
import { user } from "../../ApiUtil/db";

export async function GET(req) {
  const data = user;
  return NextResponse.json(data);
}

export async function POST(req) {
  try {
    const newUser = await req.json();
    user.push(newUser);
    return NextResponse.json({
      success: true,
      message: "User added successfully",
      users: user,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}

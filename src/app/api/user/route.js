import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json(
    {
      name: "John Doe",
      email: "akm@gmail.com",
      age: 27,
    },
    { status: 200 }
  );
}

import { NextResponse } from "next/server";
import { user } from "../../ApiUtil/db";

export async function GET(req) {
  const data = user;
  return NextResponse.json(data);
}

export async function POST() {
  const data = user;
  return NextResponse.json(data);
}

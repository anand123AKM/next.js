import { NextResponse } from "next/server";
import { user } from "../../../ApiUtil/db";

export async function GET(res, req) {
  const data = user;
  const userIndex = data.findIndex(
    (user) => user.id === parseInt(req.params.id)
  );
  return NextResponse.json(
    userIndex !== -1 ? data[userIndex] : { message: "User not found" }
  );
}

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

export async function PUT(req, res) {
  let payload = await req.json();
  let id = res.params.id;
  console.log("Payload:", payload);
  console.log("Id:", id);
  payload.id = res.params.id;
  console.log("Payload:", payload);

  return NextResponse.json({
    result: payload,
    success: true,
    message: "User updated successfully",
  });
}

export async function DELETE(req, res) {
  const id = res.params.id;
  if (id) {
    return NextResponse.json({ success: true, message: "Deleted user" });
  } else {
    return NextResponse.json({ success: false, message: "User not found" });
  }
}

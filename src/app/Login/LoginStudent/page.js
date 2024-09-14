"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  return (
    <>
      <div>Student Login</div>
      <div>
        <Link style={{ marginRight: "20px" }} href="/Login">
          Login
        </Link>
        <Link href="/">Home</Link>
      </div>
      <div>
        <button
          style={{ marginTop: "10px", marginRight: "20px" }}
          onClick={() => router.push("/Login")}
        >
          Login
        </button>
        <button onClick={() => router.push("/")}>Home</button>
      </div>
    </>
  );
}

export default page;

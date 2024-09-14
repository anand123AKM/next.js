"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  return (
    <>
      <div>About</div>
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
      <div style={{ marginTop: "10px", marginRight: "20px" }}>
        <Link
          style={{ marginTop: "20px", marginRight: "20px" }}
          href="/About/AboutCollege"
        >
          About College
        </Link>
        <Link href="/About/AboutStudent">About Student</Link>
      </div>
      <div>
        <button
          style={{ marginTop: "10px", marginRight: "20px" }}
          onClick={() => router.push("/About/AboutCollege")}
        >
          About College
        </button>
        <button onClick={() => router.push("/About/AboutStudent")}>
          About Student
        </button>
      </div>
    </>
  );
}

export default page;

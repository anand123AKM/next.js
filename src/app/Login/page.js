"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  return (
    <>
      <div>Login</div>
      <div>
        <Link style={{ marginRight: "20px" }} href="/About">
          About
        </Link>
        <Link href="/">Home</Link>
      </div>
      <div>
        <button
          style={{ marginTop: "10px", marginRight: "20px" }}
          onClick={() => router.push("/About")}
        >
          About
        </button>
        <button onClick={() => router.push("/")}>Home</button>
      </div>
      <div style={{ marginTop: "10px", marginRight: "20px" }}>
        <Link
          style={{ marginTop: "20px", marginRight: "20px" }}
          href="/Login/LoginStudent"
        >
          LoginStudent
        </Link>
        <Link href="/Login/LoginTeacher">LoginTeacher</Link>
      </div>
      <div>
        <button
          style={{ marginTop: "10px", marginRight: "20px" }}
          onClick={() => router.push("/Login/LoginStudent")}
        >
          LoginStudent
        </button>
        <button onClick={() => router.push("/Login/LoginTeacher")}>
          LoginTeacher
        </button>
      </div>
    </>
  );
}

export default page;

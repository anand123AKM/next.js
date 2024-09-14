"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function student() {
  const router = useRouter();

  return (
    <>
      <div>student</div>
      <div>
        <Link style={{ marginRight: "20px" }} href="/About/AboutCollege">
          About College
        </Link>
        <Link href="/About">About</Link>
      </div>
      <div>
        <button
          style={{ marginTop: "10px", marginRight: "20px" }}
          onClick={() => router.push("/About/AboutCollege")}
        >
          About College
        </button>
        <button onClick={() => router.push("/About")}>About</button>
      </div>
    </>
  );
}

export default student;

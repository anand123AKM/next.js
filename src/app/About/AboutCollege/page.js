"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function college() {
  const router = useRouter();

  return (
    <>
      <div>college</div>
      <div>
        <Link style={{ marginRight: "20px" }} href="/About/AboutStudent">
          About Student
        </Link>
        <Link href="/About">About</Link>
      </div>
      <div>
        <button
          style={{ marginTop: "10px", marginRight: "20px" }}
          onClick={() => router.push("/About/AboutStudent")}
        >
          About Student
        </button>
        <button onClick={() => router.push("/About")}>About</button>
      </div>
    </>
  );
}

export default college;

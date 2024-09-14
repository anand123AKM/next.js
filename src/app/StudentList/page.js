"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";

function page() {
  const router = useRouter();
  const student = ["anil", "peter", "shark", "sam"];
  return (
    <>
      <div>
        <h1>Student List</h1>
        {student.map((stud) => (
          <ul>
            <li>
              <Link href={`/StudentList/${stud}`}>{stud}</Link>
            </li>
          </ul>
        ))}
      </div>
      <div>
        <button
          style={{ marginTop: "10px", marginRight: "20px" }}
          onClick={() => router.push("/")}
        >
          Home
        </button>
      </div>
    </>
  );
}

export default page;

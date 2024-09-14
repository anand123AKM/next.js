"use client";
import React from "react";

function Students({ params }) {
  return (
    <>
      <div>Student Details</div>
      <div>Student Name: {params.student}</div>
    </>
  );
}

export default Students;

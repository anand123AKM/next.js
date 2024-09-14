"use client";
import React from "react";

function page({ params }) {
  console.log(params);
  return (
    <>
      <div>Lectures of College</div>
      <h1>Day of College : {params.lectures[0]}</h1>
      <h1>Lecture no :{params.lectures[1]}</h1>
    </>
  );
}

export default page;

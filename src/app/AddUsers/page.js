"use client";
import React from "react";
import "./addUser.css";

function page() {
  return (
    <>
      <h1>Add Users</h1>
      <form className="form">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          age:
          <input type="number" name="age" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default page;

"use client";
import React from "react";
import Link from "next/link";
import "./login.css";

function layout({ children }) {
  return (
    <div>
      <ul className="loginHeader">
        <Link className="l" href="/Login">
          Login
        </Link>

        <Link className="l" href="/Login/LoginStudent">
          Teacher Login
        </Link>

        <Link className="l" href="/Login/LoginTeacher">
          Student Login
        </Link>
      </ul>
      {children}
    </div>
  );
}

export default layout;

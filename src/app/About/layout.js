"use client";
import React from "react";
import Link from "next/link";
import "./About.css";

function layout({ children }) {
  return (
    <div>
      <ul className="loginHeader">
        <Link className="l" href="/About">
          About
        </Link>

        <Link className="l" href="/About/AboutCollege">
          About College
        </Link>

        <Link className="l" href="/About/AboutStudent">
          About Student
        </Link>
      </ul>
      {children}
    </div>
  );
}

export default layout;

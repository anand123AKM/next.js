"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const click = (e) => {
    alert(e);
  };

  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <h1 style={{ marginRight: "20px" }} className={styles.main}>
          Home {"  "}
        </h1>
        <User name="AKM" />
      </div>
      <div className={styles.container}>
        <button
          className={styles.button}
          onClick={() => click("next js clicked")}
        >
          Click me
        </button>
      </div>
      <div className={styles.container}>
        <Link style={{ marginRight: "20px" }} href="/Login">
          Login
        </Link>
        <Link href="/About">About</Link>
      </div>
      <div>
        <button
          style={{ marginRight: "20px" }}
          onClick={() => router.push("/Login")}
        >
          Login
        </button>
        <button onClick={() => router.push("/About")}>About</button>
      </div>
      <div>
        <button
          style={{ marginTop: "10px", marginRight: "20px" }}
          onClick={() => router.push("/StudentList")}
        >
          Student List
        </button>
      </div>
      <div>
        <button
          style={{ marginTop: "10px", marginRight: "20px" }}
          onClick={() => router.push("/study")}
        >
          Study Material
        </button>
      </div>
      <div>
        <h1>Fetching Data from API</h1>
        <button
          style={{ marginTop: "10px", marginRight: "20px" }}
          onClick={() => router.push("/Quotes")}
        >
          Fetch Data
        </button>
        <button
          style={{ marginTop: "10px", marginRight: "20px" }}
          onClick={() => router.push("/serverQuotes")}
        >
          Server Fetch Data
        </button>
      </div>
      <div>
        <h1>Backend API</h1>
        <button
          style={{ marginTop: "10px", marginRight: "20px" }}
          onClick={() => router.push("/api/hello")}
        >
          backend
        </button>
        <button style={{ marginTop: "10px", marginRight: "20px" }}>
          <Link href="/api/user">backend1</Link>
        </button>
        <button style={{ marginTop: "10px", marginRight: "20px" }}>
          <Link href="/api/users">backend2</Link>
        </button>
      </div>
      <hr />
      <hr />
      <div>
        <button
          style={{
            marginTop: "10px",
            marginRight: "20px",
            marginBottom: "60px",
          }}
        >
          <Link href="/BackendAPI">Get API</Link>
        </button>
        <button>
          <Link href="/AddUsers">Post API</Link>
        </button>
      </div>
    </>
  );
}

const User = (name) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.main}>
        {"  "}User : {name.name}
      </h1>
    </div>
  );
};

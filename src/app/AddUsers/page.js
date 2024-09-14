"use client";
import React, { useState } from "react";
import "./addUser.css";

function AddUserPage() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const bearerToken =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0MTcyNjY5LCJpYXQiOjE3MjQxNzIzNjksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImVmNjgwODM1LTEzMTEtNDBlNi1hMDY2LTYyZDQ5NzRkMjgyOSIsInN1YiI6ImFuYW5kbWF1cnlhMTYxMEBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJCQkROSVRNIiwiY2xpZW50SUQiOiJlZjY4MDgzNS0xMzExLTQwZTYtYTA2Ni02MmQ0OTc0ZDI4MjkiLCJjbGllbnRTZWNyZXQiOiJpa2hsblBuRVFlWElzbHFMIiwib3duZXJOYW1lIjoiQU5BTkQg";

  const AddUser = async (event) => {
    event.preventDefault();
    try {
      const userData = { id, name, email, age, phone, address };
      console.log("Sending user data:", userData);

      let response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: bearerToken,
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log("Response from API:", data);

      if (data.success) {
        alert("User Added Successfully");
      } else {
        alert(`User not Added: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error adding user:", error);
      alert(`An error occurred while adding the user: ${error.message}`);
    }
  };

  return (
    <>
      <h1>Add Users</h1>
      <form className="form" onSubmit={AddUser}>
        <label>
          ID:
          <input
            value={id}
            type="text"
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            value={age}
            type="number"
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            value={phone}
            type="text"
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            value={address}
            type="text"
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}

export default AddUserPage;

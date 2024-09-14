import React from "react";
async function Page({ params }) {
  let data = await fetch("https://freetestapi.com/api/v1/students?limit=100");
  let students = await data.json();
  console.log(params);
  let studentdata = students[params.studentData - 1];
  console.log(studentdata);
  return (
    <>
      <h2>Student API Detail</h2>
      <div>
        <div style={{ margin: "10px" }}>ID: {studentdata.id} </div>
        <div style={{ margin: "10px" }}>Name: {studentdata.name}</div>
        <div style={{ margin: "10px" }}>Age: {studentdata.age} </div>
        <div style={{ margin: "10px" }}>Gender: {studentdata.gender} </div>
        <div style={{ margin: "10px" }}>Email: {studentdata.email} </div>
        <div style={{ margin: "10px" }}>Phone: {studentdata.phone} </div>
      </div>
    </>
  );
}

export default Page;

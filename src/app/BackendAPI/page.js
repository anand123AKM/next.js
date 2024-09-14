import React from "react";
import Link from "next/link";

async function Page() {
  let data = await fetch("https://freetestapi.com/api/v1/students?limit=100");
  let students = await data.json();
  return (
    <>
      <div>Student API data</div>
      <div>
        {students.map((student) => (
          <div style={{ marginTop: "20px" }} key={student.id}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ marginRight: "10px" }}>ID: {student.id}</div>
              <Link
                id={student.id}
                age={student.age}
                gender={student.gender}
                email={student.email}
                phone={student.phone}
                name={student.name}
                href={`/BackendAPI/${student.id}`}
              >
                {student.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Page;

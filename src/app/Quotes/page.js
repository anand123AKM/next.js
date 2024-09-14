"use client";
import React, { useEffect, useState } from "react";

function Page() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://dummyjson.com/quotes?limit=100");
        let data = await response.json();
        setQuotes(data.quotes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>Quote of the Day</div>
      {quotes.map((q) => (
        <div style={{ marginTop: "20px" }} key={q.id}>
          {q.quote}
        </div>
      ))}
    </>
  );
}

export default Page;

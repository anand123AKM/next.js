async function Quotes() {
  let data = await fetch("https://dummyjson.com/quotes?limit=100");
  data = await data.json();
  return data.quotes;
}

import React from "react";
import Writer from "./writer";
import Link from "next/link";
async function page() {
  let quotes = await Quotes();
  return (
    <>
      <div>Quote of the Day</div>
      {quotes.map((q) => (
        <div style={{ marginTop: "20px" }} key={q.id}>
          <Link key={q.id} href={`/serverQuotes/${q.id}`}>
            {q.author}
          </Link>
          <Writer writer={q.author} />
        </div>
      ))}
    </>
  );
}

export default page;

export function generateMetadata() {
  return {
    title: "Quotes",
    description: "Get your daily dose of quotes",
  };
}

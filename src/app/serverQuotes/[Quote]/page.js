import React from "react";
import Quotes1 from "../../../../public/script";
async function page(props) {
  const getQuotes = Quotes1;
  let quotes = await getQuotes();
  const currentQuote = props.params.Quote;
  console.log(quotes[currentQuote - 1]);
  return (
    <>
      <div>Quote of the Day</div>

      <div key={quotes[currentQuote - 1].id}>
        <h2>{quotes[currentQuote - 1].id}</h2>
        {quotes[currentQuote - 1].author}
        <div>{quotes[currentQuote - 1].quote}</div>
      </div>
    </>
  );
}

export default page;

export async function generateStaticParams() {
  const getQuotes = Quotes1;
  let quotes = await getQuotes();
  return quotes.map((quote) => {
    return {
      Quote: quote.id.toString(),
    };
  });
}

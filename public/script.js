// import Script from next/script  <Script>  </Script>
async function Quotes1() {
  let data = await fetch("https://dummyjson.com/quotes?limit=100");
  data = await data.json();
  return data.quotes;
}

export default Quotes1;

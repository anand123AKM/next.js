export async function GET(req, res) {
  console.log(res);
  return new Response("Catch all route");
}

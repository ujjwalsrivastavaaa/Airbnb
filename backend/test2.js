import dns from "node:dns/promises";

try {
  const result = await dns.lookup("google.com");
  console.log(result);
} catch (err) {
  console.error(err);
}
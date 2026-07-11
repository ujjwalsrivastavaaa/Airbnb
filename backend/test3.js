import dns from "node:dns/promises";

try {
  const records = await dns.resolveSrv(
    "_mongodb._tcp.cluster0.s457oab.mongodb.net"
  );
  console.log(records);
} catch (err) {
  console.error("SRV Error:", err);
}

try {
  const records = await dns.resolve4("cluster0.s457oab.mongodb.net");
  console.log(records);
} catch (err) {
  console.error("A Record Error:", err);
}
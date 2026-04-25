const http = require("http");
const puerto = process.env.PORT || 8080;
const mensaje = process.env.MENSAJE || "Hola desde Kubernetes!";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`${mensaje}\n`);
});
server.listen(puerto, () => console.log(`Servidor en puerto ${puerto}`));

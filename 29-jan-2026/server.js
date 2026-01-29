const http=require("http");
const server=http.createServer((req,res)=>{
  res.statusCode=200;
  res.setHeader("Content-Type","text/plain");
  res.end("welcome to node.js tutorial");
});
server.listen(3000,()=>{
  console.log("server is running on http://localhost:3000");
});
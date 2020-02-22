const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
  //       if (err) {
  //         throw err;
  //       }
  //       res.writeHead(200, { "Content-Type": "text-html" });
  //       res.end(data);
  //     });
  //   }
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  const ext = path.extname(filePath);
  if (!ext) {
    filePath += ".html";
  }
  console.log(filePath);
  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(
        path.join(__dirname, "public", "error.html"),
        (error, data) => {
          if (error) {
            res.writeHead(500);
            res.end("error");
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
          }
        }
      );
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    }
  });
});
server.listen(3000, () => console.log(`server is started`));

import express from "express";
import { fileURLToPath } from "node:url";
import path from "node:path";

const app = express();
const currentFile = fileURLToPath(import.meta.url);
const pagesDirectory = path.join(path.dirname(currentFile), "pages");

app.get("/", (req, res) => {
    res.sendFile(path.join(pagesDirectory, "product.html"));
})

app.listen(4444, () => {
  console.log("NovaTech pages are running at http://localhost:4444");
});
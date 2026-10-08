import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";
// const filename = fileURLToPath(import.meta.url);
const app = express();
// const dirName = path.dirName(filename);
const urlPath= fileURLToPath(import.meta.url);
const rootFolder = path.dirname(urlPath);

app.use(express.static(path.join(rootFolder, "pages")));

app.use((req,res)=>{
    res.status(404).send
})

app.listen(4444, ()=> console.log("prg3 is running at 4444")); 
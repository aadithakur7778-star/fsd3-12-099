import express from "express"

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello from prg1 to express")
});

app.listen(4444,()=> console.log("prg1 is running at 4444"));
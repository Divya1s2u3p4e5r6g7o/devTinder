const express = require('express');

const app = express(); //Instance of express

app.use("/hello",(req,res)=>{
res.send("Hello,Hello,Hello!........");
});

app.use("/",()=>{
    console.log("Namaste Divya!");
})
app.use("/test",(req,res)=>{
    res.send("Hello from the server");
});

app.listen(7777,()=>{
    console.log("Server is Successfully listening on port 7777");
});
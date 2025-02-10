const express = require('express');

const app = express(); //Instance of express

//This will only handle GET call to /user
app.get("/user",(req,res)=>{
    res.send({firstName:"John",lastName:"Doe"});
})

app.post("/user",(req,res)=>{
    console.log("Save data To the database")
    res.send("Data successfully save to the database!");
})

app.delete("/user",(req,res)=>{
    res.send("Deleted Successfully!");
})
//This will match all the Http Method API calls to /test
app.use("/test",(req,res)=>{
    res.send("Hello from the server");
});

app.listen(7777,()=>{
    console.log("Server is Successfully listening on port 7777");
});
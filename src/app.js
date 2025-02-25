const express = require('express');

const connectDB = require('./config/database');
const app = express(); //Instance of express
const User = require("./models/user");

app.post("/signup",async (req,res)=>{
    //Creating A new instance of the User model
    const user = new User({
        firstName:"Sravan",
        lastName:"Kammari",
        emailId:"sravan.k@sunkpo.com",
        password:"Sravan@123"
    })
    try{
    await user.save();
    res.send("user added successfully");
    }catch(err){
        res.status(400).send("Error saving the user",+ err.message)
    }
})
connectDB().then(()=>{
    console.log("Database Connection established");
    app.listen(7777,()=>{
        console.log("Server is Successfully listening on port 7777");
    });
}).catch(err=>{
    console.log("Error in connecting to the database",err);
})


const express = require('express');

const connectDB = require('./config/database');
const app = express(); //Instance of express
const User = require("./models/user");

app.use(express.json());

app.post("/signup",async (req,res)=>{
    //Creating A new instance of the User model
    const user = new User(req.body);
    try{
    await user.save();
    res.send("user added successfully");
    }catch(err){
        res.status(400).send("Error saving the user",+ err.message)
    }
})
//Get User By EmailId
app.get("/user",async (req,res)=>{
    try{
        const emailId = req.body.emailId;
        const users = await User.find({emailId:emailId});
        if(users.length === 0){
            res.send("User not found");
        }
        else{
            res.send(users);
        }

    }catch(err){
        res.status(400).send("Error fetching users",+ err.message)
    }
})
//Feed API Get /feed - get all the users from the database
app.get("/feed",async (req,res)=>{
    try{
        const users = await User.find({});
        res.send(users);
    }catch(err){
        res.status(400).send("Error fetching users",+ err.message)
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


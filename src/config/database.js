const mongoose = require('mongoose');

const connectDB = async()=>{
   await mongoose.connect("mongodb+srv://uppalapatidivya999:Divya%40123@nodejs.ifg2g.mongodb.net/devTinder");
}

module.exports = connectDB;

// Load env variables
if(process.env.NODE_ENV != "production") {
    require("dotenv").config();
    }
//import dependencies
const mongoose = require('mongoose');

async function connectToDb(){
    try{
        await mongoose.connect(process.env.db_url);
        console.log("Connected to DB");
    }
    catch (err){
        console.log(err);
    }   
}
module.exports = connectToDb;
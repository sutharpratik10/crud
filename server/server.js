// Load env variables
if(process.env.NODE_ENV != "production") {
require("dotenv").config();
}

// Import dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");
const notecontroller = require("./controllers/notesController");
const cors = require('cors');

// Create an express app
const app = express();

//configure express app
app.use(express.json());
app.use(cors())

//connect to database
connectToDb();

//routes
//Send the data to the Database
app.post("/notes",notecontroller.createnotes );

//fetch the data from the Database
app.get("/notes",notecontroller.fetchnotes );

//fetch the data from the Database by ID
app.get("/notes/:id", notecontroller.fetchnotesbyid);

//find and update the note
app.put("/notes/:id", notecontroller.updatenotebyid);

//find and delete the note by ID
app.delete("/notes/:id", notecontroller.deletenotebyid);

// Start our server
app.listen(process.env.PORT, () => console.log('Server is running on localhost:3000') );



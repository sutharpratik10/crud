//Send the data to the Database
const Note = require("../modal/note");

const createnotes = async(req, res) =>{
    
    //get the sent in data off request body
    const {title, body} = req.body;
    
    //create a note with it 
    const data = await Note.create({
            title,
            body,
        });
    //respond with the new note
    res.json({data});
}

//fetch the data from the Database
const fetchnotes = async(req, res) => {
    //find the note
    const data = await Note.find()
    //respond with it
    res.json({data});
}

//fetch the data from the Database by ID
const fetchnotesbyid = async(req, res) => {
    //get the id off the url
    const noteid = req.params.id;

    //find the note using the id
    const data = await Note.findById(noteid);
    
    //respond with it
    res.json({data});
}

//find and update the note
const updatenotebyid = async(req, res) => {
    //get the id off the url
    const noteid = req.params.id;
    
    //get the sent in data off request body
    const {title, body} = req.body;

    //find and update the note
    await Note.findByIdAndUpdate(noteid, {
        title,
        body,
    });

    //find updated note
    const data = await Note.findById(noteid);
    
    //respond with it
    res.json({data});
}

//find and delete the note by ID
const deletenotebyid = async(req, res) => {
    //get the id off the url
    const noteid = req.params.id;
    
    //find and delete the note
    await Note.findByIdAndDelete(noteid);
    
    //respond with it
    res.json({success:"Record deleted"});
}

module.exports = {
    createnotes,
    fetchnotes,
    fetchnotesbyid,
    updatenotebyid,
    deletenotebyid,
}
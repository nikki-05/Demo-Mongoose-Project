const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/be_demodb") //where to connect
const db= mongoose.connection //start the connection with mongo database
db.on("error", ()=>{
    console.log("Error while Connecting")
});
db.once("open", ()=>{
    console.log("Connected to Mongo database")
});
const mongoose = require("mongoose")
const studentModel= require("./models/student.model")

mongoose.connect("mongodb://localhost/be_demodb") //where to connect
const db= mongoose.connection //start the connection with mongo database
db.on("error", ()=>{
    console.log("Error while Connecting")
    
});
db.once("open", ()=>{
    console.log("Connected to Mongo database")
    //logic to insert data into the db 
});
async function init(){
    const student={
        name: "Nikita",
        age: 21,
        email: "nikitatewari1633@gmail.com",
        subjects: ["english", "Computer"]
    }
   const std_obj=  await studentModel.create(student)
   console.log(std_obj)
}
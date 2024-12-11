/**
 * Define the schema of students collection stored in database
 */
const mongoose= require("mongoose")

//schema
const studentSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type:Number,
        min: 18
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        minLength: 12

    },
    subjects: [String],
        /*createdAt: {
            type: Date,
            immutable: true,
            default: ()=>{
                return Date.now()
            }

        }*/  // these lines are of no use when we are creating the below one 
},{versionKey: false, timestamps: true}) //this will remove hthe version key and add timestamps with 'CreatedAt' and 'UpdatedAt' function 
//create corresponding collection
module.exports= mongoose.model("Student", studentSchema)  //name of collection and schema of the documents
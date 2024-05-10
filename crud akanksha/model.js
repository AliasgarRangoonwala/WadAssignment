const mongoose = require ("mongoose");
const url = "mongodb://localhost:27017/MyUsers";

mongoose.connect(url);
//This section imports the Mongoose library and establishes a connection to a MongoDB database named 
// MyUsers running on localhost at port 27017.
const userSchema = mongoose.Schema({
    name : {
        type: String,
        required : true,
    },
    password : {
        type: String,
        required : true,
    },
    email : {
        type: String,
        required : true,
    }
},{
        timestamps : true
    }
);
//This code defines a Mongoose schema for the Users collection in the MongoDB database.The schema specifies the structure of user documents, including fields like name, password, and email. Additionally, it includes timestamps for when documents are created and updated.
module.exports = mongoose.model( "Users",userSchema);
//This line exports the Mongoose model for the Users collection, using the schema defined above. The model can be imported and used in other parts of the application to perform CRUD operations on user data.
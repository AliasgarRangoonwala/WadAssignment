const express = require("express")
const app = express();
const PORT = 5000;
const userModel = require("./model")

// This section imports the Express framework and creates an Express application instance.
//  It also imports the userModel from a separate file (model.js) which presumably defines the Mongoose
//   model for users.

app.use(express.json());
//This middleware is used to parse JSON bodies of incoming requests. It allows the application to handle 
// JSON data sent in the request body.When an HTTP request is made to the Express application, such as a POST or PUT request with a JSON payload in the request body, express.json() middleware intercepts the request before it reaches the route handlers.
// It reads the data from the request body, which is expected to be in JSON format.
// It then parses the JSON data and exposes it as a JavaScript object in the req.body property of the request object.

app.get("/users",async(req,resp)=>{
    const data = await userModel.find();
    resp.json(data);
} ) 
//The purpose of this route handler is to fetch and return all user data from the MongoDB database when a GET request is made to the /users endpoint.
//When a GET request is made to the /users endpoint (e.g., GET /users), Express invokes this route handler.
// Inside the route handler's callback function:
// It executes an asynchronous operation to fetch data from the MongoDB database using Mongoose.
// The await userModel.find() statement queries the userModel collection to retrieve all documents (users) from the database.
// The find() method returns a promise that resolves to an array containing all user documents that match the query criteria.
// The await keyword ensures that the execution of the route handler pauses until the promise returned by userModel.find() is resolved, i.e., until the database query completes.
// Once the data is retrieved from the database, it responds to the client with JSON-formatted data.
// The resp.json(data) statement sends an HTTP response back to the client containing the retrieved user data in JSON format.
// The data variable holds the array of user documents returned by the userModel.find() method.


//Asynchronous Operations: When handling HTTP requests in a Node.js application, you often need to perform asynchronous operations such as database queries, file I/O, or external API calls. These operations may take some time to complete, during which your code should not block the event loop.


app.post("/users",async(req,resp)=>{
    // console.log(req.body);
    const data =  new userModel({...req.body});
    const result = await data.save();
    resp.send(result);  
} )

//const data = new userModel({ ...req.body });: This line creates a new instance of the userModel. userModel presumably represents a Mongoose model for interacting with a MongoDB database. The { ...req.body } part spreads the properties of the req.body object into a new object. This means it creates a new object with the same properties and values as req.body. This new object is used to create a new instance of the userModel.
// const result = await data.save();: This line saves the newly created user data to the MongoDB database. data.save() is an asynchronous operation that saves the document represented by the data object to the database. It returns a promise that resolves to the saved document.
// resp.send(result);: This line sends a response back to the client. It sends the result of the save operation as the response. If the save operation was successful, result contains the saved document. If an error occurred during the save operation, result contains an error message. The send() method sends the response to the client.






app.patch("/users/:id",async(req,resp)=>{
    const data = await userModel.updateOne({_id : req.params.id},{$set:{...req.body}});
    resp.send(data);
} )
// async (req, resp) => { ... }: This part defines an asynchronous arrow function that takes req (request) and resp (response) objects as parameters. The function is marked as async because it performs asynchronous operations.
// const data = await userModel.updateOne({ _id: req.params.id }, { $set: { ...req.body } });: Inside the route handler function:
// It uses await to asynchronously wait for the updateOne() method of the userModel to complete.
// userModel.updateOne() is a method provided by Mongoose for updating a single document in the MongoDB collection represented by userModel.
// It takes two arguments:
// The first argument is a query object that specifies which document(s) to update. In this case, it searches for a document with the specified _id, which is extracted from the route parameters using req.params.id.
// The second argument is an update object that specifies the changes to be applied to the document(s). Here, $set is used to update the document with the properties contained in req.body. The spread operator { ...req.body } is used to create a new object containing all properties from req.body.



app.delete("/users/:id",async(req,resp)=>{
    const data = await userModel.deleteOne({_id : req.params.id});
    resp.send(data);
} )

//These routes define the behavior for various HTTP methods (GET, POST, PATCH, DELETE) on the /users endpoint.
// Each route handler is an asynchronous function that performs specific operations related to users, such as fetching all users, creating a new user, updating an existing user, and deleting a user.

app.listen(PORT,()=>{
    console.log( `Server running on port ${PORT}`);
})
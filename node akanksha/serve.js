const express = require('express'); // This line imports the Express.js library. require() is a Node.js function used to import modules, and here, it imports the 'express' module. The express variable is assigned to the Express library, allowing you to create an Express application.
const abc = express();//This line creates an instance of the Express application. The express() function returns an Express application object, which is assigned to the variable abc. You can then use abc to configure routes, middleware, and more for your Express application.

const path = require("path")//This line imports the 'path' module from the Node.js standard library. The 'path' module provides utilities for working with file and directory paths.

const PORT = 8082//This line defines a constant named 'PORT' and sets its value to 8082. This is the port number on which your Express server will listen for incoming HTTP requests.

abc.use(express.static('public'));//This line sets up Express middleware to serve static files from the 'public' directory. Static files include things like HTML, CSS, JavaScript, images, and more. When a request is made for a static file, Express will look for it in the 'public' directory and serve it if found

abc.get('/', function(req, res) {
    res.send('Hello World!');
});//This line defines a route handler for the root URL '/'. When a GET request is made to the root URL, the callback function specified (in this case, an anonymous function) is executed. It takes two arguments: 'req' (the request object) and 'res' (the response object). In this example, it simply sends the response 'Hello World!' back to the client.

abc.listen(PORT, function(){

 console.log(`Server listening on port::${PORT}`);

}); //This line starts the Express server and makes it listen on the specified port (8082 in this case). The listen() method takes the port number and an optional callback function as arguments. The callback function is executed once the server starts listening for incoming requests. In this example, it logs a message to the console indicating that the server is listening on the specified port.

//http://localhost:8082/index.html

//rename ass in public if not working

//first node -v       npm - v   npm init npm install express and the create public folder andthen serve.js file and run by node serve.js
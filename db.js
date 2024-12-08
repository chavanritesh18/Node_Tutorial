const mongoose  = require('mongoose');
//this is the comment

// Define the mongoDB connection URL
const mongoURL  =  'mongodb://127.0.0.1:27017/hotels'

// Set up the MongoDB connection
mongoose.connect(mongoURL, {
   useNewUrlParser : true,
   useUnifiedTopology : true
})


// Get the default connetion
// Mongoose maintains the default connnection object
// representing the connection object

const db = mongoose.connection;

db.on('connected' , () =>{
    console.log("MongoDb Connection is Successful");
})

db.on('error' , () =>{
    console.log("There is error in connection");
})


db.on('disconnected' , () =>{
    console.log("The connection is disconnected");
})

module.exports = db;

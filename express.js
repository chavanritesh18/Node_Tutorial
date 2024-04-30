const express = require('express')
// The aboe will require the pkg express
// To run this express server you have to go on the localhost:portnumber
// Which ever port number given by u on the in the app listen function
// The below is for intitializing express
const app = express()

const db  = require('./db.js')

const bodyParser  = require('body-parser');
app.use(bodyParser.json()) // data will be saved in req.body.json

const person = require('./person')

const schema =require('./schema')

// On home section it will send the Hello world info
app.get('/', function (req, res) {
  res.send('This is the express Server')
})

//  Type /chiken in front of localhost:3000
// app.get('/chicken', (req , res) =>{
//     res.send("This is chiken menu")
// })

// app.get('/veg' , function(req ,res){
//     res.send("This is veg section")
// })


// THE BELOW CODE IS AVALABLE IN THE PERSON ROUTE JS
// app.post('/person' , async (req ,res) => {
//     try{

//         const data  =  req.body // Assuming the request body contains the saved data


//         // Create a new person document using the mongoose model
//         const newPerson =  new person(data);

//         // Save the new person to the database

//         const response =  await newPerson.save();
//         console.log('data saved');
//         res.status(200).json(response);


//     }
//     catch(err)
//     {
//         console.log(err);
//         res.status(500).json({error : 'Internal Server error'});
//     }
// })

// THIS CODE IS ALSO AVAILABLE IN THE PERSON ROUTE JS FILE

// app.get('/person' , async (req ,res) => {
//     try{

//         const data  = await person.find();
//         console.log("data fetched");
//         res.status(200).json(data)
//     }
//     catch(err)
//     {
//         console.log(err);
//         res.status(500).json({error : 'Internal Server error'});
//     }
// })


app.post('/menu', async(req , res) =>{
    try{
        
        const menu  = req.body;

        const newMenu = new schema(menu)
        const menuResponse =  await newMenu.save();
        console.log('menu saved');
        res.status(200).json(menuResponse);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json.apply({error: "Internal server error"})
        
        
        
        
    }
})



// EXPRESS JS ROUTING CODE
// This below code is also written personRoute js file

// app.get('/person/:workType' , async (req ,res) => {
//     try{

//          const workType = req.params.workType;
//          if(workType == 'chef' || workType == 'manager' || workType == 'waiter')
//          {
//             const response  = await person.find({work : workType});
//             console.log("Response fetched")
//             res.status(200).json(response)

//          }
//          else
//          {
//             res.status(404).json({error: "Invalid work type"})
//          }

//     }
//     catch(err)
//     {
//         console.log(err);
//         res.status(500).json({error:"Internal server error"});
//     }
// })


// importing the personRoute js files

const personRoutes = require('./personRoute.js')

// using the imported files

app.use('/person', personRoutes)

// listening on port 3000
app.listen(3000 , ()=>{
    console.log("Express js server run successfully")
})
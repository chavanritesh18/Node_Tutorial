const express = require('express');
const router  = express.Router();
const person =  require('./person');
const { findByIdAndDelete } = require('./schema');


// POST ROUTE TO ADD A PERSON
router.post('/' , async (req ,res) => {
    try{

        const data  =  req.body // Assuming the request body contains the saved data


        // Create a new person document using the mongoose model
        const newPerson =  new person(data);

        // Save the new person to the database

        const response =  await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);


    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error : 'Internal Server error'});
    }
})

router.get('/' , async (req ,res) => {
    try{

        const data  = await person.find();
        console.log("data fetched");
        res.status(200).json(data)
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error : 'Internal Server error'});
    }
})


router.get('/:workType' , async (req ,res) => {
    try{

         const workType = req.params.workType;
         if(workType == 'chef' || workType == 'manager' || workType == 'waiter')
         {
            const response  = await person.find({work : workType});
            console.log("Response fetched")
            res.status(200).json(response)

         }
         else
         {
            res.status(404).json({error: "Invalid work type"})
         }

    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
})

// CODE FOR UPDATING 

router.put('/:id' , async (req , res) => {
    try{
        const personId = req.params.id; // Extract the id from the url parameter
        const updatePersonData  = req.body; //updated data for the perosn

        const response = await person.findByIdAndUpdate(personId , updatePersonData , {
            new  : true , // Return the updated document
            runValidators : true //Run the mongoose validation

        })

        if(!response)
        {
           return res.status(404).json({err: "person not find "});
        }

        console.log("Data is updated");
        res.status(200).json(response);
        
    }
    catch(err)
    {
        console.log(err);
        res.status(404).json({error : "There is the internal server error"});
    }
})

// THIS IS THE CODE FOR DELETE

router.delete('/:id' , async (req , res) => {
    try{
        const personId = req.params.id;

    const response =  await person.findByIdAndDelete(personId);

    if(!response)
    {
        return res.status(404).json({error : "Person not found"});
    }
    console.log("Data deleted");
    res.status(200).json({message : 'person deleted successfully'});
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({err:'Internal server error'});
    }
})

module.exports = router;

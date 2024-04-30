const mongoose = require('mongoose');

// The below schema is used to perform and give the various options to the user
//  From where user can choose whaterver he want 
const menuSchema  = new mongoose.Schema({

   veg: {
      type : String ,
      required: true
   
   } ,

   panner :{
     type: String,
     required:true
   },

   quantity:{
    type : Number ,
    required : true
   } ,

   chicken:{
    type : String ,
    required : true
   } ,

   pavBhaji:{
     type  : String,
     required : true
   }



})


// Here we create the object of this schema to import them and use it in the express sevrer
const menuItems  = mongoose.model('schema ' , menuSchema);

//  This is used to import this schema and used in the express js server
// By accessing this schema we can give variouos menu options to the user 
//  And we are going to use this scheman in the express js server
module.exports  = menuItems
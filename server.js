console.log("This is the node js server")
//  Steps to create the node js server

// 1. Create the folder
// 2. Go to the folder directory
// 3. Run the command "npm init"
// 4. The above command will install the package.json file
// 5. Then run the "npm i express" command 
// 6. This will create the package-lock.json  as well as install
//  all the node modules
// 7. Now we have created the file called the server.js
// 8. Write something in server.js
// 9. For ex :  console.log("Hii There")
// 10. Now to run this use "Nodemon server.js"
// 11. Or else u can use "node server.js" also


//  In the following way we can access the variable
//  and the functions in  of the other files in another files
const notes = require('./notes.js')
console.log(notes)

var age = notes.age


var result =  notes.addNumber(3,4)
console.log(age)
console.log('The result is'+ result)

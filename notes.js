console.log("This is the notes js file")
// This will exported in the server js file by using the require method

var age = 18

const addNumber = function(a , b)
{
    return a + b

    // console.log(a+b)

}

module.exports = {
    age , addNumber
}
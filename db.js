const mongoose = require("mongoose");
dbConnect()
async function dbConnect(){

     try {
         await mongoose.connect('mongodb+srv://riddhiii:riddhi@cluster0.5tdmi.mongodb.net/jobportal' , {useNewUrlParser : true});
         console.log('Mongo DB Connection success')
     } catch (error) {
         console.log('Mongo DB Connection failed')
     }

}

module.exports = mongoose
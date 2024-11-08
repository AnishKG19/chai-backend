
// require('dotenv').config({path: './env'} )

import dotenv from "dotenv"


import express from "express"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


const app = express()


connectDB()







/*

( async ()=> {

    try{
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      
      app.on("error" , ()=>{
        console.log("ERROR : ", error );
        throw error
      })

      app.listen(process.env.PORT , ()=>{
        console.log(`App is listening on PORT  ${process.env.PORT}`)
      })


    }
    catch(error){
        console.log("ERROR: " , error)
        throw err
    }

}  )()




function connnectDB(){

}
*/

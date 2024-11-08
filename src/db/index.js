import mongoose from "mongoose";

import {DB_NAME} from '../constant.js';

const connectDB = async ()=>{

    try{

    const connedtonInstance = await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}  `)
    console.log(`\n MongoDB connectd ?? DB HOST :  ${ connectionInstance.connection.host }`)
    
    }
    catch(error){
        console.log("MONGODB connection error " , error);
        process.exit(1)


    }

}

export default connectDB;
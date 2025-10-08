import mongoose from "mongoose";

// const MONGOCONNECT='mongodb+srv://udud0099:udud0099@cluster0.p8anpn6.mongodb.net/auth?retryWrites=true&w=majority&appName=Cluster0'

// if(!MONGOCONNECT){
//     throw new Error("Plaz define and connect mongodb")
// }

// async function connectDatabase(){
//     if(mongoose.connection.readyState === 1){
//         return mongoose
//     }
// }

// const { default: mongoose } = require("mongoose");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://udud0099:udud0099@cluster0.p8anpn6.mongodb.net/auth?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connect mongoDB ok");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;

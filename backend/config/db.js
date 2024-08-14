import mongoose from "mongoose";
import serverconfig from "./serverconfig.js";

async function dbConnect() {
    try {
      await mongoose.connect(serverconfig.db);
    } catch (error) {
      console.log(error);
    }
  }
  
  export default dbConnect;
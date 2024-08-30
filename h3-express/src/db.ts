import mongoose from "mongoose";
import dotenv from "dotenv";
//For env File
dotenv.config();

const connectionString = process.env.CONNECTION_STRING || "";

console.log("string", connectionString);

function startDb() {
  mongoose
    .connect(connectionString, {
    })
    .then(() => {
      console.log("MongoDB connection successful");
    });

  // This is mongoose's async callback chain
  return mongoose.connection
    .on("error", console.log)
    .on("disconnected", startDb);
}

function closeDb() {
  mongoose.connection.close();
}

export {
  startDb,
  closeDb,
};

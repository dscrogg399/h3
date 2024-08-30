const mongoose = require("mongoose");

const connectionString = process.env.CONNECTION_STRING || "";

console.log(connectionString);

function startDb() {
  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
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

module.exports = {
  startDb,
  closeDb,
};

const { turtlesData } = require("../data");
import mongoose from "mongoose";

const FactSchema = new mongoose.Schema({
  fact_type: String,
  fact_image_url: String,
  fact_data: Object,
  fact_description: String,
  updated_at: { type: Date, default: Date.now },
});

const Fact = mongoose.model("Fact", FactSchema);

module.exports = {
  Fact,
  getTurtleData,
};

function getTurtleData() {
  return Promise.resolve(turtlesData);
}

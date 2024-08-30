"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fact = void 0;
exports.getTurtleData = getTurtleData;
const data_1 = require("../data");
const mongoose_1 = __importDefault(require("mongoose"));
const FactSchema = new mongoose_1.default.Schema({
    fact_type: String,
    fact_image_url: String,
    fact_data: Object,
    fact_description: String,
    updated_at: { type: Date, default: Date.now },
});
const Fact = mongoose_1.default.model("Fact", FactSchema);
exports.Fact = Fact;
function getTurtleData() {
    return Promise.resolve(data_1.turtlesData);
}

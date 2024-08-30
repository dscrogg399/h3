import express from "express";
const router = express.Router();

router.use("/api", require("./api.v0.ts"));

export {
    router
}

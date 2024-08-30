const express = require("express");
const router = express.Router();

router.use("/api", require("./api.v0.ts"));

module.exports = router;

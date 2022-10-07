const express = require("express");
const router = express.Router();
const listRoute = require("./route.list");

router.use("/v1", listRoute);

module.exports = router;
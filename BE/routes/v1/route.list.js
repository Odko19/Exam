const express = require("express");
const router = express.Router();
const listController = require("../../modules/list.controller");

router.get("/", listController.getAllList);
router.post("/", listController.createList);
router.get("/:id", listController.getAllById);


module.exports = router;
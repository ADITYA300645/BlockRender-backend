const express = require("express");
const router = express.Router();
const list = require("./utils/list");
const create = require("./utils/create");
const createNList = require("./utils/create-n-list");
const auth = require("../../middleware/auth");

router.use("/list", auth, list);
router.use("/create", auth, create);
router.use("/create-n-list", auth, createNList);

module.exports = router;

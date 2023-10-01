const express = require("express");
const { Account } = require("../../models/models");
const router = express.Router();
const register = require("./utils/register");
const login = require("./utils/login");
const listedNft = require("./utils/listedNft");
const buy = require("./utils/buy");

router.use("/register", register);
router.use("/login", login);
router.use("/listed-nft", listedNft);
router.use("/buy", buy);

module.exports = router;

const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const comment = require("./utils/comment");
const info = require("./utils/info");
const like = require("./utils/like");
const priceHistory = require("./utils/priceHistory");
const registerView = require("./utils/registerView");

router.use("/comment", auth,comment);
router.use("/info", auth,info);
router.use("/like", auth,like);
router.use("/price-history", auth,priceHistory);

module.exports = router;

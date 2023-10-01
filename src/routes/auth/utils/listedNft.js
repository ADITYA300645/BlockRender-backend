const express = require("express");
const { Account } = require("../../../models/models");
const auth = require("../../../middleware/auth");
const router = express.Router();

router.get("/", auth, async (req, res) => {
    res.json({ NFT: res.user.NftOwned });
});

module.exports = router;

const express = require("express");
const { Nft } = require("../../../models/models");

const router = express.Router();

router.post("/", async (req, res) => {
    const { NftId } = req.body;
    const nft = await Nft.findById(NftId);
    nft.isListed = true;
    await nft.save();
    res.json({ nft });
});

module.exports = router;

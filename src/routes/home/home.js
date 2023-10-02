const express = require("express");
const { Nft } = require("../../models/models");
const router = express.Router();

router.get("/latest", async (req, res) => {
    var { skip, limit } = req.query;
    const nfts = await Nft.find({}, "", { skip, limit });
    res.json({ nfts });
});

router.get("/category", async (req, res) => {
    var { c, skip = 0, limit = 10 } = req.query;
    const nfts = await Nft.find({}, "", { skip, limit });
    res.json({ nfts })``;
});

router.get("/item-of-the-day", async (req, res) => {
    const nfts = await Nft.findOne({});
    await nfts.populate({path:"CurrentOwner",select: '-tokens',});
    res.json(nfts);
});

module.exports = router;

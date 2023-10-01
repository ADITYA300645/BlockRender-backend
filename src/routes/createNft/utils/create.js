const express = require("express");
const { Nft } = require("../../../models/models");

const router = express.Router();

router.post("/", async (req, res) => {
    const { IpfsUrl, CurrentPrice } = req.body;
    const nftRef = new Nft({
        IpfsUrl,
        CurrentOwner: userId,
        OwnersHistory: [userId],
        CurrentPrice,
        PriceHistory: [CurrentPrice],
        isListed: false, // will just affect the showing in website
    });
    var nft = await nftRef.save();
    res.json({ nft });
});

module.exports = router;
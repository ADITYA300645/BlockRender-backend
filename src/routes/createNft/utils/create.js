const express = require("express");
const { Nft } = require("../../../models/models");

const router = express.Router();

router.post("/", async (req, res) => {
    const { IpfsUrl, CurrentPrice } = req.body;
    const userId = res.user._id.toHexString();
    const nftRef = new Nft({
        IpfsUrl,
        CurrentOwner: userId,
        OwnersHistory: [userId],
        CurrentPrice,
        PriceHistory: [CurrentPrice],
        isListed: false, // will just affect the showing in website
    });
    var nft = await nftRef.save();
    await nft.populate({path:"CurrentOwner",select: '-tokens',});
    res.json({ nft });
});

module.exports = router;

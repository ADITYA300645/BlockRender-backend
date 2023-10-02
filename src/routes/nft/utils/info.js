const express = require("express");
const router = express.Router();
const { Nft } = require("../../../models/models");

router.get("/:id", async (req, res) => {
    try {
        var nft = await Nft.findById(req.params.id);
        // fetch rest of Info from chain --- |_|---
        const userId = res.user._id.toHexString();
        await nft.populate({
            path: "CurrentOwner",
            select: "-tokens",
        });
        const isLiked = await Nft.findOne({
            _id: nft._id,
            "likes._id": res.user._id,
        }).lean();
        nft.isLiked = !!isLiked;
        res.json({ nft });
    } catch (e) {
        res.json({ nft: "NA" });
    }
});

module.exports = router;

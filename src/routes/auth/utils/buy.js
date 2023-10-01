const express = require("express");
const { Account, Nft } = require("../../../models/models");
const auth = require("../../../middleware/auth");
const router = express.Router();

router.post("/", auth, async (req, res) => {
    const { NftId } = req.body;
    var nft = await Nft.findOne({ _id: NftId });
    const userId = res.user._id.toHexString();
    if (nft.CurrentOwner.toHexString() === userId) {
        res.status(400).json({ nft: "Already Owned" });
        return;
    }
    nft.CurrentOwner = res.user._id;
    nft.OwnersHistory.push(res.user);
    res.user.NftOwned.push(NftId);
    await res.user.save();
    await nft.save();
    res.json({ nft });
});

module.exports = router;

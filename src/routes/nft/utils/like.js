const express = require("express");
const { Nft } = require("../../../models/models");
const router = express.Router();

router.post("/nft/:nftId", async (req, res) => {
    try {
        const isLiked = await Nft.findOne({
            _id: req.params.nftId,
            "likes._id": res.user._id,
        }).lean();
        if (!isLiked) {
            console.log(isLiked)
            var nft = await Nft.findById(req.params.nftId);
            console.log(nft);
            nft.likes.push(res.user._id.toHexString());
            await nft.save();
            res.json({ nft });
        } else {
            var nft = await Nft.findByIdAndUpdate(req.params.nftId, {
                $pull: { likes: {_id:res.user._id} },
            },{ new: true });
            console.log("CJANGHE")
            res.json({ nft });
        }
    } catch (e) {
        console.log(e)
        res.json({ nft: "NA" });
    }
});

module.exports = router;

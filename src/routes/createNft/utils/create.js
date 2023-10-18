const express = require("express");
const { Nft } = require("../../../models/models");
const pinata = require("../../../utils/pinata/pinata");

const router = express.Router();

router.post("/", async (req, res) => {
    const { IpfsUrl, CurrentPrice,name,keyvalues } = req.body;
    // const userId = res.user._id.toHexString();
    // const nftRef = new Nft({
    //     name,
    //     keyvalues,
    //     IpfsUrl,
    //     CurrentOwner: userId,
    //     OwnersHistory: [userId],
    //     CurrentPrice,
    //     PriceHistory: [CurrentPrice],
    //     isListed: false, // will just affect the showing in website
    // });
    // var nft = await nftRef.save();
    // await nft.populate({path:"CurrentOwner",select: '-tokens',});

    // {
    //   "name": "Herbie Starbelly",
    //   "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.",
    //   "image": "",
    //   "attributes": [...]
    // }
    
    // const val = await pinata.pinJSONToIPFS(json, options)
    console.log(val)


    res.json({ val });
});

module.exports = router;

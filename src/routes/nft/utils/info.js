const express = require("express");
const router = express.Router();
const { Nft } = require("../../../models/models");

router.get("/:id", async (req, res) => {
    const nft = await Nft.findById(req.params.id);
    // fetch rest of Info from chain --- |_|---
    await nft.populate({path:"CurrentOwner",select:"-tokens"}); b 
    res.json({nft})
});

module.exports = router;

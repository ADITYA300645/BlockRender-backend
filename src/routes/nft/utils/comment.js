const express = require("express");
const { Nft, Comment } = require("../../../models/models");
const router = express.Router();

router.post("/:id", async (req, res) => {
    const { text } = req.body;
    var nft = await Nft.findById(req.params.id);
    const author = res.user._id.toHexString();
    var commentRef = new Comment({
        text,
        nft: req.params.id,
        author,
    });
    nft.comment.push(commentRef);
    await nft.save();
    var comment = await commentRef.save();
    res.json({ comment });
});

router.post("/reply/:commentId", async (req, res) => {
    var comment = await Comment.findById(req.params.commentId);
    await comment.populate("nft");
    const author = res.user._id.toHexString();
    const { text } = req.body;
    var replyRef = new Comment({
        text,
        nft: comment.nft._id.toHexString(),
        author,
    });
    
    console.log(comment);
    comment.replies.push(replyRef);
    await comment.save();
    const reply = await replyRef.save();
    res.json({ reply });
});

module.exports = router;

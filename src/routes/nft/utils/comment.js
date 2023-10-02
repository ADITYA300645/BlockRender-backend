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
    
    comment.replies.push(replyRef);
    await comment.save();
    const reply = await replyRef.save();
    res.json({ reply });
});

router.post("/like/:commentId",async(req,res)=>{
    try {
        const isLiked = await Comment.findOne({
            _id: req.params.nftId,
            "likes._id": res.user._id,
        }).lean();
        if (!isLiked) {
            var comment = await Comment.findById(req.params.nftId);
            comment.likes.push(res.user._id.toHexString());
            await comment.save();
            res.json({ comment: comment });
        } else {
            var comment = await Comment.findByIdAndUpdate(req.params.nftId, {
                $pull: { likes: {_id:res.user._id} },
            },{ new: true });
            console.log("CJANGHE")
            res.json({ comment: comment });
        }
    } catch (e) {
        console.log(e)
        res.json({ nft: "NA" });
    }
})


module.exports = router;

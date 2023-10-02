const { default: mongoose } = require("mongoose");
const accountSchema = require("./Account");
const commentSchema = require("./Comment");
const NftSchema = mongoose.Schema({
    IpfsUrl: { type: String, required: true },
    CurrentOwner: { type: mongoose.Schema.ObjectId, ref: "Account" },
    OwnersHistory: {
        type: [{ type: mongoose.Schema.ObjectId, ref: "Account" }],
    },
    CurrentPrice: { type: Number, required: true },
    PriceHistory: { type: [Number] },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Account",
        },
    ],
    comment: [commentSchema],
    isLiked: Boolean,
    isListed: Boolean,

    // todo : make comments bidd system
});

module.exports = NftSchema;

const { default: mongoose } = require("mongoose");

const commentSchema = mongoose.Schema({
    text: { type: String, required: true },
    nft: { type: mongoose.Schema.ObjectId, ref: "Nft" },
    author: { type: mongoose.Schema.ObjectId, ref: "Account" },
    replies: { type: [this] },
    likes: [
        {
            accountId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Account",
                unique: true,
            },
            date: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    createdAt: { type: Date, default: Date.now },
});

module.exports = commentSchema;

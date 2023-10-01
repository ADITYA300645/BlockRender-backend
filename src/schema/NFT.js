const { default: mongoose } = require("mongoose");
const accountSchema = require("./Account");
const NftSchema = mongoose.Schema({
    IpfsUrl: { type: String, required: true },
    //todo : Account Schema    \
    CurrentOwner: { type: mongoose.Schema.ObjectId, ref: "Account" },
    OwnersHistory: {
        type: [{ type: mongoose.Schema.ObjectId, ref: "Account" }],
    },
    CurrentPrice: { type: Number, required: true },
    PriceHistory: { type: [Number] },
    likes: { type: [{ type: mongoose.Schema.ObjectId, ref: "Account" }] },
    isListed: Boolean,
    // todo : make comments bidd system
});
module.exports = NftSchema;

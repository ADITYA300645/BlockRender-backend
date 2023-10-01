const { default: mongoose } = require("mongoose");

const accountSchema = mongoose.Schema({
    AccountNo: { type: String, required: true, unique: true },
    Name: { type: String, required: true },
    AccountType: {
        type: String,
        enum: ["Admin", "worker", "common"],
        default: "common",
    },
    // available balance after selling nfts
    Balance: { type: Number, default: 0 },
    NftOwned: { type: [{ type: mongoose.Schema.ObjectId, ref: "Nft" }] },
    NftInServer: { type: [String] },
    SoldNft: { type: [String] },
    // totalyu sold NFT till now
    Earning: { type: Number, default: 0 },
    OwnedAccount: [String],
    viewHistory: [{ type: mongoose.Schema.ObjectId, ref: "Nft" }],
    tokens: [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ],
});

module.exports = accountSchema;

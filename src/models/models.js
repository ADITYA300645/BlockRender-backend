const { default: mongoose } = require("mongoose");
const accountSchema = require("../schema/Account");
const nftSchema = require("../schema/NFT");
const blogSchema = require("../schema/Blog");
const commentSchema = require("../schema/Comment");

const Account = mongoose.model("Account", accountSchema);
const Nft = mongoose.model("Nft", nftSchema);
const Blog = mongoose.model("Blog", blogSchema);
const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Account, Nft, Blog,Comment };

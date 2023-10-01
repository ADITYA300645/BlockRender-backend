const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const { default: Moralis } = require("moralis");
require("dotenv").config();
const apiKey = process.env.MoralisApi;
const DBConnection = process.env.DBConnection;
const auth = require("./src/routes/auth/auth");
const nft = require("./src/routes/nft/nft")
const createNft = require("./src/routes/createNft/createNft")

app.use(express.json());

app.use("/auth", auth);
app.use("/nft", nft);
app.use("/create-nft", createNft);

async function startServer() {
    try {
        await mongoose.connect(DBConnection);
        await Moralis.start({
            apiKey: apiKey,
        });
        await app.listen(3000, () => {
            console.log("http://localhost:3000");
        });
    } catch (e) {
        console.log(e);
    }
}
startServer();

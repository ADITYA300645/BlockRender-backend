const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const app = express();
const { default: Moralis } = require("moralis");
require("dotenv").config();
const apiKey = process.env.MoralisApi;
const DBConnection = process.env.DBConnection;
const auth = require("./src/routes/auth/auth");
const nft = require("./src/routes/nft/nft");
const createNft = require("./src/routes/createNft/createNft");
const home = require("./src/routes/home/home");
const path = require("path");

app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");
app.set("views", "./src/views/");

app.use(express.static(path.join(__dirname, "/src/views/styles/")));
app.use(express.static(path.join(__dirname, "/src/views/scripts/")));
app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", auth);
app.use("/nft", nft);
app.use("/create-nft", createNft);
app.use("/home", home);

app.get("/", (req, res) => {
    res.render("home", { message: "Block-Render" });
});

async function startServer() {
    try {
        await mongoose.connect(DBConnection);
        await Moralis.start({
            apiKey: apiKey,
        });
        app.listen(3000, () => {
            console.log("http://localhost:3000");
        });
    } catch (e) {
        console.log(e);
    }
}
startServer();

require("dotenv").config();
const pinataSDK = require("@pinata/sdk");
const {PinataJWT} = process.env;
const pinata = new pinataSDK({ pinataJWTKey: PinataJWT });
module.exports = pinata;

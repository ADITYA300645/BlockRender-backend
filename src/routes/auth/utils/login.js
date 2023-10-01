const express = require("express");
const { Account } = require("../../../models/models");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/", async (req, res) => {
    const { AccountNo } = req.body;
    const account = await Account.findOne({ AccountNo });
    const token = jwt.sign({ AccountNo }, process.env.SECREATKEY, {
        expiresIn: "7days",
    });
    account.tokens.push({token});
    await account.save();
    account.length === 0 ? res.json({ account: "NA" }) : res.json({ account });
});

module.exports = router;

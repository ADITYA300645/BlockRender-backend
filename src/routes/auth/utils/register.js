const express = require("express");
const { Account } = require("../../../models/models");
const Jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        console.log("REGISTER PROCESS");
        const { AccountNo, Name, Email } = req.body;
        const account = await Account.findOne({ AccountNo });
        if (account) {
            const token = Jwt.sign({ AccountNo }, process.env.SECREATKEY, {
                expiresIn: "7days",
            });
            account.tokens.push({ token });
            await account.save();
            res.json({ token });
            return;
        } else {
            const token = Jwt.sign({ AccountNo }, process.env.SECREATKEY, {
                expiresIn: "7days",
            });
            const userRef = new Account({
                AccountNo,
                Name,
                Email,
                tokens: [{ token }],
            });
            const user = await userRef.save();
            res.json({ token });
        }
        return;
    } catch (e) {
        console.log(e);
        res.json({ e });
    }
});

module.exports = router;

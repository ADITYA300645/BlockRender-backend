const express = require("express");
const { Account } = require("../../../models/models");
const Jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { AccountNo, Name } = req.body;
        const token = Jwt.sign({ AccountNo }, process.env.SECREATKEY, {
            expiresIn: "7days",
        });
        const userRef = new Account({ AccountNo, Name, tokens: [{ token }] });
        const user = await userRef.save();
        res.json({ token });
    } catch (e) {
        res.json({e})
    }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/forgotPassword", async (req, res) => {
    const { email } = req.body;
    try {
        const oldUser = await User.findOne({ email });

        if (!oldUser) {
            return res.status(404).json({ status: "User Not Found!!" });
        }

        const secret = process.env.JWT_SECRET + oldUser.password;
        const token = jwt.sign(
            { email: oldUser.email, id: oldUser._id },
            secret,
            {
                expiresIn: "5m",
                algorithm: "HS256", 
            }
        );

        const link = `http://localhost:8000/api/users/resetPassword/${oldUser._id}/${token}`;
        console.log(link);


    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ status: "Internal Server Error" });
    }
});

router.get("/resetPassword/:id/:token", async (req, res) => {
    const { id, token } = req.params;

    try {
        const oldUser = await User.findOne({ _id: id });

        if (!oldUser) {
            return res.status(404).json({ status: "User Not Found!!" });
        }

        const secret = process.env.JWT_SECRET + oldUser.password;
        const verify = jwt.verify(token, secret);

        res.render("index", { email: verify.email, status: "Not Verified" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Not Verified");
    }
});

router.post("/resetPassword/:id/:token", async (req, res) => {
    const { id, token } = req.params;
    const { password } = req.body;

    try {
        const oldUser = await User.findOne({ _id: id });

        if (!oldUser) {
            return res.status(404).json({ status: "User Not Found!!" });
        }

        const secret = process.env.JWT_SECRET + oldUser.password;
        const verify = jwt.verify(token, secret);
        const encryptedPassword = await bcrypt.hash(password, 10);

        const updateResult = await User.updateOne(
            {
                _id: id,
            },
            {
                $set: {
                    password: encryptedPassword,
                },
            }
        );

        if (updateResult.nModified === 1) {
            res.render("index", { email: verify.email, status: "verified" });
        } else {
            res.status(500).json({ status: "User Update Failed" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ status: "Something Went Wrong" });
    }
});

module.exports = router;

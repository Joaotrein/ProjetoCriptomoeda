require("dotenv").config();
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const keysecret = process.env.JWT_SECRET;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.gmail,
        pass: process.env.password,
    },
});

router.post("/sendpasswordlink", async (req, res) => {
    console.log("Request Body:", req.body);

    const { email } = req.body;

    if (!email) {
        console.log("Invalid Email:", email);
        return res
            .status(400)
            .json({ status: 400, message: "Invalid email provided." });
    }

    try {
        const userfind = await User.findOne({ email });

        if (!userfind) {
            console.log("User not found:", email);
            return res
                .status(404)
                .json({ status: 404, message: "User not found." });
        }

        const token = jwt.sign({ _id: userfind._id }, keysecret, {
            expiresIn: "1h",
        });

        console.log("Generated Token:", token);

        const updatedUser = await User.findByIdAndUpdate(
            { _id: userfind._id },
            { verifytoken: token },
            { new: true }
        );

        if (!updatedUser) {
            console.log("Unable to update user token.");
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error: Unable to update user token.",
            });
        }

        const mailOptions = {
            from: process.env.gmail,
            to: email,
            subject: "Password Reset Request",
            text: `Use the following link to reset your password. This link is valid for 1 hour: http://localhost:3000/forgotpassword/${userfind._id}/${updatedUser.verifytoken}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error);
                return res.status(500).json({
                    status: 500,
                    message: "Internal Server Error: Unable to send email.",
                    error: error.message, // Adiciona a mensagem de erro para depuração
                });
            } else {
                console.log("Email sent:", info.response);
                return res
                    .status(200)
                    .json({ status: 200, message: "Email sent successfully." });
            }
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error.",
            error: error.message,
        });
    }
});

router.get("/forgotpassword/:id/:token", async (req, res) => {
    const { id, token } = req.params;

    try {
        console.log("Received ID:", id);
        console.log("Received Token:", token);

        const validuser = await User.findOne({ _id: id, verifytoken: token });

        if (validuser) {
            console.log("User is valid:", validuser);
            return res.status(200).json({ status: 200, validuser });
        } else {
            console.log("User not found or invalid token.");
            return res.status(401).json({
                status: 401,
                message: "User not found or invalid token.",
            });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ status: 500, error });
    }
});

router.post("/:id/:token", async (req, res) => {
    const { id, token } = req.params;
    const { password } = req.body;

    try {
        console.log("Received ID:", id);
        console.log("Received Token:", token);

        const validuser = await User.findOne({ _id: id, verifytoken: token });

        if (validuser) {
            const newpassword = await bcrypt.hash(password, 12);

            const setnewuserpass = await User.findByIdAndUpdate(
                { _id: id },
                { password: newpassword }
            );

            setnewuserpass.save();
            console.log("Password updated successfully.");
            return res.status(201).json({ status: 201, setnewuserpass });
        } else {
            console.log("User not found or invalid token.");
            return res.status(401).json({
                status: 401,
                message: "User not found or invalid token.",
            });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ status: 500, error });
    }
});

module.exports = router;

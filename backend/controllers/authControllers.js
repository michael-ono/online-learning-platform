const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const userModel = require("../models/userModel");

const registerController = async (req, res) => {
    try {
        res.status(200);
        const { userName, email, password, address, phone } = req.body;
        // validation
        if (!userName || !email || !password || !address || !phone) {
            res.status(500);
            res.send({
                success: false,
                message: "please provide all fields"
            });
        }
        
        // check user
        const existingUser = await userModel.findOne({email})
        if (existingUser) {
            res.status(500);
            res.send({
                success: false,
                message: "email already exisits, login pls"
            });
        }

        // hashing password
        var salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create a new user
        const newUser = await userModel.create({
            userName,
            email,
            password: hashedPassword, 
            address, 
            phone 
        });

        res.status(201).send({
            success: true,
            message: "Acoount successfully registered",
            newUser
        });
        
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send({
            success: false,
            message: "Error in Register API server",
            error
        });
    }
};

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password ) {
            res.status(500);
            res.send({
                success: false,
                message: "Please provide email OR password"
            });
        }

        // check user 
        const user = await userModel.findOne({ email }, { password: 0 });

        if (!user) {
            res.status(404).send({
                success: false,
                message: "User not found"
            });
        };

        // compare user password
        const isMatch = bcrypt.compare(password, user.password);

        if(!isMatch) {
            res.status(500).send({
                success: false,
                message: "Password does not exist"
            });
        };

        // token
        const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        user.password = undefined;

        res.status(200).send({
            success: true,
            message: "Login successful",
            token,
            user
        });
        
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send({
            success: "false",
            message: "Error in login API",
            error
        });
    }
};

module.exports = { registerController, loginController };
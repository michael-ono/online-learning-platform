const JWT = require("jsonwebtoken");
const userModel = require("../models/userModel");

const registerController = async (req, res) => {
    try {
        res.status(200);
        const { firstName, lastName, email, password } = req.body;
        // validation
        if (!firstName || !lastName || !email || !password) {
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

        // create a new user
        const newUser = await userModel.create({
            firstName,
            lastName,
            email,
            password 
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

        const user = await userModel.findOne({ email });

        if (!user) {
            res.status(404).send({
                success: false,
                message: "User not found"
            });
        }

        if (user.password !== password) {
            res.status(500).send({
                success: false,
                message: "Incorrect password"
            });
        }


        // token
        const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

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
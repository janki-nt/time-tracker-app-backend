const User = require("../models/user.model");
const bcrypt = require('bcryptjs');
const auth = require('../middlewares/validJWT');

const registerUser = async (req, res, next) => {
    console.log(req.body)
    try {
        var user = new User(req.body);
        const salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(user.password, salt);
        await user.save();
        return res.status(200).json({ data: user, message: "User Registered" });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            const token = auth.generateAccessToken(user);
            return res.cookie("access_token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production"
            }).status(200).json({ message: "User Logged in", data: user });
        }
        else {
            return res.status(400).json({ message: "User email or password is incorrect" });
        }
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        var user = await User.find();
        if (user.length > 0) {
            return res.status(200).json({ message: "User retrieved", data: user });
        } else {
            return res.status(404).json({ message: "No User Found", data: [] });
        }
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

const getUserById = async (req, res, next) => {
    try {
        var user = await User.findById(req.params.id);
        if (user !== null) {
            return res.status(200).json({ message: "User details retrieved", data: user });
        }
        else {
            return res.status(404).json({ message: "No User Found", data: user });
        }
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

const updateUserDetailsById = async (req, res, next) => {
    try {
        const userUpdateData = req.body;
        var user = await User.findByIdAndUpdate(req.params.id, userUpdateData);
        if (user) {
            return res.status(200).json({ message: "User details updated", data: user });
        } else {
            return res.status(404).json({ message: "No User Found", data: user });
        }
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

const deleteUserById = async (req, res, next) => {
    try {
        var user = await User.findByIdAndRemove(req.params.id);
        if (user) {
            return res.status(200).json({ message: "User removed", data: user });
        } else {
            return res.status(404).json({ message: "No User Found", data: user });
        }
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};



module.exports = {
    registerUser,
    login,
    getAllUsers,
    getUserById,
    updateUserDetailsById,
    deleteUserById
}
import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const register = async (req, res, next) =>{
    try{
        const hashPassword = bcrypt.hashSync(req.body.password, 10);
        const newUser = new UserModel({
            ...req.body,
            password: hashPassword,
        });
        await newUser.save();
        return res.status(200).send("User created successfully!");
    }
    catch(err){
        next(err);
    }
};

export const login = async (req, res, next) =>{
    try {
        const user = await UserModel.findOne({username: req.body.username});
        if(!user) return next(createError(404, "User was not found!"));
        const correctPassword = await bcrypt.compareSync(req.body.password, user.password);
        if(!correctPassword) return next(createError(404, "Wrong username or password!"));

        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller,
        }, process.env.JWT_KEY
        );

        const { password, ...theRestInfo} = user._doc;
        res.cookie("access_Token", token, {
            httpOnly: true,
        }).status(200).send(theRestInfo);
    } catch (err) {
        next(err);
    }
};

export const logout = async (req, res) =>{
    res.clearCookie("accessToken", {
        sameSite: "none",
        secure: true,
    })
    .status(200).send("User logged out successfully!");
};
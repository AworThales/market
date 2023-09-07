import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) =>{
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
        return res.status(500).send("Something went wrong!");
    }
};

export const login = async (req, res) =>{
    try {
        const user = await UserModel.findOne({username: req.body.username});
        if(!user) return res.status(404).send("User not found!");
        const correctPassword = await bcrypt.compareSync(req.body.password, user.password);
        if(!correctPassword) return res.status(404).send("Wrong username or Password!");

        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller,
        }, process.env.JWT_KEY
        );

        const { password, ...theRestInfo} = user._doc;
        return res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).send(theRestInfo);
    } catch (err) {
        return res.status(500).send("Something went wrong!");
    }
};

export const logout = async (req, res) =>{

};
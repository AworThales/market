import userModel from "../models/user.model.js";
import jwt  from "jsonwebtoken";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) =>{
    try {
        const user = await userModel.findById(req.params.id);
        if(req.userId.id !== user._id.toString()){
            return next(createError(401, "You can delete only your account!"));
        };
        await userModel.findByIdAndDelete(req.params.id);
        return res.status(200).send("User deleted successfully!")
    } catch (err) {
        next(err);
    }
};
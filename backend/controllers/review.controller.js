import createError from "../utils/createError.js";
import ReviewModel from "../models/review.model.js";
import GigModel from "../models/gig.model.js";

export const createReview = async (req, res, next) =>{
    if(req.isSeller)
        return next(createError(403, "Sellers can't create a review!"));
    const newReview = new ReviewModel({
        userId: req.userId,
        gigId: req.body.gigId,
        desc: req.body.desc,
        star: req.body.star,
    });
    try {
        const review = await ReviewModel.findOne({
            userId: req.userId,
            gigId: req.body.gigId,
        })
        if(review)
            return next(createError(403, "You have created a review for this gig already!"));

        const saveReview = await newReview.save();

        await GigModel.findByIdAndUpdate(
            req.body.gigId, 
            {$inc: {totalStars: req.body.star, startNumber: 1} }
        )
        res.status(200).send(saveReview);
    } catch (err) {
        next(err);
    }
};

export const getReview = async (req, res, next) =>{
    try {
        const reviews = await ReviewModel.find({ gigId: req.params.gigId });
        res.status(200).send(reviews);
    } catch (err) {
        next(err);
    }
};

export const deleteReview = async (req, res, next) =>{
    try {
        
    } catch (err) {
        next(err);
    }
};
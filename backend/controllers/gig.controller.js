import createError from "../utils/createError.js";
import GigModel from "../models/gig.model.js"


export const createGig = async (req, res, next) =>{
    if(!req.isSeller)
        return next(createError(403, "Only seller are allowed to create a gig!"));
    const newGig = new GigModel({
        userId: req.userId,
        ...req.body,
    });

    try {
        const saveGig = await newGig.save();
        res.status(201).json(saveGig);
    } catch (err) {
        next(err);
    }
};

export const deleteGig = async (req, res, next) =>{
    try {
        const gig = await GigModel.findById(req.params.id);
        if(!gig)  return next(createError(403, "Gig Doesn't exist!"));
        if(gig.userId !== req.userId)
            return next(createError(403, "Not allow, not your gig"));
        await GigModel.findByIdAndDelete(req.params.id);
        res.status(200).send("Gig deleted successfully!");
    } catch (err) {
        next(err);
    }
};

export const getGig = async (req, res, next) =>{
    try {
        const gig = await GigModel.findById(req.params.id);
        if(!gig)  return next(createError(403, "Gig Doesn't exist!"));
        res.status(200).send(gig);
    } catch (err) {
        next(err);
    }
};

export const getGigs = async (req, res, next) =>{
    const q = req.query;
    const filters = {
        ...(q.userId && {userId: q.userId}),
        ...(q.cat && {cat: {$regex: q.cat, $options: "i" }}),
        ...((q.min || q.max) && {
            price: {...(q.min && {$gt: q.min}), ...(q.max && {$lt: q.max}) },
        }),
        ...(q.search && {title: {$regex: q.search, $options: "i" }}),
    };
   
    try {
        const gigs = await GigModel.find(filters).sort({ [q.sort]: -1});
        if(!gigs)  return next(createError(403, "Gig Doesn't exist!"));
        res.status(200).send(gigs);
    } catch (err) {
        next(err);
    }
};
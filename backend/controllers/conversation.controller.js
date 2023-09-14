import ConversationModel from "../models/conversation.model.js";
import createError from "../utils/createError.js";

export const createConversation = async (req, res, next) =>{
    const newConversation = ConversationModel({
        id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
        sellerId: req.isSeller ? req.userId : req.body.to,
        buyerId: req.isSeller ? req.body.to : req.userId,
        readBySeller: req.isSeller,
        readByBuyer: !req.isSeller,
    });
    try {
        const saveConversation = await newConversation.save();
        res.status(200).send(saveConversation);
    } catch (err) {
        next(err);
    }
};

export const updateConversation = async (req, res, next) =>{
    try {
        const updatedConversation = await ConversationModel.findOneAndUpdate(
            {id: req.params.id},
            {
                $set: {
                    // readBySeller: req.isSeller,
                    // readByBuyer: !req.isSeller,
                    // readBySeller: true,
                    // readByBuyer: true,
                    ...(req.isSeller ? { readByBuyer: true } : { readBySeller: true }),
                },
            },
            { new: true }
        );
        res.status(200).send(updatedConversation);
    } catch (err) {
        next(err);
    }
};

export const getSingleConversation = async (req, res, next) =>{
    try {
        const conversation = await ConversationModel.findOne({ id: req.params.id });
        if(!conversation)
            return next(createError(404, "Not found!"))
        res.status(200).send(conversation);
    } catch (err) {
        next(err);
    }
};

export const getConversations = async (req, res, next) =>{
    try {
        const conversations = await ConversationModel.find(
            req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
        ).sort({updatedAt: -1});

        res.status(200).send(conversations);
    } catch (err) {
        next(err);
    }
};
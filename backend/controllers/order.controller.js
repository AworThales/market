import OrderModel from "../models/order.model.js";
import GigModel from "../models/gig.model.js";

export const createOrder = async (req, res, next) =>{
    try {
        const gig = await GigModel.findById(req.params.gigId);
        const newOrder = new OrderModel({
            gigId: gig._id,
            sellerId: req.userId,
            buyerId: gig.userId,
            title: gig.title,
            price: gig.price,
            img: gig.coverImg,
            payment_intent: "tmp",
        });

        await newOrder.save();
        res.status(200).send("Order was successful");
    } catch (err) {
        next(err);
    }
};

export const getOrders = async (req, res, next) =>{
    try {
       const orders = await OrderModel.find({
        ...(req.isSeller ? {sellerId: req.userId} : {buyerId: req.userId}),
        isCompleted: true,
       });
        res.status(200).send(orders);
    } catch (err) {
        next(err);
    }
};
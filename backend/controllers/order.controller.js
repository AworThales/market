import OrderModel from "../models/order.model.js";
import GigModel from "../models/gig.model.js";
import stripe, { Stripe } from "stripe";

// export const createOrder = async (req, res, next) =>{
//     try {
//         const gig = await GigModel.findById(req.params.gigId);
//         const newOrder = new OrderModel({
//             gigId: gig._id,
//             sellerId: req.userId,
//             buyerId: gig.userId,
//             title: gig.title,
//             price: gig.price,
//             img: gig.coverImg,
//             payment_intent: "tmp",
//         });

//         await newOrder.save();
//         res.status(200).send("Order was successful");
//     } catch (err) {
//         next(err);
//     }
// };

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

export const paymentIntent = async (req, res, next) =>{
    const stripe = new Stripe(
        process.env.STRIPE_KEY
    );

    const gig = await GigModel.findById(req.params.id);

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: gig.price * 100,
        currency: "usd",
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        automatic_payment_methods: {
        enabled: true,
    },
  });

    const newOrder = new OrderModel({
        gigId: gig._id,
        sellerId: req.userId,
        buyerId: gig.userId,
        title: gig.title,
        price: gig.price,
        img: gig.coverImg,
        payment_intent: paymentIntent.id,
    });

    await newOrder.save();
    res.status(200).send({
        clientSecret: paymentIntent.client_secret,
    });
};

export const confirmOrder = async (req, res, next) =>{
    try {
        const gig = await OrderModel.fineOneAndUpdate(
            {payment_intent: req.body.payment_intent},
            {
                $set: {
                    isCompleted: true,
                },
            }
        );

        res.status(200).send("Order has was successfully confirmed.");
    } catch (err) {
        next(err);
    }
};
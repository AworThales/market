import mongoose from "mongoose";
const { Schema } = mongoose;

const ReviewSchema = new Schema({
    gigId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    star: {
        type: Number,
        required: 0,
        enum: [1,2,3,4,5],   //stars can only be in this number range
    },
},{timestamps:true});

export default mongoose.model("Review",  ReviewSchema);
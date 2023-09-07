import mongoose from "mongoose";
const { Schema } = mongoose;

const MessageSchema = new Schema({
    consersationId: {
        type: String,
        required: true,
        unique: true,
    },
    userId: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
},{timestamps:true});

export default mongoose.model("Message",  MessageSchema);
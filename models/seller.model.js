import mongoose, { Schema } from "mongoose";

const sellerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const Seller = mongoose.model('Seller', sellerSchema);
import mongoose, { Schema } from "mongoose";

const sellerProductSchema = new Schema({
    seller_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller",
        required: true
    },
    product_name: {
        type: String,
        required: true
    },
    variants: [
        {
            price: { type: Number },
            media: [
                { name: { type: String } }
            ],
            attributes: { type: Map, of: String }
        }
    ]

}, {timestamps: true});

export const SellerProduct = mongoose.model('SellerProduct', sellerProductSchema)
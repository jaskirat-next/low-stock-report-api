import mongoose, { Schema } from "mongoose";

const inventerySchema = new Schema({
    seller_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller",
        required: true
    },
    inventory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SellerProduct",
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    total_stock: {
        type: Number,
        required: true
    },
    low_stock_alert: {
        type: Number,
        required: true
    },
    per_piece_price: {
        type: Number
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    }
}, { timestamps: true })

export const Inventery = mongoose.model('Inventery', inventerySchema);
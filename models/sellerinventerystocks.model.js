import mongoose, { Schema } from "mongoose";

const inventerySchema = new Schema({
    
}, {timestamps: true})

export const Inventery = mongoose.model('Inventery', inventerySchema);
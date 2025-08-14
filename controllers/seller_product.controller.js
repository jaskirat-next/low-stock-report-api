import { SellerProduct } from "../models/seller_product.model.js";


export const addSellerProduct = async (req, res) => {
    try {
    const data = new SellerProduct(req.body);
    const saveData = await data.save();
    res.status(200).json({
        msg: "Data Saved",
        saveData
    })
    }catch(error) {
        console.log(error);
    }
}
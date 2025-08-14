import { Seller } from "../models/seller.model.js"


export const addSeller = async (req, res) => {
    try {
        const data = new Seller(req.body);
        const saveData = await data.save();
        res.status(200).json({
            msg: "Data Saved",
            saveData
        })
    }catch(error) {
        console.error(error)
    }
}
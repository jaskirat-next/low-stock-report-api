import { Inventery } from "../models/sellerinventerystocks.model.js";


export const addInventoryStocks = async (req, res) => {
    try {
        const data = new Inventery(req.body);
        const saveData =  await data.save();
        res.status(200).json({
            msg: "Data Saved",
            saveData
        })
    } catch(error) {
        console.error(error);
        
    }
}

export const getLowStockReport = async (req, res) => {
    try{
    const lowStockData = await Inventery.aggregate([
        {
            $match: {
                $expr: {$lt: ["$total_stock", "$low_stock_alert"]}
            },

        },
        {
            $lookup: {
                from: "sellers",
                localField: "seller_id",
                foreignField: "_id",
                as: "seller"
            }
        },
        {$unwind: "$seller"},
        {
            $lookup: {
                from: "sellerproducts",
                localField: "inventory_id",
                foreignField: "_id",
                as: "inventory"
            }
        },
        {$unwind: "$inventory"},
        {
            $project: {
                _id: 0,
                sku: 1,
                total_stock: 1,
                low_stock_alert: 1,
                price: "$per_piece_price",
                seller_name: "$seller.name",
                seller_email: "$seller.email",
                product_name: "$inventory.product_name",
                image: {
                    $arrayElemAt: [
                        {$arrayElemAt: ["$inventory.variants.media.name", 0]},
                        0
                    ]
                }
            }
        }
    ])

    res.status(200).json({
        msg: "Low Stock Report",
        lowStockData
    })
    } catch (error) {

    }
}
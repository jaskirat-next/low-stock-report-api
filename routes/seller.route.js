import express from "express";
import { addSeller } from "../controllers/seller.cotroller.js";
import { addSellerProduct } from "../controllers/seller_product.controller.js";
import { addInventoryStocks, getLowStockReport } from "../controllers/sellerInventoryStocks.controller.js";

const route =  express.Router();

route.post('/addSeller', addSeller)
route.post('/addSellerProduct', addSellerProduct)
route.post('/addInventoryStocks', addInventoryStocks)
route.get('/getLowStockReport', getLowStockReport)

export default route;
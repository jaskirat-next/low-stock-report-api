import express from "express";
import { addSeller } from "../controllers/seller.cotroller.js";
import { addSellerProduct } from "../controllers/seller_product.controller.js";

const route =  express.Router();

route.post('/addSeller', addSeller)
route.post('/addSellerProduct', addSellerProduct)

export default route;
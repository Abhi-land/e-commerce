import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ Product }) => {
    const navigation = useNavigate();

    return (
        <div onClick={() => navigation(`/Product/${5}`)} className="ProductCard w-[15rem] m-3 transition-all cursor-pointer">
            <div className="h-[20rem]">
                <img className="h-full w-full object-fill object-left-top" src={Product.image} alt="" />
            </div>
            <div className="textpart bg-white p-3" >
                <div>
                    <p className="font-bold opacity-60" >{Product.brand}</p>
                    <p>{Product.title}</p>
                </div>
                <div className="flex items-center space-x-2" >
                    <p className="font-semibold" >₹ {Product.selling_price}</p>
                    <p className="line-through opacity-50" >₹ {Product.price}</p>
                    <p className="text-green-600 font-semibold">{Product.disscount}</p>
                </div>
            </div>
        </div>
    )
}

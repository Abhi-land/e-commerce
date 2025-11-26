import React from "react";
import "./ProductCard.css";

export const ProductCard = () => {
    return (
        <div className="ProductCard w-[15rem] m-3 transition-all cursor-pointer">
            <div className="h-[20rem]">
                <img className="h-full w-full object-fill object-left-top" src="images/Mens_Kurta/10.jpg" alt="" />
            </div>
            <div className="textpart bg-white p-3" >
                <div>
                    <p className="font-bold opacity-60" >Universal outfit</p>
                    <p>Casual Puff Sleeves Solid Mens Yellow Kurta</p>
                </div>
                <div className="flex items-center space-x-2" >
                    <p className="font-semibold" >₹199</p>
                    <p className="line-through opacity-50" >₹1999</p>
                    <p className="text-green-600 font-semibold">70% off</p>
                </div>
            </div>
        </div>
    )
}

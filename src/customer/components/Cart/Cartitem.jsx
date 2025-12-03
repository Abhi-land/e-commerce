import React from "react";

export const Cartitem = () => {
    return (

        <div className="p-5 shadow-lg border rounded-md">
            <div className="flex item-center">
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]" ><img className="w-full h-full object-cover object-top" src="./images/girl (4).png" /></div>
                <div className="ml-5 space-y-1">
                    <p className="font-semibold" > Men Slim Mid Rise Black Jeans </p>
                    <p className="opacity-70" >Size:L,White</p>
                    <p className="opacity-70 mt-2">Seller: Cristalio fashin world</p>
                    <div className="flex space-x-5 item-center text-gray-900 pt-6">
                        <p className="font-semibold" >₹199</p>
                        <p className="opacity-50 line-through">₹299</p>
                        <p className="text-green-600 font-semibold">%5 off</p>
                    </div>
                </div>
            </div>

            <div className="">

            </div>
        </div>


    )
}
import React from "react";
import AddressCart from "../AddressCard/AddressCart";
import { Cartitem } from "../Cart/Cartitem";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";  

const OrderSummary = () => {
    return (
        <div>
            <div className="p-5 shadow-lg rounded-s-md border" >
                <AddressCart />
            </div>
            <div>
                <div className="lg:grid grid-cols-3 lg:px-16 pt-3 relative">
                    <div className="col-span-2">
                        {[1, 1, 1, 1, 1].map((item) => <Cartitem />)}
                    </div>
                    <div className="px-2 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                        <div className="p-2 border" ><p className="uppercase font-bold opacity-60 pb-4" >Product Details</p>
                            <Divider />
                            <div className="space-y-3 font-semibold">
                                <div className="flex justify-between pt-3 text-black">
                                    <span>Price</span>
                                    <span>₹4697</span>
                                </div>
                                <div className="flex justify-between pt-3 ">
                                    <span>Disccount</span>
                                    <span className="text-green-600">-₹3419</span>
                                </div>
                                <div className="flex justify-between pt-3 ">
                                    <span>Delivery Charge</span>
                                    <span className="text-green-600">Free</span>
                                </div>
                                <div className="flex justify-between pt-3 ">
                                    <span>Total Amount</span>
                                    <span className="text-green-600">₹1278</span>
                                </div>
                            </div>
                        </div>
                        <Button variant="contained" className="w-full" sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd", marginTop: "1rem" }} >ADD TO CART</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default OrderSummary
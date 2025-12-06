import { Grid } from "@mui/material";
import React from "react";
import OrderCart from "./OrderCart";

const Order = () => {
    const OrderStatus = [
        { label: "On The Way", value: "on_the_way" },
        { label: "Delivered", value: "delivered" },
        { label: "Cancelled", value: "cancelled" },
        { label: "Returned", value: "returned" },

    ]

    return (
        <div className="pt-5 px:5 lg:px-20">
            <Grid container spacing={3}  >
                <Grid item size={2} >
                    <div className="h-auto shadow-lg bg-white  p-5 sticky  top-5">
                        <h1 className="font-bold text-lg" >Filter</h1>
                        <div className="space-y-4 mt-10">
                            <h1 className="font-semibold">Order Status</h1>
                            {OrderStatus.map((Option) =>
                                <div className="flex items-center">
                                    <input defaultValue={Option.value} type="checkbox" className="h-4 w-4  border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                    <label className="ml-3 text-sm text-gray-600 " htmlFor={Option.value}>{Option.label}</label>
                                </div>
                            )}
                        </div>
                    </div>

                </Grid>
                <Grid item size={10}>
                    <div className="space-y-5" >
                        {[1, 1, 1, 1, 1].map((item) => <OrderCart />)}

                    </div>
                </Grid>
            </Grid>
        </div>
    )

}

export default Order
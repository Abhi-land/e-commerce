import React from "react";
import AddressCart from "../AddressCard/AddressCart";
import OrderTraker from "./OrderTraker";
import { Box, colors, Grid } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { deepPurple } from "@mui/material/colors";

const OrderDetails = () => {
    return (
        <div className="pt-5 px:5 lg:px-20">
            <div>
                <h1 className="font-bold texl-xl py-7" >Dilivery Address</h1>
                <AddressCart />
            </div>
            <div className="py-20">
                <OrderTraker activeStep={3} />
            </div>
            <div className="space-y-5 ">

                {[1, 1, 1, 1, 1].map((item) =>
                    <div className="shadow-md  hover:shadow-black border">
                        <Grid
                            item
                            container
                            spacing={2}
                            className="shadow-xl rounded-md p-5 border"
                            sx={{ alignItems: "center", justifyContent: "space-between" }}
                            xs={12}
                        >
                            <Grid item xs={6}>
                                <div className="flex items-center space-x-4">
                                    <img
                                        className="w-[5rem] h-[5rem] object-cover object-top"
                                        src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/2/l/r/l-6909-blue-libas-original-imafygzxftqzszfx-bb.jpeg?q=70"
                                    />
                                    <div className="space-y-2 ml-5">
                                        <p className="font-semibold" >Women's slim mid Rise Dress</p>
                                        <p className="space-x-5 opacity-50 text-xs font-semibold">
                                            <span>Color : Pink</span><span> Size: M </span>
                                        </p>
                                        <p  >Seller: Lenaria</p>
                                        <p>₹1999</p>
                                    </div>
                                </div>
                            </Grid>

                            <Grid item xs={6}>
                                <Box sx={{ color: "purple" }}>
                                    <div className="flex space-x-3">
                                        <StarBorderIcon />
                                        <span>Rate & Review Product</span>
                                    </div>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                )}
            </div>


        </div>
    );
}

export default OrderDetails
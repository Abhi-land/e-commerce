import { Grid } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderCart = () => {
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-md  hover:shadow-black border " >
            <Grid container spacing={3} columns={12} sx={{ justifyContent: "space-between" }}>
                <Grid item size={4}>
                    <div className="flex cursor-pointer">
                        <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70" alt="" />
                        <div className="ml-5 space-y-2" >
                            <p>Women's slime mid ride black kurti</p>
                            <p className="opacity-50 text-xs font-semibold">Size: M</p>
                            <p className="opacity-50 text-xs font-semibold">Color: Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item size={4}>
                    <p>₹1999</p>
                </Grid>
                <Grid item size={4}>
                    {true && <div>
                        <p>
                            <AdjustIcon sx={{ width: "20px", height: "20px" }} className="text-green-600 mr-2 text-sm" />
                            <span>
                                Delivered on March 03
                            </span>
                        </p>
                        <p className="text-xs" >
                            Your Item has been delivered
                        </p>
                    </div>}
                    {false && <p>
                        <span>
                            Expected Delivery On Mar 03
                        </span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCart

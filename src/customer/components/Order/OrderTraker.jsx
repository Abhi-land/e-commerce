import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const OrderTraker = ({ activeStep }) => {
    const steps = [
        "placed",
        "Order Confirmed",
        "shipped",
        "Out For Delivery",
        "Delivered"
    ]
    return (
        <div className="w-full" >
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) =>
                    <Step>
                        <StepLabel xs={{ color: "#9155FD", fontsize: "44px" }} >{label}</StepLabel>
                    </Step>
                )}
            </Stepper>
        </div>
    )
}
export default OrderTraker

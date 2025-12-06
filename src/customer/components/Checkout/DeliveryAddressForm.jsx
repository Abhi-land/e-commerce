import { Button, Grid, Box, TextField, FormControl } from "@mui/material";
import React from "react";
import AddressCart from "../AddressCard/AddressCart";

const DeliveryAddressForm = () => {
    const Handal_Submit =(e)=>{
        e.preventDefault();
        const fetchdata = new FormData(e.currentTarget);
        const Data = {
            firstname:fetchdata.get("First_Name"),
            Last_Name:fetchdata.get("Last_Name"),
            Address:fetchdata.get("Address"),
            City:fetchdata.get("City"),
            State:fetchdata.get("State"),
            Zip:fetchdata.get("Zip"),
            Phone_Number:fetchdata.get("Phone_Number"),
        }
        console.log("yes function is calling",Data);
    }
    return (
        <div>
            <Grid container spacing={4} >
                <Grid item size={6} className="border rounded-e-md shadow-md h-[10rem] overflow-y-scroll" >
                    <div className="p-5 py-7 border-b cursor-pointer" >
                        <AddressCart />
                        <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }} size="large" variant="contained" >Delever Here</Button>
                    </div>
                </Grid>

               

                <Grid container item size={6}>
                    <Box className="border rounded-s-md shadow-md p-5" sx={{ width: "100%" }}>
                        <form onSubmit={Handal_Submit} >
                            <Grid container spacing={3}>

                                <Grid item size={6}>
                                    <TextField
                                        required
                                        id="First_Name"
                                        name="First_Name"
                                        label="First Name"
                                        fullWidth
                                        autoComplete="given-name"

                                    />
                                </Grid>

                                <Grid item size={6}>
                                    <TextField
                                        required
                                        id="Last_Name"
                                        name="Last_Name"
                                        label="Last Name"
                                        fullWidth
                                        autoComplete="given-name"

                                    />
                                </Grid>

                                <Grid item size={12} >
                                    <TextField
                                        required
                                        id="Address"
                                        name="Address"
                                        label="Enter your Address"
                                        fullWidth
                                        multiline
                                        minRows={2}
                                        maxRows={6}
                                    />
                                </Grid>
                                <Grid item size={6}>
                                    <TextField
                                        required
                                        id="City"
                                        name="City"
                                        label="Your City Name"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item size={6}>
                                    <TextField
                                        required
                                        id="State"
                                        name="State"
                                        label="State/Province/region"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item size={6}>
                                    <TextField
                                        required
                                        id="Zip"
                                        name="Zip"
                                        label="Zip/Postal Code"
                                        fullWidth
                                        autoComplete="shipping postal-code"
                                    />
                                </Grid>
                                <Grid item size={6}>
                                    <TextField
                                        required
                                        id="Phone_Number"
                                        name="Phone_Number"
                                        label="Phone Number"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item size={6}>
                                    <Button sx={{ my:1.5,mt: 2, bgcolor: "RGB(145 85 253)" }} size="large" variant="contained" type="submit" >Delever Here</Button>
                                </Grid>
                            </Grid>

                        </form>
                    </Box>
                </Grid>
            </Grid>


        </div>
    )
}

export default DeliveryAddressForm;
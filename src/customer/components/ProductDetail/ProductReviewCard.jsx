import { Avatar, Box, Grid } from "@mui/material";
import Rating from '@mui/material/Rating';
import React from "react";

export const ProductReviewCard = () => {
    return (
        <div>

            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className="text-white" sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}>A</Avatar>
                    </Box>
                </Grid>

                <Grid item xs={7}>
                    <div className='space-y-5' >
                        <div>
                            <p className="font-semibold text-lg">Raam</p>
                            <p className="opacity-70" >April 6,2025</p>
                        </div>
                    </div>
                    <Rating value={4.5} name='helf-rating' readOnly precision={0.5} />
                    <p>nice product i love this dress</p>
                </Grid>
            </Grid>

        </div>
    )
}
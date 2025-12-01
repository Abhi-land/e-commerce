import { Avatar, Box, Grid } from "@mui/material";
import React from "react";

export const ProductReviewCard = () => {
    return (
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className="text-white" sx={{width:56,height:56,bgcolor:"#9155fd"}} >R</Avatar>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
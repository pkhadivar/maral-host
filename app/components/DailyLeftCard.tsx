"use client"

import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { Grid } from '@mui/material';


interface DailyLeftCardProps {
    width: string
    fNumber: number
    sNumber: number
    badgeColor: any
}


const DailyLeftCard: React.FC<DailyLeftCardProps> = ({ width, fNumber, sNumber, badgeColor }) => {
    return (
        <Card
            variant="outlined"
            orientation="horizontal"
            sx={{
                backgroundColor: "#CFCFCF",
                height: "162px",
                marginRight: "1rem",
                width: { width },
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
            }}
        >

            <CardContent sx={{
                display: "flex",
                justifyContent: "center",
                alignItems:"center"
            }}>
                <Chip
                    variant="solid"
                    color={badgeColor}
                    size="md"
                    sx={{ pointerEvents: 'none', marginBottom: "2rem" }}

                >
                    Searches Used
                </Chip>
                <Grid sx={{ display: "flex", flexDirection: "row", alignItems: "center" }} mb={2}>
                    <Typography level="h2" id="card-description">
                        {`${fNumber}/`}
                    </Typography>
                    <Typography level="h3" id="card-description">
                        {sNumber}

                    </Typography>
                </Grid>
            </CardContent>

        </Card>
    );
}

export default DailyLeftCard


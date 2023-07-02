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


interface ProgressCardProps {
    width: string,
    progressColor: any
    fNumber: string
    sNumber: string
    badgeColor: any
    value: number
}


const ProgressCard: React.FC<ProgressCardProps> = ({ width, progressColor, fNumber, sNumber, badgeColor, value }) => {
    return (
        <Card
            variant="outlined"
            orientation="horizontal"
            sx={{
                marginRight: "1rem",
                width: { width },
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
            }}
        >
            <Grid xs={5}>
                <CircularProgress variant="determinate" value={value} size="8rem" color={progressColor} />
            </Grid>
            <Grid xs={7}>
                <CardContent>
                    <Chip
                        variant="solid"
                        color={badgeColor}
                        size="md"
                        sx={{ pointerEvents: 'none', marginBottom: "1rem" }}

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
                    <Typography color="primary" level="h2" aria-describedby="card-description" mb={1}>
                        {`${value}%`}
                    </Typography>
                </CardContent>
            </Grid>
        </Card>
    );
}

export default ProgressCard


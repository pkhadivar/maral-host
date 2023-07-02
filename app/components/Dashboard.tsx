import React from 'react'
import ProgressCard from "./ProgressCard"
import { Grid, Typography } from '@mui/material'
import { Button } from '@mui/material';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import DailyLeftCard from './DailyLeftCard';
import DailyUsageChart from "./DailyUsageChart"
import CustomizedTables from './LatestsearchTable';
import ApiKeyCard from './ApiKeyCard';
import FiltersSheetTable from './FiltersCheatSheetTable';

const Dashboard = () => {
    return (
        <Grid container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#F4F5F6" }}>
            <Grid sx={{ display: "flex", flexDirection: "row", my: "2rem" }}>
                <Typography mr="3rem" component="h1" variant="h3">Hi, Iman.</Typography>
                <Button sx={{ backgroundColor: "#0060FE !important" }} variant="contained" startIcon={<BoltOutlinedIcon />}>
                    researcher
                </Button>
            </Grid>
            <Grid sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                <ProgressCard badgeColor="primary" progressColor="primary" width="412px" fNumber="5,300" sNumber="10,000" value={59} />
                <ProgressCard badgeColor="danger" progressColor="error" width="454px" fNumber="5,300" sNumber="10,000" value={71} />
                <DailyLeftCard badgeColor="success" width="215px" fNumber={234} sNumber={365} />
            </Grid>
            <Grid mt={3}>
                <DailyUsageChart />
            </Grid>
            <Grid mt={3}>
                <CustomizedTables />
            </Grid>
            <Grid mt={3} sx={{display: "flex", flexDirection: "row"}}>
                <Grid xs={3}>
                    <ApiKeyCard />
                </Grid>
                <Grid xs={9}>
                <FiltersSheetTable />
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Dashboard

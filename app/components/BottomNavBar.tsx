"use client";

import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Badge from '@mui/material/Badge';
import { Button } from '@mui/material';

//Pages
import Dashboard from "./Dashboard"


import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';


const BottomNavBar = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    // const StatisticsIcon = () => {
    //     return(
    //         <Badge sx={{ borderRadius: '50%', border:"2px solid blue", padding:"2px", marginRight:".2rem"}}>
    //             <SignalCellularAltOutlinedIcon fontSize='small'/>
    //         </Badge>
    //     )
    // }
    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', px: "3rem", backgroundColor:"#ffffff" }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab icon={<GridViewRoundedIcon />} iconPosition="start" label="Dashboard" value="1" />
                        <Tab icon={<DescriptionOutlinedIcon />} iconPosition="start" label="Billing" value="2" />
                        <Tab icon={<PermIdentityRoundedIcon />} iconPosition="start" label="Profile" value="3" />
                        <Tab icon={<SettingsOutlinedIcon />} iconPosition="start" label="Setting" value="4" />
                        <Tab icon={<InsertChartOutlinedIcon />} iconPosition="start" label="Statistics" value="5" />
                        <Tab icon={<KeyboardArrowDownOutlinedIcon />} iconPosition="end" label="More" value="6" />
                        <Button sx={{ backgroundColor: "#0060FE !important", my: "1rem", ml: "32rem", borderRadius: 28 }} variant="contained" startIcon={<HeadphonesOutlinedIcon />}>
                            support
                        </Button>
                    </TabList>
                </Box>
                <Box ml="2.5rem">
                    <TabPanel value="1"><Dashboard /></TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                    <TabPanel value="4">Item Three</TabPanel>
                    <TabPanel value="5">Item Three</TabPanel>
                    <TabPanel value="6">Item Three</TabPanel>
                </Box>
            </TabContext>
        </Box>
    )
}

export default BottomNavBar

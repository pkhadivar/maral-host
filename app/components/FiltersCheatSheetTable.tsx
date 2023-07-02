import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@material-ui/core';
import { Grid } from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import { Button, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    //hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    query: string,
    type: string,
    result: string,
) {
    return { query, type, result };
}

const rows = [
    createData('city', "Name of the city", "Devices in San Diego"),
    createData('country', "2-letter Country code", "Open ports in the United States"),
    createData('http.title', "Title of the website", `"Hacked" Websites`),
    createData('net', "Network ranger or IP in CIDR notation", "Services in the range of 8.8.0.0 to 8.8.255.255"),
];

const FiltersSheetTable = () => {
    return (
        <Box bgcolor="#ffffff" sx={{ borderRadius: "30px", height: 454, p: "1rem" }}>
            <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Grid sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Grid>
                        <Typography component="h1" variant="h5" mb={1} >
                            <strong>Filters</strong> Cheat Sheet
                        </Typography>
                        <Typography component="h2" variant="body2">
                            Here are a few of the most commonly-used search filters to get started.
                        </Typography>
                    </Grid>
                    <Grid>
                        <MoreVertOutlinedIcon />
                    </Grid>
                </Grid>
                <Grid sx={{ marginTop: "3.5rem" }}>
                    <TableContainer component={Paper} sx={{ border: 0 }}>
                        <Table sx={{ minWidth: 700, minHeight: 338}} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>FILTER'S NAME</StyledTableCell>
                                    <StyledTableCell align="left">DESCRIPTION</StyledTableCell>
                                    <StyledTableCell align="left">EXAMPLE</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.query}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.query}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.type}</StyledTableCell>
                                        <StyledTableCell align="left">{row.result}</StyledTableCell>
                                    </StyledTableRow>

                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Box>
    );
}

export default FiltersSheetTable

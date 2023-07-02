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
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  query: string,
  type: string,
  result: string,
  carbs: any,
  report: any,
) {
  return { query, type, result, carbs, report };
}

const rows = [
  createData('nginxWebUI', "Certificate", "1392 Result", <Button variant="outlined" color="inherit" endIcon={<KeyboardArrowRightIcon />}>
    Results
  </Button>, <Button  variant="outlined" color="inherit" endIcon={<KeyboardArrowRightIcon />}>
    View Reports
  </Button>),
  createData('nginx-proxy-manager', "Image", "1392 Result", <Button  variant="outlined" color="inherit" endIcon={<KeyboardArrowRightIcon />}>
  Results
</Button>, <Button  variant="outlined" color="inherit" endIcon={<KeyboardArrowRightIcon />}>
  View Reports
</Button>),
  createData('neusoft-senginx', "Certificate", "1392 Result", <Button  variant="outlined" color="inherit" endIcon={<KeyboardArrowRightIcon />}>
  Results
</Button>, <Button  variant="outlined" color="inherit" endIcon={<KeyboardArrowRightIcon />}>
  View Reports
</Button>),
  createData('Addon-nginx-proxy-manager', "Certificate", "1392 Result", <Button  variant="outlined" color="inherit" endIcon={<KeyboardArrowRightIcon />}>
  Results
</Button>, <Button  variant="outlined" color="inherit" endIcon={<KeyboardArrowRightIcon />}>
  View Reports
</Button>),
];

const CustomizedTables = () => {
  return (
    <Box bgcolor="#ffffff" >
      <Typography component="h2" variant="h4" mb={3} ml={2}>
        Latest Searches
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>QUERY</StyledTableCell>
              <StyledTableCell align="left">Type</StyledTableCell>
              <StyledTableCell align="left">Result</StyledTableCell>
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
                <StyledTableCell align="left">{row.carbs}</StyledTableCell>
                <StyledTableCell align="left">{row.report}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CustomizedTables

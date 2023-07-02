import * as React from 'react';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import { Grid } from '@mui/material';

const ApiKeyCard = () => {
    return (
        <Card
            variant="solid"
            color="primary"
            invertedColors
            sx={{
                width: 268,
                height: 454,
                maxWidth: '100%',
                // to make the demo resizeable
                resize: 'horizontal',
                display: 'flex',
                flexDirection: 'column',
                justifyContent:"space-around"
            }}
        >
            <Grid>
                <Typography level="h4">
                    API KEY{' '}
                </Typography>
            </Grid>
            <Grid>
                <Typography level="body2">
                    dm1lc3M6Ly9leUoySWpvaU1pSXN
                    JbkJ6SWpvaVhIVXdOakkzWEhVd05
                    qTXpYSFV3TmpReFhIVXdOalE
                    yWEhVd05qSm1JREk0SUh3Z1hIVXd
                    Oak14WEhVd05qUTRYSFV3TmpNeUlGe
                    DFNRFkwTlZ4MU1EWXlOMXgxTURZME5
                    seDFNRFl5Wmx4MU1EWTBOem9nTXpJa
                    UxDSmhaR1FpT2lKY2RUQTJOREpjZFR
                </Typography>
                <Typography level="body1" textAlign="left">
                    Generated 03.08.2023
                </Typography>
            </Grid>
            <Grid>
                <CardActions>
                    <Button sx={{borderRadius:"30px", backgroundColor:"#074FC6"}} color="neutral">Copy to clipboard</Button>
                </CardActions>
            </Grid>
        </Card>
    );
}

export default ApiKeyCard
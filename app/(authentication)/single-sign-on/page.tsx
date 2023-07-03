"use client"

import { yupResolver } from "@hookform/resolvers/yup";
import GithubIcon from '@mui/icons-material/Github';
import GoogleIcon from '@mui/icons-material/Google';
import FormControlLabel from '@mui/material/FormControlLabel';
import SendToMobileOutlinedIcon from '@mui/icons-material/SendToMobileOutlined';
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Grid";
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
import leftLogo from "../../../public/leftlogo.png"
import React, { useEffect } from "react";
import Link from 'next/link';
import { isMobile, isTablet } from "react-device-detect";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Image from "next/image";
import InputLabel from '@mui/material/InputLabel';
import { useState } from "react";
import Box from '@mui/material/Box';

const Login = () => {
    //const [forceError, setForceError] = useState("");
    //const message = useSelector((state) => state.auth.message);

    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        password: yup.string().required("Password is required"),
    });

    const { register, handleSubmit, control } = useForm({
        resolver: yupResolver(schema),
    });

    // <button onClick={() => dispatch(userAdded("Noman"))}>Login</button>
    //     <button style={{marginLeft: 20}} onClick={() => dispatch(userRemoved())}>Logout</button>

    return (
        <Grid container component="main" sx={{ height: "100vh" }}>
            {/* <CssBaseline /> */}
            {!isMobile && (
                <Grid
                    item
                    // direction="column"
                    // alignItems="center"
                    // justifyContent="center"
                    xs={false}
                    sm={6}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        //backgroundColor: "#1B3E83",
                        height: "100vh",
                        //display: { xs: "none", sm: "block" },
                    }}
                >
                    <Box sx={{ with: 650, height: 700, borderRadius: 10, overflow: "hidden" }}>
                        <Image width={650} height={700} src={leftLogo} alt="image" />
                    </Box>
                </Grid>
            )}

            <Grid
                item
                container
                xs={12}
                sm={!isMobile ? 6 : 12}
                justifyContent="center"
            >
                <Grid
                    container
                    item
                    xs={10}
                    sm={7}
                    md={9}
                    lg={7}
                    xl={6}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: "100vh", minHeight: "500px" }}
                >
                    <Box sx={{ width: "578", height: "890", backgroundColor: "white", borderRadius: 10, p: 4 }}>
                        <Grid item>
                            <Grid
                                item
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            //alignItems="center"
                            >
                                <SendToMobileOutlinedIcon />
                                <Typography sx={{marginLeft:1}} component="h1" variant="h5">
                                    <strong>Single Sign-On (SSO)</strong>
                                </Typography>
                            </Grid>
                            <form
                                noValidate
                            //onSubmit={handleSubmit((data) => onHandleSubmit(data))}
                            >
                                <Typography variant="body2" sx={{marginTop:3}}>Organization name </Typography>
                                <TextField
                                    {...register("name")}
                                    //control={control}
                                    variant="outlined"
                                    //onChange={(v) => setForceError("")}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Enter your organization"
                                    name="name"
                                    autoComplete="Name"
                                    autoFocus
                                    size="small"
                                //icon={AccountCircleIcon}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    sx={{ marginTop: 2, borderRadius: 3 }}

                                >

                                    Continue

                                </Button>
                            </form>
                        </Grid>
                        <Grid item sx={{ mt: 2 }}>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                align="center"
                                mb={3}
                            >
                                {"Want to use another account? "}
                                <Link href="/login" color="primary">
                                    Login Here
                                </Link>
                            </Typography>
                        </Grid>
                    </Box>

                </Grid>
            </Grid>
        </Grid>
    );
};

export default Login;


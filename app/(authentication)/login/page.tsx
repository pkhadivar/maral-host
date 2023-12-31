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
import { useState } from "react";
import Box from '@mui/material/Box';

const Login = () => {
  //const [forceError, setForceError] = useState("");
  //const message = useSelector((state) => state.auth.message);

  const schema = yup.object().shape({
    email: yup.string().required("Email is required"),
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
                direction="column"
                justifyContent="space-around"
              //alignItems="center"
              >
                <Typography component="h1" variant="h5" textAlign="left">
                  <strong>Login</strong>
                </Typography>
                <Typography
                  variant="body1"
                  textAlign="left"
                  color="gray"
                  component="h6"
                  mb={2}
                  mt={1}
                >
                  Welcome back! Please enter your
                  detail
                </Typography>
              </Grid>
              <Grid>
                <Stack direction="column" spacing={1}>
                  <Button startIcon={<GoogleIcon />}>
                    <Typography color="#323B4B">Sign in with Google</Typography>
                  </Button>
                  <Button startIcon={<GithubIcon />}>
                    <Typography color="#323B4B">Sign in with Github</Typography>
                  </Button>
                </Stack>
              </Grid>
              <Divider sx={{ my: 3 }}>or Sign in with Email</Divider>
              <form
                noValidate
              //onSubmit={handleSubmit((data) => onHandleSubmit(data))}
              >
                <TextField
                  {...register("email")}
                  //control={control}
                  variant="outlined"
                  //onChange={(v) => setForceError("")}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="Email"
                  autoFocus
                  size="small"
                //icon={AccountCircleIcon}
                />
                <TextField
                  {...register("password")}
                  //control={control}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  //onChange={(v) => setForceError("")}
                  id="password"
                  autoComplete="current-password"
                  size="small"
                //icon={HttpsIcon}
                //forceError={forceError}
                />
                {/* 
                {login === message ? <Typography variant="h6" component="span" color="primary"> {message} </Typography>
                : null
                } */}

                <Grid
                  item
                  container
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ marginTop: 1 }}
                >
                  <FormControlLabel required control={<Checkbox />} label="Remember me" />
                  <Link href="/single-sign-on" color="primary">
                    Forgot Password
                  </Link>
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ marginTop: 1, borderRadius: 3 }}

                >

                  Login

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
                {"Not registered yet? "}
                <Link href="/sign-up" color="primary">
                  Create an Account
                </Link>
              </Typography>
            </Grid>
          </Box>
          <Link href="/single-sign-on"> 
          <Button sx={{marginTop: 1}} fullWidth color="inherit" startIcon={<SendToMobileOutlinedIcon />}>
            Single Sign-on (SSO)
          </Button>         
          </Link>

        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;


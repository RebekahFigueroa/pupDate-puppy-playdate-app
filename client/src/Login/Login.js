import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import image from "./dogsPlaying.jpg";

const Login = () => {
  const [openCreateAccount, setOpenCreateAccount] = useState(false);

  const handleClickOpenCreateAccount = () => {
    setOpenCreateAccount(true);
  };
  const handleCloseCreateAccount = () => {
    setOpenCreateAccount(false);
  };
  return (
    <Grid
      container
      spacing={4}
      sx={{
        minHeight: "100vh",
        maxHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#90AD67",
      }}
    >
      <Grid
        item
        xs={6}
        sx={{
          maxHeight: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component={"img"}
          src={image}
          alt="dogs playing"
          sx={{ height: "100%", margin: "0", padding: "0" }}
        />
      </Grid>
      <Grid
        container
        xs={6}
        justifyContent="center"
        alignItems="center"
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Card
          sx={{
            width: "35rem",
            height: "35rem",
            textAlign: "center",
            borderRadius: 10,
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h2"
              component="div"
              color={"#D09D7C"}
            >
              <strong> Welcome Back! </strong>
            </Typography>
            <Typography variant="body2" color={"#D09D7C"}>
              Don't have an account yet?{" "}
              <Button
                variant="text"
                onClick={handleClickOpenCreateAccount}
                sx={{
                  textDecoration: "underline",
                  color: "#D09D7C",
                }}
              >
                Sign up
              </Button>
              <Dialog
                closeButton
                open={openCreateAccount}
                onClose={handleCloseCreateAccount}
                sx={{ borderRadius: "2rem !important" }}
              >
                <DialogTitle
                  variant="h2"
                  color={"#90AD67"}
                  sx={{
                    backgroundColor: "#F0E6D2",
                  }}
                >
                  <strong>Create an Account</strong>
                </DialogTitle>
                <DialogContent
                  sx={{
                    backgroundColor: "#F0E6D2",
                  }}
                >
                  <Grid container justifyContent="center">
                    <TextField
                      sx={{
                        width: "80%",
                        marginBottom: "2rem",
                        marginTop: "1rem",
                      }}
                      id="outlined-multiline-flexible"
                      variant="filled"
                      label="Username"
                      value=""
                      onChange="{handleTitleChange}"
                      placeholder=""
                    />
                  </Grid>
                  <Grid container justifyContent="center">
                    <TextField
                      sx={{
                        width: "80%",
                        marginBottom: "2rem",
                        marginTop: "1rem",
                      }}
                      id="outlined-multiline-flexible"
                      variant="filled"
                      label="Password"
                      value=""
                      onChange="{handleImageUrlChange}"
                      placeholder=""
                    />
                  </Grid>
                  <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={5}>
                      <TextField
                        sx={{
                          width: "100%",
                          marginBottom: "2rem",
                          marginTop: "1rem",
                        }}
                        id="outlined-multiline-flexible"
                        variant="filled"
                        label="City"
                        value=""
                        onChange="{handleTitleChange}"
                        placeholder=""
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        sx={{
                          width: "100%",

                          marginTop: "1rem",
                        }}
                        id="outlined-multiline-flexible"
                        variant="filled"
                        label="Zipcode"
                        value=""
                        onChange="{handleTitleChange}"
                        placeholder=""
                      />
                    </Grid>
                  </Grid>
                </DialogContent>
                <DialogActions
                  sx={{
                    backgroundColor: "#F0E6D2",
                  }}
                >
                  <Grid container justifyContent="center">
                    <Button
                      onClick="{handleSubmit}"
                      size="large"
                      sx={{
                        backgroundColor: "#D09D7C",
                        color: "#FFFFFF",
                        marginBottom: "2rem",
                        width: "50%",
                      }}
                    >
                      Sign Up
                    </Button>
                  </Grid>
                </DialogActions>
              </Dialog>
            </Typography>
            <Stack component="form" sx={{ mt: 4 }}>
              <Grid container direction={"column"} spacing={5}>
                <Grid item>
                  <TextField
                    label="Username"
                    variant="filled"
                    value=""
                    padding="2rem"
                    sx={{ width: "80%" }}
                    // onChange={(e) => setFirstName(e.target.value)}
                  ></TextField>
                </Grid>
                <Grid item>
                  <TextField
                    label="Password"
                    variant="filled"
                    value=""
                    sx={{ width: "80%" }}
                    // onChange={(e) => setLastName(e.target.value)}
                  ></TextField>
                </Grid>
                <Grid container justifyContent="center">
                  <Button
                    size="large"
                    sx={{
                      backgroundColor: "#D09D7C",
                      color: "#FFFFFF",
                      marginTop: "5rem",
                      marginLeft: "3rem",
                      width: "50%",
                    }}
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;

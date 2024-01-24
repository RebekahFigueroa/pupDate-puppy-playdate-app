import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import image from "./dogsPlaying.jpg";

const Login = () => {
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
                sx={{
                  textDecoration: "underline",
                  color: "#D09D7C",
                }}
              >
                Sign up
              </Button>
            </Typography>
            <Stack component="form" sx={{ mt: 4 }}>
              <Grid container direction={"column"} spacing={5}>
                <Grid item>
                  <TextField
                    label="Username"
                    variant="filled"
                    value=""
                    padding="2rem"
                    fullWidth
                    // onChange={(e) => setFirstName(e.target.value)}
                  ></TextField>
                </Grid>
                <Grid item>
                  <TextField
                    label="Password"
                    variant="filled"
                    value=""
                    fullWidth
                    // onChange={(e) => setLastName(e.target.value)}
                  ></TextField>
                </Grid>

                <Button
                  size="large"
                  sx={{
                    backgroundColor: "#D09D7C",
                    color: "#FFFFFF",
                    marginTop: "5rem",
                    marginRight: "3rem",
                    marginLeft: "5rem",
                  }}
                >
                  Login
                </Button>
              </Grid>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;

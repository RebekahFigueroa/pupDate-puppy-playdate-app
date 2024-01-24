import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Dogs = () => {
  return (
    <Grid container justifyContent="center" backgroundColor="#E9EBF1">
      <Typography gutterBottom variant="h1" component="div" color={"#D09D7C"}>
        <strong> Your Pups </strong>
      </Typography>
      <Grid container justifyContent="center">
        <Button
          size="large"
          sx={{
            backgroundColor: "#D09D7C",
            color: "#FFFFFF",

            width: "20%",
          }}
        >
          Add a Pup
        </Button>
      </Grid>
    </Grid>
  );
};

export default Dogs;

import DeleteIcon from "@mui/icons-material/Delete";
import { CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import image from "./dogImage.jpg";

const ChatCard = () => {
  return (
    <Grid container alignItems="center" sx={{ marginTop: "1rem" }}>
      <Grid item sx={{ width: "4rem" }}>
        <CardMedia
          sx={{
            height: 55,
            borderRadius: "50%",
            width: 55,
            marginRight: "1rem",
          }}
          image={image}
          title="Maxine's Image"
        />
      </Grid>
      <Typography
        variant="body1"
        color="#725A56"
        sx={{
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: "1rem",
          maxWidth: "80%",
        }}
      >
        <strong>
          {" "}
          I'm so excited to meet everyone! Hope someone is bringing a ball!{" "}
        </strong>
      </Typography>
      <DeleteIcon sx={{ color: "#D09D7C" }} />
    </Grid>
  );
};

export default ChatCard;

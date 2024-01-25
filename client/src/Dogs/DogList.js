import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import image from "./dogImage.jpg";

const DogList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight: "1rem",
      }}
    >
      <Typography variant="h6" color="#725A56">
        Maxine
      </Typography>
      <CardMedia
        sx={{
          height: 75,
          borderRadius: "50%", // Use 50% for a circular image
          width: 75,
        }}
        image={image}
        title="Maxine's Image"
      />
    </Box>
  );
};

export default DogList;

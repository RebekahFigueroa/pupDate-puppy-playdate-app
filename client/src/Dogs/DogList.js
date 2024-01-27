import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";

const DogList = ({ dog }) => {
  if (!dog) return null;

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
        {dog.name}
      </Typography>
      <CardMedia
        sx={{
          height: 75,
          borderRadius: "50%",
          width: 75,
        }}
        image={dog.image}
        title="Maxine's Image"
      />
    </Box>
  );
};

export default DogList;

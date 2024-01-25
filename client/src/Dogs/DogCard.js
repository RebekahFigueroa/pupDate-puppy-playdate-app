import PetsIcon from "@mui/icons-material/Pets";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DogPlaydates from "./DogPlaydates";
import image from "./dogImage.jpg";

const DogCard = () => {
  const [openViewDogs, setOpenViewDogs] = useState(false);

  const handleClickOpenViewDogs = () => {
    setOpenViewDogs(true);
  };
  const handleCloseViewDogs = () => {
    setOpenViewDogs(false);
  };
  return (
    <Card
      sx={{
        width: "25rem",
        textAlign: "center",
        backgroundColor: "#D6D6D6",
        borderRadius: 10,
      }}
    >
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        sx={{ marginTop: "2rem", color: "#725A56" }}
      >
        <strong>Maxine</strong>
      </Typography>
      <CardMedia
        sx={{ height: 140, borderRadius: "100%", width: 140, margin: "auto" }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Grid container justifyContent="center" spacing={5}>
          <Grid item>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PetsIcon sx={{ color: "#D09D7C" }} />
              <Typography
                variant="h6"
                color="#725A56"
                sx={{ marginLeft: "0.5rem" }}
              >
                3 years old
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PetsIcon sx={{ color: "#D09D7C" }} />
              <Typography
                variant="h6"
                color="#725A56"
                sx={{ marginLeft: "0.5rem" }}
              >
                Female
              </Typography>
            </Box>
            <Grid />
          </Grid>
          <Grid item>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PetsIcon sx={{ color: "#D09D7C" }} />
              <Typography
                variant="h6"
                color="#725A56"
                sx={{ marginLeft: "0.5rem" }}
              >
                Corgie
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PetsIcon sx={{ color: "#D09D7C" }} />
              <Typography
                variant="h6"
                color="#725A56"
                sx={{ marginLeft: "0.5rem" }}
              >
                Small
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Typography
          variant="h6"
          color="#D09D7C"
          sx={{ marginLeft: "0.5rem", marginTop: "2rem" }}
        >
          "Energetic little puppy who loves to play with her friends and chase
          tennis balls for hours on end!"
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Button
              size="large"
              onClick={handleClickOpenViewDogs}
              sx={{
                backgroundColor: "#D09D7C",
                color: "#FFFFFF",
                borderRadius: 10,
                width: "10rem",
                marginBottom: "1rem",
              }}
            >
              View Playdates
            </Button>
            <Dialog
              closeButton
              open={openViewDogs}
              onClose={handleCloseViewDogs}
              sx={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}
            >
              <DialogTitle
                variant="h2"
                color={"#90AD67"}
                sx={{
                  backgroundColor: "#F0E6D2",
                }}
              >
                <strong>Maxine's Playdates</strong>
              </DialogTitle>
              <DialogContent
                sx={{
                  backgroundColor: "#F0E6D2",
                }}
              >
                <DogPlaydates />
                <DogPlaydates />
                <DogPlaydates />
                <DogPlaydates />
                <DogPlaydates />
              </DialogContent>
            </Dialog>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default DogCard;

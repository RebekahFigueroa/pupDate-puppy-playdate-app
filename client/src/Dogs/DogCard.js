import PetsIcon from "@mui/icons-material/Pets";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DogPlaydates from "./DogPlaydates";

const DogCard = ({ dog }) => {
  const [openViewDogs, setOpenViewDogs] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [playdates, setPlaydates] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const fetchPlaydates = async () => {
      const response = await fetch(`/playdates?dog_id=${dog.id}`);
      const data = await response.json();
      setPlaydates(data);
      setIsLoading(false);
    };

    fetchPlaydates();
  }, [dog.id]);

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
        <strong>{dog.name}</strong>
      </Typography>
      <CardMedia
        sx={{ height: 140, borderRadius: "100%", width: 140, margin: "auto" }}
        image={dog.image}
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
                {dog.age}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PetsIcon sx={{ color: "#D09D7C" }} />
              <Typography
                variant="h6"
                color="#725A56"
                sx={{ marginLeft: "0.5rem" }}
              >
                {dog.gender}
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
                {dog.breed}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PetsIcon sx={{ color: "#D09D7C" }} />
              <Typography
                variant="h6"
                color="#725A56"
                sx={{ marginLeft: "0.5rem" }}
              >
                {dog.size}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Typography
          variant="h6"
          color="#D09D7C"
          sx={{ marginLeft: "0.5rem", marginTop: "2rem" }}
        >
          {dog.description}
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
                <strong>{dog.name}'s Playdates</strong>
              </DialogTitle>
              <DialogContent
                sx={{
                  backgroundColor: "#F0E6D2",
                }}
              >
                {isLoading ? (
                  <Grid
                    container
                    justifyContent="center"
                    mt={1}
                    sx={{
                      backgroundColor: "#F0E6D2",
                    }}
                  >
                    <CircularProgress />
                  </Grid>
                ) : playdates.length > 0 ? (
                  playdates.map((playdate) => (
                    <Grid item key={playdate.id}>
                      <DogPlaydates
                        playdate={playdate}
                        setPlaydates={setPlaydates}
                      />
                    </Grid>
                  ))
                ) : (
                  <Typography gutterBottom variant="h6" color="#725A56">
                    <strong>This pup doesn't have any playdates yet! </strong>
                  </Typography>
                )}
              </DialogContent>
            </Dialog>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default DogCard;

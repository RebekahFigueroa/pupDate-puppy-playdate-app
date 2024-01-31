import PetsIcon from "@mui/icons-material/Pets";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useAuthContext } from "../contexts/AuthContext";

const ProfileCard = ({ dog, setDogs }) => {
  const { checkPermissions } = useAuthContext();
  const handleDelete = () => {
    fetch(`/dogs/${dog.id}`, {
      method: "DELETE",
    }).then(() => {
      setDogs((dogs) => dogs.filter((d) => d.id !== dog.id));
      checkPermissions();
    });
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
        title="dog picture"
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
              sx={{
                backgroundColor: "#D09D7C",
                color: "#FFFFFF",
                borderRadius: 10,
                width: "10rem",
                marginBottom: "1rem",
              }}
              onClick={handleDelete}
            >
              Delete Profile
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;

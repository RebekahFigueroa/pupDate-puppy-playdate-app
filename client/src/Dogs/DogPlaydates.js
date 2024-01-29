import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GavelIcon from "@mui/icons-material/Gavel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import DogList from "./DogList";

const commonStyle = {
  "& .MuiFilledInput-root": {
    borderRadius: "100px",
    backgroundColor: "#FFFFFF",
    border: "none",
  },
  "& .MuiFilledInput-underline:before": {
    borderBottom: "none",
  },
};

const DogPlaydates = ({ playdate, setPlaydates }) => {
  const { isAuthed: ownerId } = useAuthContext();
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    const fetchDogs = async () => {
      const response = await fetch(`/dogs?owner_id=${ownerId}`);
      const data = await response.json();
      setDogs(data);
    };

    fetchDogs();
  }, [ownerId]);

  const [formData, setFormData] = useState({
    note: "",
    playdate_id: playdate.id,
    dog_id: "",
  });

  const handleSubmit = async () => {
    const response = await fetch(`/rsvps`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const rsvp = await response.json();

    if (rsvp.error && rsvp.error.length > 0) {
      alert(rsvp.error.join(", "));
      return;
    }

    setFormData({
      note: "",
      playdate_id: playdate.id,
      dog_id: "",
    });

    setPlaydates((playdates) => {
      const editedPlaydate = playdates.find((p) => p.id === playdate.id);
      if (editedPlaydate) {
        editedPlaydate.dogs.push(rsvp.dog);
      }

      return [...playdates];
    });
  };

  const myDogs = dogs.filter(
    (dog) => !playdate.dogs.some((existingDog) => existingDog.id === dog.id)
  );

  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        border: "2px solid #a6a6a6",
        padding: "2rem",
        marginBottom: "1rem",
        borderRadius: 10,
        backgroundColor: "#D6D6D6",
      }}
    >
      <Grid container>
        <Grid item>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PersonIcon sx={{ color: "#D09D7C" }} />
            <Typography
              variant="h6"
              color="#725A56"
              sx={{ marginLeft: "0.5rem" }}
            >
              <strong> {playdate.owner.username} </strong>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CalendarMonthIcon sx={{ color: "#D09D7C" }} />
            <Typography
              variant="h6"
              color="#725A56"
              sx={{ marginLeft: "0.5rem" }}
            >
              {new Date(playdate.date).toLocaleDateString()}
            </Typography>
          </Box>
        </Grid>
        <Grid item sx={{ marginLeft: "3rem" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LocationOnIcon sx={{ color: "#D09D7C" }} />
            <Typography
              variant="h6"
              color="#725A56"
              sx={{ marginLeft: "0.5rem" }}
            >
              {playdate.location}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccessTimeIcon sx={{ color: "#D09D7C" }} />
            <Typography
              variant="h6"
              color="#725A56"
              sx={{ marginLeft: "0.5rem" }}
            >
              {moment(playdate.time).utc().format("h:mm A")}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <GavelIcon sx={{ color: "#D09D7C" }} />

        <Typography variant="h6" color="#725A56" sx={{ marginLeft: "1rem" }}>
          {playdate.age_limit ? `Age: ${playdate.age_limit}` : "None"}
        </Typography>

        <Typography variant="h6" color="#725A56" sx={{ marginLeft: "1rem" }}>
          {playdate.size_limit ? `Size: ${playdate.size_limit}` : "None"}
        </Typography>
        <Typography variant="h6" color="#725A56" sx={{ marginLeft: "1rem" }}>
          Dogs: {playdate.playdate_size_limit}
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        {playdate.dogs.map((dog) => (
          <Grid item key={dog.id}>
            <DogList dog={dog} />
          </Grid>
        ))}
      </Grid>

      <Grid container sx={{ marginTop: "2rem", display: "flex" }}>
        <FormControl
          variant="filled"
          sx={{ width: "8rem", ...commonStyle, marginRight: "1rem" }}
        >
          <InputLabel id="demo-simple-select-filled-label">
            Select a Pup
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={formData.dog_id}
            onChange={(e) =>
              setFormData({
                ...formData,
                dog_id: e.target.value,
              })
            }
          >
            {myDogs.length === 0 && (
              <MenuItem value="">You're already signed up!</MenuItem>
            )}
            {myDogs.map((dog) => (
              <MenuItem value={dog.id}>{dog.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          id="outlined-multiline-flexible"
          variant="filled"
          label="Leave a note!"
          value={formData.note}
          onChange={(e) =>
            setFormData({
              ...formData,
              note: e.target.value,
            })
          }
          placeholder=""
          borderBottom="none"
          sx={{
            ...commonStyle,
            marginRight: "1rem",
            width: "12rem",
          }}
        />
        <Button
          size="small"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#D09D7C",
            color: "#FFFFFF",
            width: "8rem",
            borderRadius: 10,
          }}
        >
          Join Playdate
        </Button>
      </Grid>
    </Grid>
  );
};

export default DogPlaydates;

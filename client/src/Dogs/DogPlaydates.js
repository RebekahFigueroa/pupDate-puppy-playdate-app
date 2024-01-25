import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
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
import React from "react";
import DogList from "./DogList";

const DogPlaydates = () => {
  const commonStyle = {
    "& .MuiFilledInput-root": {
      borderRadius: "100px",
      backgroundColor: "#FFFFFF",
      border: "none",
    },
    "& .MuiFilledInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInputLabel-filled": {
      transform: "translate(12px, 18px) scale(1)",
    },
  };

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
              <strong> SarahLovesMaxine </strong>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CalendarMonthIcon sx={{ color: "#D09D7C" }} />
            <Typography
              variant="h6"
              color="#725A56"
              sx={{ marginLeft: "0.5rem" }}
            >
              January 27th, 2024
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
              Green Dog Park
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccessTimeIcon sx={{ color: "#D09D7C" }} />
            <Typography
              variant="h6"
              color="#725A56"
              sx={{ marginLeft: "0.5rem" }}
            >
              9:30 AM
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <DogList />
        <DogList />
        <DogList />
        <DogList />
        <DogList />
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
            value="{age}"
            onChange="{handleChange}"
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value="Maxine"> Maxine </MenuItem>
            <MenuItem value="Greg"> Greg</MenuItem>
            <MenuItem value="Twix"> Twix</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-multiline-flexible"
          variant="filled"
          label="Leave a note!"
          value=""
          onChange="{handleTitleChange}"
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
          // onClick={handleClickOpenCreateDog}
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

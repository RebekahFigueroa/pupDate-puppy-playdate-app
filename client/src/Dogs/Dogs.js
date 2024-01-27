import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../NavBar and Footer/Footer";
import NavBar from "../NavBar and Footer/NavBar";
import DogCard from "./DogCard";
import image from "./googleMaps.png";

const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    const fetchDogs = async () => {
      const response = await fetch(`/dogs`);
      const data = await response.json();
      setDogs(data);
    };

    fetchDogs();
  }, []);

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

  return (
    <>
      <NavBar />
      <Grid container justifyContent="center" backgroundColor="#E9EBF1">
        <Grid
          container
          justifyContent="center"
          sx={{
            display: "flex",
            backgroundColor: "#CEC8B1",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <FormControl
            variant="filled"
            sx={{ width: "10rem", ...commonStyle, marginRight: "2rem" }}
          >
            <InputLabel id="demo-simple-select-filled-label">Size</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value=""
              onChange="{handleChange}"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="xs">xs (2-10 lbs)</MenuItem>
              <MenuItem value="small">small (10- 20 lbs)</MenuItem>
              <MenuItem value="medium">medium (21-50 lbs)</MenuItem>
              <MenuItem value="large">xs (50-80lbs)</MenuItem>
              <MenuItem value="xl">xs (&gt;80 lbs)</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="filled"
            sx={{ width: "10rem", ...commonStyle, marginRight: "2rem" }}
          >
            <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value=""
              onChange="{handleChange}"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="Puppy"> Puppy (&lt;1 year old) </MenuItem>
              <MenuItem value="Adult"> Adult (1-8 years old)</MenuItem>
              <MenuItem value="Senior"> Senior (&gt;8 years old) </MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-multiline-flexible"
            variant="filled"
            label="Zipcode"
            value=""
            onChange="{handleTitleChange}"
            placeholder=""
            sx={{
              ...commonStyle,
              marginRight: "2rem",
            }}
          />
          <TextField
            id="outlined-multiline-flexible"
            variant="filled"
            label="Search"
            value=""
            onChange="{handleTitleChange}"
            placeholder=""
            sx={{
              ...commonStyle,
              marginRight: "2rem",
              width: "30rem",
            }}
          />

          <Button
            size="small"
            // onClick={handleClickOpenCreateDog}
            sx={{
              backgroundColor: "#D09D7C",
              color: "#FFFFFF",
              width: "8rem",
              height: "3rem",
              borderRadius: 10,
            }}
          >
            Filter
          </Button>
        </Grid>
        <Grid container>
          <Grid
            container
            spacing={2}
            xs={9}
            sx={{
              marginTop: "3rem",
              alignItems: "center",
              justifyContent: "center",
              overflowY: "auto",
              maxHeight: "75vh",
            }}
          >
            {dogs.map((dog) => (
              <Grid item key={dog.id}>
                <DogCard dog={dog} />
              </Grid>
            ))}
          </Grid>
          <Grid item xs={3} sx={{ height: "80vh" }}>
            <Box
              component={"img"}
              src={image}
              alt="google maps"
              sx={{ height: "80vh", width: "100%", objectFit: "cover" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Dogs;

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Footer from "../NavBar and Footer/Footer";
import NavBar from "../NavBar and Footer/NavBar";
import DogCard from "./DogCard";

const Dogs = () => {
  const [openCreateDog, setOpenCreateDog] = useState(false);

  const handleClickOpenCreateDog = () => {
    setOpenCreateDog(true);
  };
  const handleCloseCreateDog = () => {
    setOpenCreateDog(false);
  };
  return (
    <>
      <NavBar />
      <Grid container justifyContent="center" backgroundColor="#E9EBF1">
        <Typography gutterBottom variant="h1" component="div" color={"#D09D7C"}>
          <strong> Your Pups </strong>
        </Typography>
        <Grid container justifyContent="center">
          <Button
            size="large"
            onClick={handleClickOpenCreateDog}
            sx={{
              backgroundColor: "#D09D7C",
              color: "#FFFFFF",
              width: "20%",
              borderRadius: 10,
            }}
          >
            Add a Pup
          </Button>
          <Dialog
            closeButton
            open={openCreateDog}
            onClose={handleCloseCreateDog}
          >
            <DialogTitle
              variant="h2"
              color={"#90AD67"}
              sx={{
                backgroundColor: "#F0E6D2",
                textAlign: "center",
              }}
            >
              <strong>Add a Pup</strong>
            </DialogTitle>
            <DialogContent
              sx={{
                backgroundColor: "#F0E6D2",
              }}
            >
              <Grid container justifyContent="center">
                <Grid item>
                  <TextField
                    sx={{
                      marginBottom: "2rem",
                      marginTop: "1rem",
                      width: "27rem",
                      marginRight: "2rem",
                      marginLeft: "2rem",
                    }}
                    id="outlined-multiline-flexible"
                    variant="filled"
                    label="Name"
                    value=""
                    onChange="{handleTitleChange}"
                    placeholder=""
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                  <TextField
                    sx={{
                      marginBottom: "2rem",
                      marginTop: "1rem",
                      width: "17.5rem",
                    }}
                    id="outlined-multiline-flexible"
                    variant="filled"
                    label="image"
                    value=""
                    onChange="{handleTitleChange}"
                    placeholder=""
                  />
                </Grid>
                <Grid item>
                  <Button
                    onClick="{handleSubmit}"
                    size="large"
                    sx={{
                      backgroundColor: "#D09D7C",
                      color: "#FFFFFF",
                      marginTop: "1.5rem",
                      width: "100%",
                      borderRadius: 10,
                    }}
                  >
                    Upload Image
                  </Button>
                </Grid>
              </Grid>

              <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                  <TextField
                    sx={{
                      marginBottom: "2rem",
                      marginTop: "1rem",
                      width: "27rem",
                    }}
                    id="outlined-multiline-flexible"
                    variant="filled"
                    label="Breed"
                    value=""
                    onChange="{handleTitleChange}"
                    placeholder=""
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                  <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-filled-label">
                      Size
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value="{age}"
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
                </Grid>
                <Grid item>
                  <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-filled-label">
                      Age
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value="{age}"
                      onChange="{handleChange}"
                    >
                      <MenuItem value=""></MenuItem>
                      <MenuItem value="Puppy">
                        {" "}
                        Puppy (&lt;1 year old){" "}
                      </MenuItem>
                      <MenuItem value="Adult"> Adult (1-8 years old)</MenuItem>
                      <MenuItem value="Senior">
                        {" "}
                        Senior (&gt;8 years old){" "}
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-filled-label">
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value="{age}"
                      onChange="{handleChange}"
                    >
                      <MenuItem value=""></MenuItem>
                      <MenuItem value="male"> Male </MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                  <TextField
                    sx={{
                      marginBottom: "2rem",
                      marginTop: "1rem",
                      width: "27rem",
                    }}
                    id="outlined-multiline-flexible"
                    variant="filled"
                    multiline
                    rows={3}
                    label="About"
                    value=""
                    onChange="{handleTitleChange}"
                    placeholder=""
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions
              sx={{
                backgroundColor: "#F0E6D2",
              }}
            >
              <Grid container justifyContent="center">
                <Button
                  onClick="{handleSubmit}"
                  size="large"
                  sx={{
                    backgroundColor: "#D09D7C",
                    color: "#FFFFFF",
                    marginBottom: "2rem",
                    width: "50%",
                    borderRadius: 10,
                  }}
                >
                  Sign Up
                </Button>
              </Grid>
            </DialogActions>
          </Dialog>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: "3rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item>
            <DogCard />
          </Grid>
          <Grid item>
            <DogCard />
          </Grid>
          <Grid item>
            <DogCard />
          </Grid>
          <Grid item>
            <DogCard />
          </Grid>
          <Grid item>
            <DogCard />
          </Grid>
          <Grid item>
            <DogCard />
          </Grid>
          <Grid item>
            <DogCard />
          </Grid>
          <Grid item>
            <DogCard />
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Dogs;

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

import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import Footer from "../NavBar and Footer/Footer";
import NavBar from "../NavBar and Footer/NavBar";
import PlaydateCard from "./PlaydateCard";
import PlaydateCardOwner from "./PlaydateCardOwner";

const Home = () => {
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

  const [openCreatePlaydate, setOpenCreatePlaydate] = useState(false);

  const handleClickOpenCreatePlaydate = () => {
    setOpenCreatePlaydate(true);
  };
  const handleCloseCreatePlaydate = () => {
    setOpenCreatePlaydate(false);
  };

  return (
    <>
      <NavBar />

      <Grid container justifyContent="center" backgroundColor="#E9EBF1">
        <Typography gutterBottom variant="h1" component="div" color={"#D09D7C"}>
          <strong> Your Playdates </strong>
        </Typography>
        <Grid container justifyContent="center">
          <Button
            size="large"
            onClick={handleClickOpenCreatePlaydate}
            sx={{
              backgroundColor: "#D09D7C",
              color: "#FFFFFF",
              width: "20%",
              borderRadius: 10,
            }}
          >
            Add a Playdate
          </Button>
          <Dialog
            closeButton
            open={openCreatePlaydate}
            onClose={handleCloseCreatePlaydate}
          >
            <DialogTitle
              variant="h2"
              color={"#90AD67"}
              sx={{
                backgroundColor: "#F0E6D2",
                textAlign: "center",
              }}
            >
              <strong>Create A Playdate</strong>
            </DialogTitle>
            <DialogContent
              sx={{
                backgroundColor: "#F0E6D2",
              }}
            >
              <Grid container justifyContent="center">
                <Grid item>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Select Date"
                      sx={{
                        borderRadius: "100px",
                        backgroundColor: "#FFFFFF",
                        border: "none",
                        marginRight: "2rem",
                        "& .MuiTextField-root .MuiFilledInput-root": {
                          border: "none",
                        },
                        "& .MuiInputLabel-filled": {
                          transform: "translate(12px, 18px) scale(1)",
                        },
                        "& fieldset": {
                          border: "none",
                        },
                      }}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      label="Select Time"
                      sx={{
                        borderRadius: "100px",
                        backgroundColor: "#FFFFFF",
                        border: "none",
                        "& .MuiTextField-root .MuiFilledInput-root": {
                          border: "none",
                        },
                        "& .MuiInputLabel-filled": {
                          transform: "translate(12px, 18px) scale(1)",
                        },
                        "& fieldset": {
                          border: "none",
                        },
                      }}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                <Grid item>
                  <TextField
                    sx={{
                      marginBottom: "2rem",
                      marginTop: "1rem",
                      width: "32rem",
                      marginRight: "2rem",
                      marginLeft: "2rem",
                      ...commonStyle,
                    }}
                    id="outlined-multiline-flexible"
                    variant="filled"
                    label="Location"
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
                      width: "10rem",
                      ...commonStyle,
                    }}
                    id="outlined-multiline-flexible"
                    variant="filled"
                    label="Number of Dogs"
                    value=""
                    onChange="{handleTitleChange}"
                    placeholder=""
                  />
                </Grid>
                <Grid item>
                  <FormControl
                    variant="filled"
                    sx={{ minWidth: 120, ...commonStyle }}
                  >
                    <InputLabel id="demo-simple-select-filled-label">
                      Size Limit
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
                  <FormControl
                    variant="filled"
                    sx={{ minWidth: 120, ...commonStyle }}
                  >
                    <InputLabel id="demo-simple-select-filled-label">
                      Age Limit
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
                  Create Playdate
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
            <PlaydateCard />
            <PlaydateCardOwner />
            <PlaydateCard />
            <PlaydateCard />
            <PlaydateCard />
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
};

export default Home;

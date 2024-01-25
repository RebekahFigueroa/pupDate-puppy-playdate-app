import {
  Box,
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

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import React, { useState } from "react";
import Footer from "../NavBar and Footer/Footer";
import NavBar from "../NavBar and Footer/NavBar";
import PlaydateList from "./PlaydateList";
import image from "./googleMaps.png";

const Playdates = () => {
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
          <Grid container justifyContent="center" sx={{ paddingLeft: "10rem" }}>
            <Grid item xs={7} justifyContent="center">
              <FormControl
                variant="filled"
                sx={{ width: "10rem", ...commonStyle, marginRight: "2rem" }}
              >
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

              <FormControl
                variant="filled"
                sx={{ width: "10rem", ...commonStyle, marginRight: "2rem" }}
              >
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
            </Grid>
            <Grid item xs={5} justifyContent="center">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h4"
                  color="#D09D7C"
                  sx={{ marginLeft: "0.5rem" }}
                >
                  <strong> Don't see a playdate you like? </strong>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h6"
                  color="#725A56"
                  sx={{ marginLeft: "0.5rem" }}
                >
                  <strong> Make one! </strong>
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={7}
              justifyContent="center"
              sx={{ marginTop: "1rem" }}
            >
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
            <Grid item xs={5} justifyContent="center">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  size="small"
                  onClick={handleClickOpenCreatePlaydate}
                  sx={{
                    backgroundColor: "#D09D7C",
                    color: "#FFFFFF",
                    width: "15rem",
                    height: "3rem",
                    borderRadius: 10,
                  }}
                >
                  Create a Playdate
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
                              "& .MuiTextField-root .MuiFilledInput-root": {
                                border: "none",
                              },
                              "& .MuiInputLabel-filled": {
                                transform: "translate(12px, 18px) scale(1)",
                              },
                              marginRight: "2rem",
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
                            <MenuItem value="small">
                              small (10- 20 lbs)
                            </MenuItem>
                            <MenuItem value="medium">
                              medium (21-50 lbs)
                            </MenuItem>
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
                            <MenuItem value="Adult">
                              {" "}
                              Adult (1-8 years old)
                            </MenuItem>
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
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            container
            xs={7}
            sx={{
              alignItems: "center",
              justifyContent: "center",
              overflowY: "auto",
              maxHeight: "80vh",
            }}
          >
            <Grid item>
              <PlaydateList />
              <PlaydateList />
              <PlaydateList />
              <PlaydateList />
              <PlaydateList />
              <PlaydateList />
            </Grid>
          </Grid>
          <Grid item xs={5} sx={{ height: "80vh" }}>
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

export default Playdates;

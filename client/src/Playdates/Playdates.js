import {
  Box,
  Button,
  CircularProgress,
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
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import Footer from "../NavBar and Footer/Footer";
import NavBar from "../NavBar and Footer/NavBar";
import { useAuthContext } from "../contexts/AuthContext";
import PlaydateList from "./PlaydateList";

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

const Playdates = () => {
  const { isAuthed: ownerId } = useAuthContext();
  const [dogs, setDogs] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchDogs = async () => {
      const response = await fetch(`/dogs?owner_id=${ownerId}`);
      const data = await response.json();
      setDogs(data);
      setIsLoading(false);
    };

    fetchDogs();
  }, [ownerId]);

  const [openCreatePlaydate, setOpenCreatePlaydate] = useState(false);

  const handleClickOpenCreatePlaydate = () => {
    setOpenCreatePlaydate(true);
  };
  const handleCloseCreatePlaydate = () => {
    setOpenCreatePlaydate(false);
  };

  const [playdates, setPlaydates] = useState([]);
  useEffect(() => {
    const fetchPlaydates = async () => {
      const response = await fetch(`/playdates`);
      const data = await response.json();
      setPlaydates(data);
    };

    fetchPlaydates();
  }, []);

  const [formData, setFormData] = useState({
    location: "",
    date: "",
    time: "",
    size_limit: "",
    age_limit: "",
    playdate_size_limit: "",
    owner_id: ownerId,
  });

  const handleLocationChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      location: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date: date.toISOString(),
    });
  };

  const handleTimeChange = (time) => {
    setFormData({
      ...formData,
      time,
    });
  };

  const handleSizeChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      size_limit: value,
    });
  };

  const handleAgeChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      age_limit: value,
    });
  };

  const handlePlaydateSizeChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      playdate_size_limit: value,
    });
  };

  const handleSubmit = async () => {
    const response = await fetch(`/playdates`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const playdate = await response.json();

    if (!playdate.errors) {
      setPlaydates((playdates) => [...playdates, playdate]);
      setFormData({
        location: "",
        date: "",
        time: "",
        size_limit: "",
        age_limit: "",
        playdate_size_limit: "",
        owner_id: ownerId,
      });
      handleCloseCreatePlaydate();
    } else {
      alert(playdate.errors.join(", "));
    }
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
          <Grid item justifyContent="center">
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
        </Grid>
        <Grid
          item
          xs={12}
          justifyContent="center"
          sx={{
            backgroundColor: "#CEC8B1",
            paddingBottom: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#CEC8B1",
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
                        value={formData.date}
                        onChange={handleDateChange}
                        minDate={dayjs()}
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
                  <Grid item>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        label="Select Time"
                        value={formData.time}
                        onChange={handleTimeChange}
                        sx={{
                          borderRadius: "100px",
                          marginLeft: "1rem",
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
                      value={formData.location}
                      onChange={handleLocationChange}
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
                      value={formData.playdate_size_limit}
                      onChange={handlePlaydateSizeChange}
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
                        value={formData.size}
                        onChange={handleSizeChange}
                      >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value="None">No size limit</MenuItem>
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
                        value={formData.age}
                        onChange={handleAgeChange}
                      >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value="None"> No age limit </MenuItem>
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
                  justifyContent: "center",
                }}
              >
                <Button
                  onClick={handleSubmit}
                  size="large"
                  sx={{
                    backgroundColor: "#D09D7C",
                    width: "50%",
                    marginBottom: "2rem",
                    color: "#FFFFFF",
                    borderRadius: 10,
                  }}
                >
                  Create Playdate
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isLoading && (
            <Grid container justifyContent="center" mt={1}>
              <CircularProgress />
            </Grid>
          )}
          <Grid item>
            {playdates.map((playdate) => (
              <Grid item key={playdate.id}>
                <PlaydateList
                  dogs={dogs}
                  playdate={playdate}
                  setPlaydates={setPlaydates}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
};

export default Playdates;

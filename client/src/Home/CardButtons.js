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
} from "@mui/material";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";

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

const CardButtons = ({
  playdate,
  onDeleteRsvp,
  onDeletePlaydate,
  onEditPlaydate,
}) => {
  const { isAuthed: ownerId } = useAuthContext();
  const isOwner = playdate.owner_id === ownerId;

  const deleteRsvps = async () => {
    try {
      await fetch(`/rsvps?playdate_id=${playdate.id}`, {
        method: "DELETE",
      });
      onDeleteRsvp(playdate.id);
    } catch (error) {
      console.error("Error deleting RSVPs:", error);
    }
  };

  const handleDeletePlaydate = async () => {
    try {
      await fetch(`/playdates/${playdate.id}`, {
        method: "DELETE",
      });
      onDeletePlaydate(playdate.id);
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const [formData, setFormData] = useState({
    location: playdate.location,
    date: new Date(playdate.date),
    time: playdate.time,
    size_limit: playdate.size_limit,
    age_limit: playdate.age_limit,
    playdate_size_limit: playdate.playdate_size_limit,
    owner_id: ownerId,
  });

  const [openEditPlaydate, setOpenEditPlaydate] = useState(false);

  const handleClickOpenEditPlaydate = () => {
    setOpenEditPlaydate(true);
  };
  const handleCloseEditPlaydate = () => {
    setOpenEditPlaydate(false);
  };

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
      time: time.toDate().toLocaleTimeString(),
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

  const handleSubmitEditPlaydate = async () => {
    const response = await fetch(`/playdates/${playdate.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        owner_id: ownerId,
      }),
    });
    const playdateEdit = await response.json();
    if (!playdateEdit.error) {
      onEditPlaydate(playdateEdit);
      handleCloseEditPlaydate();
    } else {
      alert(playdateEdit.errors.join(", "));
    }
  };

  return (
    <Grid container sx={{ marginTop: "2rem", display: "flex" }}>
      {isOwner ? (
        <>
          <Button
            size="small"
            sx={{
              backgroundColor: "#D09D7C",
              color: "#FFFFFF",
              width: "8rem",
              borderRadius: 10,
              marginRight: "1rem",
              height: "3.5rem",
            }}
            onClick={handleClickOpenEditPlaydate}
          >
            Edit Playdate
          </Button>
          <Dialog
            closeButton
            open={openEditPlaydate}
            onClose={handleCloseEditPlaydate}
          >
            <DialogTitle
              variant="h2"
              color={"#90AD67"}
              sx={{
                backgroundColor: "#F0E6D2",
                textAlign: "center",
              }}
            >
              <strong>Edit A Playdate</strong>
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
                      value={dayjs(formData.date)}
                      onChange={handleDateChange}
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
                      value={dayjs(
                        new Date().toDateString() + " " + formData.time
                      )} //formData.time}
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
                      value={formData.size_limit}
                      onChange={handleSizeChange}
                    >
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
                      value={formData.age_limit}
                      onChange={handleAgeChange}
                    >
                      <MenuItem value="None"> No age limit </MenuItem>
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
                justifyContent: "center",
              }}
            >
              <Button
                onClick={handleSubmitEditPlaydate}
                size="large"
                sx={{
                  backgroundColor: "#D09D7C",
                  color: "#FFFFFF",
                  marginBottom: "2rem",
                  width: "50%",
                  borderRadius: 10,
                }}
              >
                Edit Playdate
              </Button>
            </DialogActions>
          </Dialog>
          <Button
            size="small"
            onClick={handleDeletePlaydate}
            sx={{
              backgroundColor: "#D09D7C",
              color: "#FFFFFF",
              width: "8rem",
              borderRadius: 10,
              height: "3.5rem",
            }}
          >
            Delete Playdate
          </Button>
        </>
      ) : (
        <>
          <Button
            size="small"
            sx={{
              backgroundColor: "#D09D7C",
              color: "#FFFFFF",
              width: "8rem",
              borderRadius: 10,
              height: "3.5rem",
            }}
            onClick={deleteRsvps}
          >
            Delete RSVP
          </Button>
        </>
      )}
    </Grid>
  );
};

export default CardButtons;

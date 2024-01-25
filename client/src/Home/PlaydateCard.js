import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddCommentIcon from "@mui/icons-material/AddComment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import DogList from "../Dogs/DogList";
import ChatCard from "./ChatCard";

const PlaydateCard = () => {
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
        width: "90rem",
      }}
    >
      <Grid item xs={5}>
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
        <Grid container sx={{ marginTop: "2rem" }}>
          <DogList />
          <DogList />
          <DogList />
          <DogList />
          <DogList />
        </Grid>
        <Grid container sx={{ marginTop: "2rem", display: "flex" }}>
          <Button
            size="small"
            // onClick={handleClickOpenCreateDog}
            sx={{
              backgroundColor: "#D09D7C",
              color: "#FFFFFF",
              width: "8rem",
              height: "2.5rem",
              borderRadius: 10,
              marginRight: "1rem",
            }}
          >
            Add Pup
          </Button>
          <Button
            size="small"
            // onClick={handleClickOpenCreateDog}
            sx={{
              backgroundColor: "#D09D7C",
              color: "#FFFFFF",
              width: "8rem",
              borderRadius: 10,
              marginRight: "1rem",
            }}
          >
            Edit RSVP
          </Button>
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
            Delete RSVP
          </Button>
        </Grid>
      </Grid>

      <Grid item xs={7} sx={{ overflow: "auto", maxHeight: "17rem" }}>
        <Grid container>
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <Grid item>
            <Grid container alignItems="center" sx={{ marginTop: 2 }}>
              <Box
                sx={{
                  width: "4rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AddCommentIcon
                  sx={{
                    color: "#D09D7C",
                    fontSize: 30,
                  }}
                />
              </Box>
              <TextField
                sx={{
                  width: "30rem",
                  ...commonStyle,
                }}
                id="outlined-multiline-flexible"
                variant="filled"
                label="Add a comment"
                value=""
                onChange="{handleTitleChange}"
                placeholder=""
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PlaydateCard;

import EmailIcon from "@mui/icons-material/Email";
import { Grid, Typography } from "@mui/material";
import React from "react";

const RsvpCommentCard = ({ rsvp, onDelete }) => {
  return (
    <Grid container alignItems="center" sx={{ marginTop: "1rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          maxWidth: "80%",
        }}
      >
        <Typography variant="h6" color="#725A56" sx={{ marginLeft: "0.5rem" }}>
          <strong> {rsvp.owner.username} </strong>{" "}
          <EmailIcon sx={{ color: "#D09D7C" }} />
        </Typography>
        <Typography
          variant="body1"
          color="#725A56"
          sx={{
            backgroundColor: "#fff",
            borderRadius: 10,
            padding: "1rem",
            maxWidth: "100%",
          }}
        >
          <strong> {rsvp.note} </strong>
        </Typography>
      </div>
    </Grid>
  );
};

export default RsvpCommentCard;

import { Button, Grid } from "@mui/material";
import React from "react";
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

const CardButtons = ({ playdate, onDeleteRsvp, onDeletePlaydate }) => {
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
          >
            Edit Playdate
          </Button>
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

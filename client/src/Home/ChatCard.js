import DeleteIcon from "@mui/icons-material/Delete";
import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";

const ChatCard = ({ comment, onDelete }) => {
  const handleDelete = async () => {
    try {
      await fetch(`/comments/${comment.id}`, {
        method: "DELETE",
      });
      onDelete(comment.id);
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

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
          <strong> {comment.owner.username} </strong>
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
          <strong> {comment.text} </strong>
        </Typography>
      </div>

      <IconButton
        onClick={handleDelete}
        sx={{
          color: "#D09D7C",
          fontSize: 30,
        }}
      >
        <DeleteIcon sx={{ color: "#D09D7C", marginTop: "2rem" }} />
      </IconButton>
    </Grid>
  );
};

export default ChatCard;

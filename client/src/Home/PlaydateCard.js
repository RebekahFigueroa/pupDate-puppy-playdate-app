import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddCommentIcon from "@mui/icons-material/AddComment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GavelIcon from "@mui/icons-material/Gavel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import DogList from "../Dogs/DogList";
import { useAuthContext } from "../contexts/AuthContext";
import CardButtons from "./CardButtons";
import ChatCard from "./ChatCard";
import RsvpCommentCard from "./RsvpCommentCard";

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

const PlaydateCard = ({ dogs, playdate, setPlaydates }) => {
  const { isAuthed: ownerId } = useAuthContext();
  const [comments, setComments] = useState([]);
  const [rsvps, setRsvps] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(`/comments?playdate_id=${playdate.id}`);
      const data = await response.json();
      setComments(data);
    };

    fetchComments();
  }, [playdate.id]);

  useEffect(() => {
    const fetchRsvps = async () => {
      const response = await fetch(`/rsvps?playdate_id=${playdate.id}`);
      const data = await response.json();
      setRsvps(data);
    };

    fetchRsvps();
  }, [playdate.id]);

  const [formData, setFormData] = useState({
    text: "",
    playdate_id: playdate.id,
    owner_id: ownerId,
  });

  const handleSubmit = async () => {
    const response = await fetch(`/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const comment = await response.json();

    if (!comment?.playdate?.id) {
      alert(comment.errors.join(", "));
      return;
    }

    setFormData({
      text: "",
      playdate_id: playdate.id,
      owner_id: ownerId,
    });

    setComments((prevComments) => [...prevComments, comment]);
  };

  const handleCommentDelete = (commentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    );
  };

  const [formDataRsvp, setFormDataRsvp] = useState({
    note: "",
    playdate_id: playdate.id,
    dog_id: "",
  });

  const handleSubmitRsvp = async () => {
    const response = await fetch(`/rsvps`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataRsvp),
    });

    const rsvp = await response.json();

    if (!rsvp?.dog?.id) {
      alert(rsvp.errors.join(", "));
      return;
    }

    setFormData({
      note: "",
      playdate_id: playdate.id,
      dog_id: "",
    });

    setPlaydates((playdates) => {
      const editedPlaydate = playdates.find((p) => p.id === playdate.id);
      if (editedPlaydate) {
        editedPlaydate.dogs.push(rsvp.dog);
      }

      return [...playdates];
    });
  };

  const myDogs = dogs.filter(
    (dog) => !playdate.dogs.some((existingDog) => existingDog.id === dog.id)
  );

  const handleDeleteRsvp = (playdateId) => {
    setPlaydates((prevPlaydates) =>
      prevPlaydates.filter((p) => p.id !== playdateId)
    );
  };

  const handleDeletePlaydate = (playdateId) => {
    setPlaydates((prevPlaydates) =>
      prevPlaydates.filter((p) => p.id !== playdateId)
    );
  };

  const handleEditPlaydate = (playdate) => {
    setPlaydates((prevPlaydates) =>
      prevPlaydates.reduce(
        (all, current) => [
          ...all,
          current.id === playdate.id ? playdate : current,
        ],
        []
      )
    );
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
                <strong> {playdate.owner.username} </strong>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CalendarMonthIcon sx={{ color: "#D09D7C" }} />
              <Typography
                variant="h6"
                color="#725A56"
                sx={{ marginLeft: "0.5rem" }}
              >
                {new Date(playdate.date).toLocaleDateString()}
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
                {playdate.location}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTimeIcon sx={{ color: "#D09D7C" }} />
              <Typography
                variant="h6"
                color="#725A56"
                sx={{ marginLeft: "0.5rem" }}
              >
                {moment(playdate.time).utc().format("h:mm A")}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <GavelIcon sx={{ color: "#D09D7C" }} />

          <Typography variant="h6" color="#725A56" sx={{ marginLeft: "1rem" }}>
            {playdate.age_limit ? `Age: ${playdate.age_limit}` : "None"}
          </Typography>

          <Typography variant="h6" color="#725A56" sx={{ marginLeft: "1rem" }}>
            {playdate.size_limit ? `Size: ${playdate.size_limit}` : "None"}
          </Typography>
          <Typography variant="h6" color="#725A56" sx={{ marginLeft: "1rem" }}>
            Dogs: {playdate.playdate_size_limit}
          </Typography>
        </Grid>
        <Grid container sx={{ marginTop: "1rem" }}>
          {playdate.dogs.map((dog) => (
            <Grid item key={dog.id}>
              <DogList dog={dog} />
            </Grid>
          ))}
        </Grid>
        <Grid container sx={{ marginTop: "2rem", display: "flex" }}>
          <FormControl
            variant="filled"
            sx={{ width: "8rem", ...commonStyle, marginRight: "1rem" }}
          >
            <InputLabel id="demo-simple-select-filled-label">
              Select a Pup
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={formData.dog_id}
              onChange={(e) =>
                setFormDataRsvp({
                  ...formDataRsvp,
                  dog_id: e.target.value,
                })
              }
            >
              {myDogs.length === 0 && (
                <MenuItem value="">You're already signed up!</MenuItem>
              )}
              {myDogs.map((dog) => (
                <MenuItem value={dog.id}>{dog.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            id="outlined-multiline-flexible"
            variant="filled"
            label="Leave a note!"
            value={formDataRsvp.note}
            onChange={(e) =>
              setFormDataRsvp({
                ...formDataRsvp,
                note: e.target.value,
              })
            }
            placeholder=""
            borderBottom="none"
            sx={{
              ...commonStyle,
              marginRight: "1rem",
              width: "15rem",
            }}
          />
          <Button
            size="small"
            onClick={handleSubmitRsvp}
            sx={{
              backgroundColor: "#D09D7C",
              color: "#FFFFFF",
              width: "8rem",
              borderRadius: 10,
            }}
          >
            Join Playdate
          </Button>
        </Grid>
        <CardButtons
          key={playdate.id}
          playdate={playdate}
          onDeleteRsvp={handleDeleteRsvp}
          onDeletePlaydate={handleDeletePlaydate}
          onEditPlaydate={handleEditPlaydate}
        />
      </Grid>

      <Grid item xs={7}>
        <Grid container>
          <Grid
            item
            sx={{ overflow: "auto", maxHeight: "20rem", width: "100%" }}
          >
            {rsvps
              .filter((rsvp) => rsvp.note.trim() !== "")
              .map((rsvp) => (
                <RsvpCommentCard key={rsvp.id} rsvp={rsvp} />
              ))}

            {comments.map((comment) => (
              <ChatCard
                key={comment.id}
                comment={comment}
                onDelete={handleCommentDelete}
              />
            ))}
          </Grid>

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
                <IconButton
                  onClick={handleSubmit}
                  sx={{
                    color: "#D09D7C",
                    fontSize: 30,
                  }}
                >
                  <AddCommentIcon
                    sx={{
                      color: "#D09D7C",
                      fontSize: 30,
                    }}
                  />
                </IconButton>
              </Box>
              <TextField
                sx={{
                  width: "30rem",
                  ...commonStyle,
                }}
                id="outlined-multiline-flexible"
                variant="filled"
                label="Add a comment"
                value={formData.text}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    text: e.target.value,
                  })
                }
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

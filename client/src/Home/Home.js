import { Grid, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import Footer from "../NavBar and Footer/Footer";
import NavBar from "../NavBar and Footer/NavBar";
import { useAuthContext } from "../contexts/AuthContext";
import PlaydateCard from "./PlaydateCard";

const Home = () => {
  const { isAuthed: ownerId } = useAuthContext();
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      const response = await fetch(`/dogs?owner_id=${ownerId}`);
      const data = await response.json();
      setDogs(data);
    };

    fetchDogs();
  }, [ownerId]);

  const [playdates, setPlaydates] = useState([]);
  useEffect(() => {
    const fetchPlaydates = async () => {
      const response = await fetch(`/playdates?owner_id=${ownerId}`);
      const data = await response.json();
      setPlaydates(data);
    };

    fetchPlaydates();
  }, []);

  return (
    <>
      <NavBar />

      <Grid container justifyContent="center" backgroundColor="#E9EBF1">
        <Typography gutterBottom variant="h1" component="div" color={"#D09D7C"}>
          <strong> Your Playdates </strong>
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item>
            {playdates.map((playdate) => (
              <Grid item key={playdate.id}>
                <PlaydateCard
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

export default Home;

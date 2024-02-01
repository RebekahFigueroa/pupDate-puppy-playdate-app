import { CircularProgress, Grid, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import Footer from "../NavBar and Footer/Footer";
import NavBar from "../NavBar and Footer/NavBar";
import { useAuthContext } from "../contexts/AuthContext";
import PlaydateCard from "./PlaydateCard";

const Home = () => {
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

  const [playdates, setPlaydates] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const fetchPlaydates = async () => {
      const response = await fetch(`/playdates?owner_id=${ownerId}`);
      const data = await response.json();
      setPlaydates(data);
      setIsLoading(false);
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
          {isLoading && (
            <Grid container justifyContent="center" mt={1}>
              <CircularProgress />
            </Grid>
          )}
          <Grid item>
            {playdates.length > 0 ? (
              // Render this if playdates array has items
              playdates.map((playdate) => (
                <Grid item key={playdate.id}>
                  <PlaydateCard
                    dogs={dogs}
                    playdate={playdate}
                    setPlaydates={setPlaydates}
                  />
                </Grid>
              ))
            ) : (
              // Render this if playdates array is empty
              <Typography gutterBottom variant="h6" color="#725A56">
                <strong>
                  Join a playdate or create your own to view playdates!
                </strong>
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
};

export default Home;

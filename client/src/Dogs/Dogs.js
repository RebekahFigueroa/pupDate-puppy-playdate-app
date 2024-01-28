import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../NavBar and Footer/Footer";
import NavBar from "../NavBar and Footer/NavBar";
import DogCard from "./DogCard";

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

const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    const fetchDogs = async () => {
      const response = await fetch(`/dogs`);
      const data = await response.json();
      setDogs(data);
    };

    fetchDogs();
  }, []);

  return (
    <>
      <NavBar />
      <Grid container justifyContent="center" backgroundColor="#E9EBF1">
        <Grid container>
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: "3rem",
              alignItems: "center",
              justifyContent: "center",
              overflowY: "auto",
              maxHeight: "75vh",
            }}
          >
            {dogs.map((dog) => (
              <Grid item key={dog.id}>
                <DogCard dog={dog} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Dogs;

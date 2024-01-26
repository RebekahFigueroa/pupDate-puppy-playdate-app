import PetsIcon from "@mui/icons-material/Pets";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
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
import React, { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";

const ProfileCard = ({ dog, setDogs }) => {
  const { isAuthed: ownerId } = useAuthContext();
  const [openEditDog, setOpenEditDog] = useState(false);

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

  const handleClickOpenEditDog = () => {
    setOpenEditDog(true);
  };
  const handleCloseEditDog = () => {
    setOpenEditDog(false);
  };

  const [formData, setFormData] = useState({
    name: dog.name,
    age: dog.age,
    breed: dog.breed,
    gender: dog.gender,
    size: dog.size,
    description: dog.description,
    image: dog.image,
  });

  const handleDogNameChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      name: value,
    });
  };

  const handleDogAgeChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      age: value,
    });
  };

  const handleDogBreedChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      breed: value,
    });
  };

  const handleDogGenderChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      gender: value,
    });
  };

  const handleDogSizeChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      size: value,
    });
  };

  const handleDogDescriptionChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      description: value,
    });
  };

  const handleDogImageChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormData({
      ...formData,
      image: value,
    });
  };

  const handleSubmit = async () => {
    const response = await fetch(`/dogs/${dog.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        ownerId,
      }),
    });
    const updatedDog = await response.json();

    if (!updatedDog.errors) {
      setDogs((dogs) =>
        dogs.reduce((array, dog) => {
          if (dog.id !== updatedDog.id) {
            array.push(dog);
          } else {
            array.push({
              ...dog,

              name: updatedDog.name,
              age: updatedDog.age,
              breed: updatedDog.breed,
              gender: updatedDog.gender,
              size: updatedDog.size,
              description: updatedDog.description,
              image: updatedDog.image,
            });
          }

          return array;
        }, [])
      );

      handleCloseEditDog();
    } else {
      alert(updatedDog.errors.join(", "));
    }
  };

  const handleDelete = () => {
    fetch(`/dogs/${dog.id}`, {
      method: "DELETE",
    }).then(() => {
      setDogs((dogs) => dogs.filter((d) => d.id !== dog.id));
    });
  };

  return (
    <Card
      sx={{
        width: "25rem",
        textAlign: "center",
        backgroundColor: "#D6D6D6",
        borderRadius: 10,
      }}
    >
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        sx={{ marginTop: "2rem", color: "#725A56" }}
      >
        <strong>{dog.name}</strong>
      </Typography>
      <CardMedia
        sx={{ height: 140, borderRadius: "100%", width: 140, margin: "auto" }}
        image={dog.image}
        title="dog picture"
      />
      <CardContent>
        <Grid container justifyContent="center" spacing={5}>
          <Grid item>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PetsIcon sx={{ color: "#D09D7C" }} />
              <Typography
                variant="h6"
                color="#725A56"
                sx={{ marginLeft: "0.5rem" }}
              >
                {dog.age}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PetsIcon sx={{ color: "#D09D7C" }} />
              <Typography
                variant="h6"
                color="#725A56"
                sx={{ marginLeft: "0.5rem" }}
              >
                {dog.gender}
              </Typography>
            </Box>
            <Grid />
          </Grid>
          <Grid item>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PetsIcon sx={{ color: "#D09D7C" }} />
              <Typography
                variant="h6"
                color="#725A56"
                sx={{ marginLeft: "0.5rem" }}
              >
                {dog.breed}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PetsIcon sx={{ color: "#D09D7C" }} />
              <Typography
                variant="h6"
                color="#725A56"
                sx={{ marginLeft: "0.5rem" }}
              >
                {dog.size}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Typography
          variant="h6"
          color="#D09D7C"
          sx={{ marginLeft: "0.5rem", marginTop: "2rem" }}
        >
          {dog.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Button
              size="large"
              onClick={handleClickOpenEditDog}
              sx={{
                backgroundColor: "#D09D7C",
                color: "#FFFFFF",
                borderRadius: 10,
                width: "10rem",
                marginBottom: "1rem",
              }}
            >
              Edit Pup Profile
            </Button>
            <Dialog closeButton open={openEditDog} onClose={handleCloseEditDog}>
              <DialogTitle
                variant="h2"
                color={"#90AD67"}
                sx={{
                  backgroundColor: "#F0E6D2",
                  textAlign: "center",
                }}
              >
                <strong>Edit a Pup</strong>
              </DialogTitle>
              <DialogContent
                sx={{
                  backgroundColor: "#F0E6D2",
                }}
              >
                <Grid container justifyContent="center">
                  <Grid item>
                    <TextField
                      sx={{
                        marginBottom: "2rem",
                        marginTop: "1rem",
                        width: "27rem",
                        marginRight: "2rem",
                        marginLeft: "2rem",
                        ...commonStyle,
                      }}
                      variant="filled"
                      label="Name"
                      value={formData.name}
                      onChange={handleDogNameChange}
                    />
                  </Grid>
                </Grid>
                <Grid container justifyContent="center" spacing={2}>
                  <Grid item>
                    <TextField
                      sx={{
                        marginBottom: "2rem",
                        marginTop: "1rem",
                        width: "17.5rem",
                        ...commonStyle,
                      }}
                      id="outlined-multiline-flexible"
                      variant="filled"
                      label="image"
                      value={formData.image}
                      onChange={handleDogImageChange}
                      placeholder="image"
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      onClick="{handleSubmit}"
                      size="large"
                      sx={{
                        backgroundColor: "#D09D7C",
                        color: "#FFFFFF",
                        marginTop: "1.5rem",
                        width: "100%",
                        borderRadius: 10,
                      }}
                    >
                      Upload Image
                    </Button>
                  </Grid>
                </Grid>

                <Grid container justifyContent="center" spacing={2}>
                  <Grid item>
                    <TextField
                      sx={{
                        marginBottom: "2rem",
                        marginTop: "1rem",
                        width: "27rem",
                        ...commonStyle,
                      }}
                      id="outlined-multiline-flexible"
                      variant="filled"
                      label="Breed"
                      value={formData.breed}
                      onChange={handleDogBreedChange}
                      placeholder="Breed"
                    />
                  </Grid>
                </Grid>
                <Grid container justifyContent="center" spacing={2}>
                  <Grid item>
                    <FormControl
                      variant="filled"
                      sx={{ m: 1, minWidth: 120, ...commonStyle }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        Size
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={formData.size}
                        onChange={handleDogSizeChange}
                      >
                        <MenuItem value=""></MenuItem>
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
                      sx={{ m: 1, minWidth: 120, ...commonStyle }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        Age
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={formData.age}
                        onChange={handleDogAgeChange}
                      >
                        <MenuItem value=""></MenuItem>
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
                  <Grid item>
                    <FormControl
                      variant="filled"
                      sx={{ m: 1, minWidth: 120, ...commonStyle }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        Gender
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={formData.gender}
                        onChange={handleDogGenderChange}
                      >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value="male"> Male </MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container justifyContent="center" spacing={2}>
                  <Grid item>
                    <TextField
                      sx={{
                        marginBottom: "2rem",
                        marginTop: "1rem",
                        width: "27rem",
                        ...commonStyle,
                        borderRadius: "1rem !important",
                      }}
                      id="outlined-multiline-flexible"
                      variant="filled"
                      multiline
                      rows={3}
                      label="About"
                      value={formData.description}
                      onChange={handleDogDescriptionChange}
                      placeholder=""
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions
                sx={{
                  backgroundColor: "#F0E6D2",
                }}
              >
                <Grid container justifyContent="center">
                  <Button
                    onClick={handleSubmit}
                    size="large"
                    sx={{
                      backgroundColor: "#D09D7C",
                      color: "#FFFFFF",
                      marginBottom: "2rem",
                      width: "50%",
                      borderRadius: 10,
                    }}
                  >
                    Update Profile
                  </Button>
                </Grid>
              </DialogActions>
            </Dialog>
          </Grid>
          <Grid item>
            <Button
              size="large"
              sx={{
                backgroundColor: "#D09D7C",
                color: "#FFFFFF",
                borderRadius: 10,
                width: "10rem",
                marginBottom: "1rem",
              }}
              onClick={handleDelete}
            >
              Delete Profile
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;

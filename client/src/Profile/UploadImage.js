import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const UploadImage = ({ setImageUpload }) => {
  const handleFileChange = async (event) => {
    try {
      const file = event.target.files[0];

      const writeUrlResponse = await fetch(
        `/upload?file_name=${file.name}&file_type=${file.type}`
      );

      const { file_name: fileName, write_url: writeUrl } =
        await writeUrlResponse.json();

      await fetch(writeUrl, {
        method: "PUT",
        headers: [["Content-Type", file.type]],
        body: file,
      });

      setImageUpload(fileName);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      component="label"
      variant="contained"
      startIcon={<CloudUploadIcon />}
      sx={{
        backgroundColor: "#D09D7C",
        color: "#FFFFFF",
        borderRadius: 10,
        width: "10rem",
        marginBottom: "1rem",
        marginTop: "1.5rem",
      }}
    >
      Upload file
      <VisuallyHiddenInput type="file" onChange={handleFileChange} />
    </Button>
  );
};

export default UploadImage;

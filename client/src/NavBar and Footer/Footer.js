import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#90AD67",
        height: "50px",
        width: "100%",
        marginTop: "2rem",
      }}
    >
      <Typography color="#FFFFFF" sx={{ marginTop: "2rem" }}>
        © 2024 pupDates. All Rights Reserved.
      </Typography>
    </div>
  );
};

export default Footer;

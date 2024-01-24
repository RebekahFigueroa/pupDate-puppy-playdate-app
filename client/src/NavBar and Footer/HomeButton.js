import PetsIcon from "@mui/icons-material/Pets";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const HomeButton = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      style={(isActive) => ({
        textDecoration: "none",
        color: isActive ? "#FFFFFF" : "inherit",
      })}
    >
      <Button
        size="large"
        sx={{
          backgroundColor: "#D09D7C",
          color: "#FFFFFF",
          borderRadius: 10,
          width: "5rem",
          marginRight: "1rem",
        }}
      >
        <PetsIcon sx={{ color: "#725A56" }} /> {label}
      </Button>
    </NavLink>
  );
};

export default HomeButton;

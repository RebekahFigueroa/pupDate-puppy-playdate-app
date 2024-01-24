import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      style={(isActive) => ({
        textDecoration: "none",
        color: isActive ? "#FFFFFF" : "inherit",
      })}
    >
      <Button color="inherit">{label}</Button>
    </NavLink>
  );
};

export default NavItem;

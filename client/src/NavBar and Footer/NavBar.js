import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";

import { useAuthContext } from "../contexts/AuthContext";
import HomeButton from "./HomeButton";
import Logout from "./Logout";
import NavItem from "./NavItem";

const NavBar = () => {
  const { hasDogs } = useAuthContext();

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#90AD67" }}>
      <Toolbar>
        <HomeButton to={hasDogs ? "/home" : "/profile"} label="" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          pupDates
        </Typography>

        <Stack direction="row" spacing={2} mr={2}>
          {hasDogs ? (
            <>
              <NavItem to="/playdates" label="Playdates" />
              <NavItem to="/dogs" label="Dogs" />
            </>
          ) : null}
          <NavItem to="/profile" label="Profile" />
        </Stack>

        <Logout />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";

import HomeButton from "./HomeButton";
import Logout from "./Logout";
import NavItem from "./NavItem";

const NavBar = () => {
  // const { isAuthed } = useAuthContext();
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#90AD67" }}>
      <Toolbar>
        <HomeButton to="/home" label="" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          pupDates
        </Typography>
        {/* {isAuthed && ( */}
        <Stack direction="row" spacing={2} mr={2}>
          <NavItem to="/playdates" label="Playdates" />
          <NavItem to="/dogs" label="Dogs" />
          <NavItem to="/profile" label="Profile" />
        </Stack>
        {/* )} */}
        <Logout />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

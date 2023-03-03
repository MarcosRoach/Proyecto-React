import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { Fragment } from "react";

const NavList = ({ navLinks, disp }) => {
  // Botones Nav
  const navItems = navLinks.map((item) => (
    <ListItemButton component="a" href={item.path} key={item.titulo}>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText>{item.titulo}</ListItemText>
    </ListItemButton>
  ));
  // Botones Nav

  return (
    <Box
      sx={{
        with: 250,
      }}
    >
      <nav>
        <Box sx={{ display: disp }}>{navItems}</Box>
      </nav>
    </Box>
  );
};

export default NavList;

import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { navLinks, userData } from "../../constants/constants";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const MyAppBar = () => {
  return (
    <AppBar
      position='static'
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        {navLinks.map((link) => (
          <Button sx={{ my: 2, color: "white", display: "block" }} key={link}>
            {link}
          </Button>
        ))}
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <AccountCircleIcon
          sx={{ fontSize: "36px", marginRight: "5px" }}
        ></AccountCircleIcon>
        <Typography variant='h6'>{`${userData.status} ${userData.name}`}</Typography>
      </Box>
    </AppBar>
  );
};

export default MyAppBar;

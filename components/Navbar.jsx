import  {Search as SearchIcon, Menu as MenuIcon } from "@mui/icons-material/";
import { AppBar, Container, styled, Box, Button, Stack, IconButton } from "@mui/material";
import React, { useState } from "react";
import LoginRegisterModal from "./LoginRegisterModal";
const Menu = styled(Box)({
  borderBottom: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 2,
});
const MenuItem = styled(Button)({
  fontWeight: 900,
  fontSize: "12px",
  marginRight: "12px",
});
const Logo = styled("div")({
  fontWeight: 900,
  color: "black",
  fontSize: "34px",
  cursor: "pointer",
});
const LogoDesc = styled(Box)({
  fontWeight: 600,
  color: "black",
  fontSize: "12px",
  textTransform: "capitalize",
  // cursor:'pointer'
});
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
      <Container>
        <AppBar position="static" color="transparent" elevation="0">
          <Menu>
            <Stack direction={"row"} flex={1}>
              <Logo>CondingsNotes</Logo>
              <Stack direction={"column"} sx={{ marginLeft: 1, marginTop: 1 }}>
                <LogoDesc >
                  The Blog
                </LogoDesc>
                <LogoDesc>of CondingsTrade</LogoDesc>
              </Stack>
            </Stack>
            <Stack direction={"row"} m={2}> <MenuItem sx={{fontSize:"15px"}} color="inherit">Books</MenuItem>
            <MenuItem sx={{fontSize:"15px"}} color="inherit">Video</MenuItem>
            <MenuItem sx={{fontSize:"15px"}} color="inherit">Year In Review</MenuItem>
            <Button
            onClick={handleOpen}
              color="inherit"
              sx={{
                color: "#0049fb",
                border: "none",
                fontWeight: "bold",
              }}
            >
          Login
            </Button>
            <Button
               onClick={handleOpen}
              color="inherit"
              sx={{
                color: "#0049fb",
                border: "1px solid #0049fb",
                fontWeight: "bold",
              }}
            >
              Sign Up
            </Button>
            <Button
              color="inherit"
              sx={{
                color: "#0049fb",
                border: "1px solid #0049fb",
                fontWeight: "bold",
              }}
            >
            Create
            </Button></Stack>
           
            <IconButton size="small" edge='start' color="inherit">
                <SearchIcon sx={{fontSize: 35}}/>
            </IconButton>
            <IconButton size="small" edge='start' color="inherit">
                <MenuIcon sx={{fontSize: 39}}/>
            </IconButton>
          </Menu>
        </AppBar>
        <LoginRegisterModal open={open} handleClose={handleClose} ha/>
      </Container>
    </>
  );
};

export default Navbar;

import { Search as SearchIcon, Menu as MenuIcon } from "@mui/icons-material/";
import {
  AppBar,
  Container,
  styled,
  Box,
  Button,
  Stack,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fade from "@mui/material/Fade";
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

// const LogoDesc = styled(Box)({
//   fontWeight: 600,
//   color: "black",
//   fontSize: "12px",
//   textTransform: "capitalize",
//   // cursor:'pointer'
// });
function ScrollTop(props) {
  console.log("props", props);
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold: 20, //page nice gele ai function call hoibo ar NavbarTop Component Navbar componet er upore chole ashbo note: 20 mane kintu windoTop size
  });
  return (
    <Fade in={trigger}>
      <Box role={"presentation"}>{children}</Box>
    </Fade>
  );
}
const NavbarTop = (props) => {
  return (
    <>
      <ScrollTop {...props}>
        <AppBar
          sx={{
            position: "fixed",
            top: "0px",
            width: "100%",
            backgroundColor: "black !important",
          }}
        >
          <Menu>
            <Typography
              flex={3}
              variant="h6"
              component={"div"}
              sx={{ marginLeft: 2 }}
            >
              The Blog of CodingsTrade
            </Typography>

            <Box flex={1}>
              <Stack direction={"row"}>
                {" "}
                <MenuItem
                  color="inherit"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Login
                </MenuItem>
                <MenuItem
                  sx={{
                    color: "white",
                    background: "#0049fb",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginRight: "0px",
                    height: "50%",
                    marginTop: 1,
                  }}
                  color="inherit"
                >
                  Sign Up
                </MenuItem>
                <MenuItem
                  sx={{
                    color: "white",
                    background: "green",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginRight: "0px",
                    height: "50%",
                    // marginTop: 1,
                    margin:"7.5px 2px 0px 4px"
                  }}
                  color="inherit"
                >
                  Create
                </MenuItem>
                <IconButton size="small" edge="start" color="inherit" sx={{ml: 2}}>
                  <SearchIcon sx={{ fontSize: 35, fontWeight:200 }} />
                </IconButton>
                <IconButton size="small" edge="start" color="inherit">
                  <MenuIcon sx={{ fontSize: 39 }} />
                </IconButton>
              </Stack>
            </Box>
          </Menu>
        </AppBar>
      </ScrollTop>
    </>
  );
};

export default NavbarTop;

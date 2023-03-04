import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Container, Stack, styled, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { StyledButton } from "./Card";
const Catlist = [
  { id: 1, name: "About Us" },
  { id: 2, name: "Photo Essays" },
  { id: 3, name: "Saving lives" },
  { id: 4, name: "Search" },
  { id: 5, name: "Books" },
  { id: 7, name: "Climate and Energy" },
  { id: 8, name: "Personal" },
  { id: 9, name: "Education" },
  { id: 10, name: "Pandemic prevention" },
  { id: 11, name: "Podcast" },
  { id: 12, name: "Videos" },
  { id: 13, name: "Inequality, gender and race" },
];
const List = styled("div")({
  fontWeight: 300,
  color: "white",
  marginTop: 20,
  marginBottom: 70,
  display: "flex",
  flexWrap: "wrap",
  maxWidth: "480px",
  justifyContent: "center",
  alignItems: "center",
});
const ListItem = styled("a")({
  margin: "20px 0px 5px 0px",
  width: "150px",
  cursor: "pointer",
});
const LogoTwo = styled("div")({
  fontWeight: 800,
  fontSize: "18px",
  color: "white",
});
const Footer = () => {
  return (
    <Box sx={{ background: "black", height: "100%" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { sm: "row" },
            flexwrap: "wrap",
            paddingTop: "80px",
          }}
        >
          <Stack flex={1} sx={{ marginLeft: 1 }}>
            <LogoTwo>The Blog</LogoTwo>
            <LogoTwo>Of CondingsTrade</LogoTwo>
          </Stack>
          <Stack
            flexDirection={"row"}
            sx={{ cursor: "pointer", marginRight: 4 }}
          >
            <Instagram color="warning" />
            <Twitter color="primary" />
            <Facebook color="primary" />
          </Stack>
        </Box>
        <Stack flexDirection={{ sm: "row" }}>
          <Box
            flex={1}
            mt={8}
            sx={{
              borderTop: "0.1px solid white",
              borderBottom: "0.1px solid white",
            }}
          >
            {" "}
            <List>
              {Catlist.map((cat) => (
                <ListItem key={cat.id}>{cat.name}</ListItem>
              ))}
            </List>
          </Box>
          <Box
            flex={1}
            mt={8}
            sx={{
              color: "white",
              borderTop: "0.1px solid white",
              borderBottom: "0.1px solid white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Subscribe to Codingstrade</Typography>
            <TextField
              id="standard-basic"
              variant="standard"
              color="info"
              placeholder="First Name"
              inputProps={{
                style: {
                  color: "white",
                  borderBottom: "2px solid white",
                  width: "300px",
                },
              }}
            ></TextField>
            <TextField
              id="standard-basic"
              variant="standard"
              color="info"
              placeholder="Last Name"
              inputProps={{
                style: {
                  color: "white",
                  borderBottom: "2px solid white",
                  width: "300px",
                },
              }}
            ></TextField>
            <TextField
              id="standard-basic"
              variant="standard"
              color="info"
              placeholder="Email"
              inputProps={{
                style: {
                  color: "white",
                  borderBottom: "2px solid white",
                  width: "300px",
                },
              }}
            ></TextField>
            <StyledButton sx={{marginTop: 2}}>Sign Up</StyledButton>
          </Box>
        </Stack>
        <Box sx={{color: "gray", display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap: 3, marginTop:5}}>
            <Typography variant="body1" >&copy; 2023 Codingstrade LLC</Typography>
            <Link href={"/privacy"}>Privacy</Link>
            <Link href={"/terms"}>Terms of use</Link>
            <Link href={"/contact"}>Contact</Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

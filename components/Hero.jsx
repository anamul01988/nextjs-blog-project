import { Container, Fab, Grid } from "@mui/material";
import React from "react";
import Card from "./Card";

const Hero = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} mb={2} mt={2}>
          <Card
            direction={"row"}
            imgWidth={566}
            imgHeight={400}
            mycolor={"black"}
            linkSrc="/"
            fontSize={"40px"}
            imgSrc="https://cdn.pixabay.com/photo/2014/09/27/17/35/dandelion-463928__480.jpg"
            heading={"Example"}
            title={"The Ultimate Next js with mui5 by gatesNotes Blog"}
            Desc={
              "Complete Next api and crud   with responsive mui5 blog codingstra"
            }
            author={"By Billgates | Jan 09, 2023"}
            EditButton={
              <Fab
                size="small"
                variant="extended"
                color="success"
                aria-label="edit"
              >
                Edit
              </Fab>
            }
          />
        </Grid>
        <Grid item md={3} spacing={1}>
          <Card
            direction={"column"}
            imgWidth={280}
            imgHeight={220}
            mycolor={"black"}
            linkSrc="/"
            fontSize={"18px"}
            imgSrc="https://cdn.pixabay.com/photo/2014/09/27/17/35/dandelion-463928__480.jpg"
            // heading={"Example"}
            title={"The Ultimate Next js with mui5 by gatesNotes Blog"}
            Desc={
              "Complete Next api and crud   with responsive mui5 blog codingstra"
            }
            EditButton={
              <Fab
                size="small"
                variant="extended"
                color="success"
                aria-label="edit"
              >
                Edit
              </Fab>
            }
          />
        </Grid>
        <Grid item md={3} spacing={1}>
          <Card
            direction={"column"}
            imgWidth={280}
            imgHeight={220}
            mycolor={"black"}
            linkSrc="/"
            fontSize={"18px"}
            imgSrc="https://cdn.pixabay.com/photo/2014/09/27/17/35/dandelion-463928__480.jpg"
            // heading={"Example"}
            title={"The Ultimate Next js with mui5 by gatesNotes Blog"}
            Desc={
              "Complete Next api and crud   with responsive mui5 blog codingstra"
            }
            EditButton={
              <Fab
                size="small"
                variant="extended"
                color="success"
                aria-label="edit"
              >
                Edit
              </Fab>
            }
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
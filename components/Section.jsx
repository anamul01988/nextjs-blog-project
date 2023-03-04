import { Box, Container, Fab, Grid, styled, Typography } from "@mui/material";
import React from "react";
import Card from "./Card";
const StyledContainer = styled(Box)(
  ({ mycolor, mybgcolor, myheight, mywidth }) => ({
    color: mycolor,
    background: mybgcolor,
    height: myheight,
    width: mywidth,
  })
);
const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 20px 10px 0px",
});
const Section = () => {
  return (
    <StyledContainer
      mybgcolor={"black"}
      mycolor="white"
      mywidth="100%"
    //   myheight="200px"
    >
      <Container>
        <StyledBox>
          <Box flex={1}>
            <Typography
              sx={{
                textTransform: "capitalize",
                borderBottom: "2px solid white",
                width: "fit-content",
                fontWeight: "bold",
              }}
            >
              Category Name
            </Typography>
          </Box>
          <Box>
            <a href="/">See more</a>
          </Box>
        </StyledBox>
        <Grid container>
          <Grid sm={4}>
            <Card
              direction={"column"}
              imgWidth={350}
              imgHeight={300}
              mycolor={"white"}
              linkSrc="/"
              imgSrc="https://cdn.pixabay.com/photo/2014/09/27/17/35/dandelion-463928__480.jpg"
            //   heading={"Example"}
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
          <Grid sm={4}>
            <Card
              direction={"column"}
              imgWidth={350}
              imgHeight={300}
              mycolor={"white"}
              linkSrc="/"
              imgSrc="https://cdn.pixabay.com/photo/2023/02/08/07/32/vietnamese-woman-7775904_640.jpg"
            //   heading={"Example"}
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
          <Grid sm={4}>
            <Card
              direction={"column"}
              imgWidth={350}
              imgHeight={300}
              mycolor={"white"}
              linkSrc="/"
              imgSrc="https://cdn.pixabay.com/photo/2023/02/07/00/25/relaxed-7772958_640.jpg"
            //   heading={"Example"}
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
    </StyledContainer>
  );
};

export default Section;

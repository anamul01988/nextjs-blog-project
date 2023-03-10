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
const Section = (props) => {
  // console.log("props category", props.category);
  return (
    <>
      {
        props.category.slice(0, 10).map((category)=>{
          return (
            <StyledContainer
            mybgcolor={`${(category.cat_id + 3) % 4 === 0 ? "black" : "white"}`}  //0 + 3 mod 4  = 0 tai black jeita id = 0, jodi 1 hoy taile mod korar por reminder hoy 1 tai false er black . aivabe loop cholte thakbe
            mycolor={`${(category.cat_id + 3) % 4 === 0 ? "white" : "black"}`}
            key = {category.cat_id}
            mywidth="100%"
            //   myheight="200px"
          >
            <Container>
              {/* {console.log(`${(category.cat_id + 3) % 4 }`)} */}
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
                  {category.category_name}
                  </Typography>
                </Box>
                <Box>
                  <a href="/">See more</a>
                </Box>
              </StyledBox>
              <Grid container>
                {
                  props.posts.filter((post)=>post.category_name === category.category_name).slice(0,3).map((post)=>{
                    return(
                      <Grid sm={4}>
                      <Card
                        direction={"column"}
                        imgWidth={350}
                        imgHeight={300}
                        mycolor={"white"}
                        linkSrc="/"
                        imgSrc={post.imageUrl}                        //   heading={"Example"}
                        // title={"The Ultimate Next js with mui5 by gatesNotes Blog"}
                        title={post.title}
                        Desc={
                          post.excerpt
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
                    )
                  })
                }
             
              
              </Grid>
            </Container>
          </StyledContainer>
          )
        })
      }


    </>
  );
};

export default Section;

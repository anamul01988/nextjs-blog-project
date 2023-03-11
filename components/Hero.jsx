import { Container, Fab, Grid } from "@mui/material";
import React, { useState } from "react";
import Card from "./Card";
import FormModal from "./FormDialog";

const Hero = (props) => {
  const [openForm, setOpenForm] = useState(false);
  // console.log("props", props.posts);
  return (
    <Container>
      <Grid container>
        {props.posts
          .filter((post) => post.featured === 1)
          .slice(0, 5)
          .map((post, i) => {
            return i === 0 ? (
              <Grid item xs={12} mb={2} mt={2}>
                <Card
                  direction={"row"}
                  imgWidth={566}
                  imgHeight={400}
                  mycolor={"black"}
                  linkSrc={`posts/${post.slug}`}
                  fontSize={"40px"}
                  // imgSrc="https://cdn.pixabay.com/photo/2014/09/27/17/35/dandelion-463928__480.jpg"
                  imgSrc={post.imageUrl}
                  heading={"Example"}
                  title={post.title}
                  Desc={post.excerpt}
                  author={"By" + post.author + "|" + " Jan 09, 2023"}
                  EditButton={
                    <Fab
                    onClick={() => setOpenForm(post.post_id)}
                      size="small"
                      variant="extended"
                      color="success"
                      aria-label="edit"
                    >
                      Edit
                    </Fab>
                  }
                />
                 <FormModal
                  key={post.post_id}
                  open={openForm === post.post_id ? true : false}
                  handleClose={() => setOpenForm(false)}
                  posts={{ 
                    post_id: post.post_id,
                    title: post.title,
                    imageUrl: post.imageUrl,
                    excerpt: post.excerpt,
                    content: post.content,
                    author: post.author,
                    featured: post.featured,
                    category_name: post.category_name
                   }}
                />
              </Grid>
            ) : (
              <Grid item md={3} spacing={1}>
                <Card
                  direction={"column"}
                  imgWidth={280}
                  imgHeight={220}
                  mycolor={"black"}
                  linkSrc={`posts/${post.slug}`}
                  fontSize={"18px"}
                  // imgSrc="https://cdn.pixabay.com/photo/2014/09/27/17/35/dandelion-463928__480.jpg"
                  imgSrc={post.imageUrl}
                  // heading={"Example"}
                  // title={"The Ultimate Next js with mui5 by gatesNotes Blog"}
                  title={post.title}
                  Desc={post.content}
                  EditButton={
                    <Fab
                      onClick={() => setOpenForm(post.post_id)}
                      size="small"
                      variant="extended"
                      color="success"
                      aria-label="edit"
                    >
                      Edit
                    </Fab>
                  }
                />
                <FormModal
                  key={post.post_id}
                  open={openForm === post.post_id ? true : false}
                  handleClose={() => setOpenForm(false)}
                  posts={{ 
                    post_id: post.post_id,
                    title: post.title,
                    imageUrl: post.imageUrl,
                    excerpt: post.excerpt,
                    content: post.content,
                    author: post.author,
                    featured: post.featured,
                    category_name: post.category_name
                   }}
                />
              </Grid>
            );
          })}

        {/* <Grid item md={3} spacing={1}>
          <Card
            direction={"column"}
            imgWidth={280}
            imgHeight={220}
            mycolor={"black"}
            linkSrc={`/`}
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
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default Hero;

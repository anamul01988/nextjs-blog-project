import React from "react";
import { useRouter } from "next/router";
import { Container, styled, Typography, Box } from "@mui/material";
import Image from "next/image";
const FlexContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
const Details = ({ post }) => {
  const router = useRouter();
  return (
    <Container>
      <FlexContainer>
        <Box sx={{ width: "80%", textAlign: "center" }}>
          <Typography textAlign={"center"} variant="h3" m={3}>
            {post.title}
          </Typography>
        </Box>
        <Box sx={{ width: "80%", textAlign: "center" }}>
          <Typography textAlign={"center"} variant="body" m={3}>
            {post.excerpt}
          </Typography>
        </Box>

        <Typography textAlign={"center"} variant="body" m={3}>
          By <b>{post.author}</b> | January 31, 2023 5 minute read
        </Typography>
        <FlexContainer>
          <Image src={post.imageUrl} height={600} width={800} />
        </FlexContainer>
        <FlexContainer>
          <Typography sx={{width:"90vh"}} textAlign={"center"} variant="body" mt={2}>
            By <b>{post.content}</b>
          </Typography>
        </FlexContainer>
      </FlexContainer>
    </Container>
  );
};

export default Details;
export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/post");
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { slug: post.slug.toString() }, //post er api theke slug take niye params dibe dibe jeitate hiphen thakbe
  }));
  return {
    //   paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    paths,
    fallback: false, // can also be true or 'blocking' //url na paile ki korbe fallback tar command dey
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/post/${params.slug}`);
  const post = await res.json();
  return {
    props: { post },
  }; //ai post jabe details component er moddhe jeita upore ace
}

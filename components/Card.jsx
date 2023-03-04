import { Box, Stack, styled, Typography } from "@mui/material";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
const TextContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center"

})
const StyledLink = styled(Box)(({fontSize,mycolor})=>({
    fontSize: fontSize,
    fontFamily: "source-serif-pro, Source Serif Pro",
    fontWeight: 'bold',
    color: mycolor? mycolor : '',
    cursor: 'pointer',
    lineHeight: 1,
    ":hover":{
        textDecoration: 'underline'
    }
}))
const Card = (props) => {
    console.log("editButton",props.editButton);
  return (
    <Stack sx={{cursor: 'pointer'}} direction={props.direction}>
      <Box sx={{marginRight: 12}}>
        <Box sx={{marginBottom: -4.5}}>{props.EditButton}</Box>
        <Link href={props.linkSrc}>
          <Box
            height={props.imgHeight}
            width={props.imgWidth}
            sx={{ position: "relative" }}
          >
            {" "}
            <Image
              component="img"
              src={props.imgSrc}
              alt="picture of the post"
              layout="fill"
            />
          </Box>
        </Link>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
           <TextContainer>
             <Typography variant="h7" sx={{borderBottom: '2px solid', fontWeight: 900, textTransform:'uppercase', width: 'fit-content',mb:'15px'}}>
                {props.heading}
             </Typography>
             <StyledLink fontSize={props.fontSize}>
                <Link href={props.linkSrc}>{props.title}</Link>
             </StyledLink>
             <Box>{props.Desc}</Box>
             <Typography variant = "h6" fontWeight={900}>
                {props.author}
             </Typography>
           </TextContainer>
        </Box>
    
    </Stack>
  );
};

export default Card;

import * as React from 'react';
import { styled } from "@mui/material";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md"
import { Saunder } from "../types";

const PathesListItem = ({
  id,
  title,
  description,
  distance,
  isFavoutite = true,
  path,
}: Saunder) => {
  console.log(id);

  return ( 
    <Wrapper>
      <Icon>
        <HiOutlineArrowsExpand />
      </Icon>
      <Info>
        <Title>
          {isFavoutite && <AiFillStar />}
          {title || "title"}
        </Title>

        <Description>
          {description || "description"}
        </Description>
      </Info>

      <Distance>
        {distance || 10}m
      </Distance>

      <MdArrowForwardIos />
    </Wrapper>
   );
}

const Wrapper = styled("li")({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  marginTop: "15px",
})

const Info = styled("div")({
  flex: 1
})

const Icon = styled("div")({
  "& svg": {
    width: "50px",
    height: "50px"
  }
})

const Title = styled("div")({
  fontSize: "24px",
  display: "flex",
  alignItems: "center",

  "& svg": {
    width: "24px",
    height: "24px"
  },
})

const Description = styled("div")({
  maxHeight: "40px",
  overflow: "hidden"
})

const Distance = styled("div")({
  fontWeight: 600,
  fontSize: "18px"
})
 
export default PathesListItem;
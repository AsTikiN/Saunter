import React, { useState } from 'react';
//@ts-ignore
import DefaultInput from './Input/DefaultInput.tsx';
//@ts-ignore
import Map from "./components/Map.tsx";
import { FaSearchLocation } from "react-icons/fa";
//@ts-ignore
import Container from './Container/Container.tsx';
import { styled } from "@mui/material";
//@ts-ignore
import PathesListItem from './PathesListItem.tsx';

const mockList = [
  {
    id: 1,
    title: "some title",
    description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    distance: 600,
    isFavoutite: false,
    path: "somePath",
  },
  {
    id: 2,
    title: "some title",
    description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    distance: 600,
    isFavoutite: false,
    path: "somePath",
  },
  {
    id: 3,
    title: "some title",
    description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    distance: 600,
    isFavoutite: false,
    path: "somePath",
  },
  {
    id: 4,
    title: "some title",
    description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    distance: 600,
    isFavoutite: false,
    path: "somePath",
  },
  {
    id: 5,
    title: "some title",
    description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    distance: 600,
    isFavoutite: false,
    path: "somePath",
  },

]

const Body = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return ( 
    <Wrapper>
      <Container>
        <InnerWrapper>
          <Aside>
            <DefaultInput endIcon={<FaSearchLocation />} fullWidth value={searchValue} setValue={setSearchValue} />
            <PathesListWrapper>
              {mockList.map(item => 
                <PathesListItem 
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  isFavoutite={item.isFavoutite}
                  path={item.path}
                  distance={item.distance} />
                )}  
            </PathesListWrapper>
          </Aside>
        </InnerWrapper>
        {/* <Map></Map> */}
      </Container>
    </Wrapper>
   );
}

const Wrapper = styled("section")({

})

const Aside = styled("div")({
  width: "50%",
  padding: "20px",
})

const InnerWrapper = styled("div")({

})

const PathesListWrapper = styled("ul")({
  padding: 0
})
 
export default Body;
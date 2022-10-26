import React, { useEffect, useState, FC, ReactElement, useContext } from 'react';
import DefaultInput from './Input/DefaultInput';
import { FaSearchLocation } from "react-icons/fa";
import Container from './Container/Container';
import { styled } from "@mui/material";
import PathesListItem from './PathesListItem';
import { useSelector } from "react-redux";
import { Saunter } from '../types';
import PathInfo from './PathInfo';

const Body: FC = (): ReactElement => {
  const [searchValue, setSearchValue] = useState<string>("");

  const data:Saunter[] = useSelector((state: any) => state.saunterReducer.saunterList);

  return ( 
    <Wrapper>
      <Container>
        <InnerWrapper>
          <Aside>
            <DefaultInput endIcon={<FaSearchLocation />} fullWidth value={searchValue} setValue={setSearchValue} />
            <PathesListWrapper>
              {data.filter(item => `${item.shortDesc}${item.fullDesc}${item.title}`.includes(searchValue)).sort((prev, next) => +next.isFavourite - +prev.isFavourite).map(item => 
                <PathesListItem 
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  shortDesc={item.shortDesc}
                  fullDesc={item.fullDesc}
                  isFavourite={item.isFavourite}
                  path={item.path}
                  />
                )}  
            </PathesListWrapper>
          </Aside>
          <PathInfo />
        </InnerWrapper>
      </Container>
    </Wrapper>
   );
}

const Wrapper = styled("section")({})

const Aside = styled("div")({
  width: "50%",
  padding: "20px",

  ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
    width: "100%",
    padding: 0,
  }
})

const InnerWrapper = styled("div")({
  display: "flex",

  ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
    flexWrap: "wrap",
  }
})

const PathesListWrapper = styled("ul")({
  padding: 0
})


 
export default Body;
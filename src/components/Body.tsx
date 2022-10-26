import React, { useEffect, useState, FC, ReactElement } from 'react';
//@ts-ignore
import DefaultInput from './Input/DefaultInput.tsx';
//@ts-ignore
import { FaSearchLocation } from "react-icons/fa";
//@ts-ignore
import Container from './Container/Container.tsx';
import { styled } from "@mui/material";
//@ts-ignore
import PathesListItem from './PathesListItem.tsx';
import { useSelector } from "react-redux";
import { Saunter } from '../types';
//@ts-ignore
import { useActions } from '../hooks/useActions.tsx';
//@ts-ignore
import PathInfo from './PathInfo.tsx';

const Body: FC = (): ReactElement => {
  const [searchValue, setSearchValue] = useState<string>("");

  const data:Saunter[] = useSelector((state: any) => state.saunterReducer.saunterList);

  useEffect(() => {
    console.log("data", data);
  }, [data])

  return ( 
    <Wrapper>
      <Container>
        <InnerWrapper>
          <Aside>
            <DefaultInput endIcon={<FaSearchLocation />} fullWidth value={searchValue} setValue={setSearchValue} />
            <PathesListWrapper>
              {data.sort((prev, next) => +next.isFavourite
 - +prev.isFavourite
).map(item => 
                <PathesListItem 
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  shortDesc={item.shortDesc}
                  isFavourite
={item.isFavourite
}
                  path={item.path}
                  distance={item.path} 
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
})

const InnerWrapper = styled("div")({
  display: "flex",
})

const PathesListWrapper = styled("ul")({
  padding: 0
})


 
export default Body;
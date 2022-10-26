import React, { FC, ReactElement, useEffect, useState } from 'react';
//@ts-ignore
import Map from './Map.tsx';
import { styled } from "@mui/material";
import { useSelector } from 'react-redux';
import { Saunter } from '../types';
//@ts-ignore
import Button from "./Button/Button.tsx";
//@ts-ignore
import { useActions } from "../hooks/useActions.tsx";

const PathInfo:FC = (): ReactElement => {
  const {saunterList: data, selectedItem: selectedId} = useSelector((state: any) => state.saunterReducer);
  const [currentPath, setCurrentPath] = useState<Saunter | null>(null)
  const { addToFavorites, removeSaunter } = useActions();

  useEffect(() => {
    if(!data || !selectedId) return;

    setCurrentPath(data.find((saunter: Saunter) => saunter.id === selectedId))
  }, [selectedId, data])

  const handleFavouriteClick = (e: React.MouseEvent<HTMLButtonElement>) => addToFavorites(currentPath?.id);
  const handleRemoveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    removeSaunter(currentPath?.id);
    setCurrentPath(null);
  }

  if(!currentPath) return <>select any path</>;

  return ( 
    <Wrapper>
      <MainInfo>
        <PathTitle>{currentPath?.title}</PathTitle>
        <PathDistance>{currentPath?.path.routes[0].legs[0].distance?.text}</PathDistance>
      </MainInfo>
      <Description>
        <PathDescription>{currentPath?.fullDesc}</PathDescription>
      </Description>
      <MapWrapper>
        <Map path={currentPath?.path} editMode={false}/>
      </MapWrapper>
      <BtnToRight>
        <Button variant="text" onClick={handleFavouriteClick}>add to favorites</Button> 
      </BtnToRight>
      <BtnToRight>
        <Button variant="text" onClick={handleRemoveClick}>Remove</Button> 
      </BtnToRight>
    </Wrapper>
   );
}

const Wrapper = styled("div")({
  width: "50%",
  padding: "20px"
})

const PathTitle = styled("div")({
  fontSize: "24px",
  fontWeight: 600,
})

const PathDistance = styled("div")({
  fontSize: "24px",
  fontWeight: 600,
})

const PathDescription = styled("div")({
  fontSize: "12px"
})

const MainInfo = styled("div")({
  display: "flex",
  justifyContent: "space-between"
})

const Description = styled("div")({

})

const BtnToRight = styled("div")({
  display: "flex",
  justifyContent: "flex-end"
})

const MapWrapper = styled("div")({
  width: "100%",
  height: "400px",
})
 
export default PathInfo;
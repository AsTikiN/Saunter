import * as React from 'react';
// @ts-ignore
import Logo from '../Logo/Logo.tsx';
// @ts-ignore
import Button from '../Button/Button.tsx';
import { styled } from '@mui/material';
// @ts-ignore
import Container from "../Container/Container.tsx";

const Header = () => {
  return ( 
    <InnerWrapper>
      <Container>
        <Wrapper>
          <Logo />
          <Button variant='contained' color='primary'>Add path</Button>
        </Wrapper>
      </Container>
    </InnerWrapper>
   );
}

const Wrapper = styled("div")({
  background: "#152238",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
})

const InnerWrapper = styled("div")({
  background: "#152238",
})

export default Header;
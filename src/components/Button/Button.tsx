import * as React from 'react';
import { Button as MuiButton, styled } from '@mui/material';

interface Props {
  children: JSX.Element | string;
  color: "primary" | "secondary";
  variant: "outlined" | "contained";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  children,
  color,
  variant,
  onClick
}: Props) => {
  return ( 
    <CustomButton color={color} variant={variant} onClick={onClick}>
      {children}
    </CustomButton>
   );
}

const CustomButton = styled(MuiButton)({
  fontFamily: "arial",
  fontWeight: 600
})
 
export default Button;
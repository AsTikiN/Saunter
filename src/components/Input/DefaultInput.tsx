import * as React from 'react';
import { TextField as MuiTextField, styled } from '@mui/material';

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  startIcon?: JSX.Element,
  endIcon?: JSX.Element,
  fullWidth?: boolean;
}

const DefaultInput = ({
  value,
  setValue,
  startIcon,
  endIcon,
  fullWidth
}: Props) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return ( 
    <TextField 
      value={value} 
      onChange={handleInputChange} 
      fullWidth={fullWidth}
      InputProps={{
        startAdornment: (
          startIcon
        ),
        endAdornment: (
          endIcon
        )
      }}
      />
   );
}

const TextField = styled(MuiTextField)({
  "& svg": {
    height: "28px",
    width: "28px"
  }
})
 
export default DefaultInput;
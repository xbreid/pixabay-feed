import * as React from 'react';
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";

const SubmitBtn = styled(Button)(() => ({
  borderRadius: 1,
  padding: '12px 32px',
  '& > a': {
    textDecoration: 'none'
  }
}));

function SubmitButton({ label }: any): JSX.Element {

  return (
    <SubmitBtn
      sx={{ width: '100%' }}
      color="primary"
      type="submit"
      variant="outlined"
    >
      {label}
    </SubmitBtn>
  )
}

export default SubmitButton;
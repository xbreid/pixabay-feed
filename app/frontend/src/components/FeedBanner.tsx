import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {styled} from "@mui/material/styles";

const FeedCard = styled(Card)(() => ({
  borderRadius: '18px',
  border: 'none'
}));

function FeedBanner(): JSX.Element {
  return (
    <FeedCard variant="outlined">
      <CardMedia
        sx={{
          height: 150,
          '@media (min-width:740px)': {
            height: '25vw',
          }
        }}
        component="img"
        image="https://images.unsplash.com/photo-1571358657078-da729968f6b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1708&q=80"
        alt="red bull"
      />
    </FeedCard>
  );
}

export default FeedBanner;
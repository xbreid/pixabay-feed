import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

function FeedListLoader(): JSX.Element {
  return (
    <>
      { Array.from(Array(10)).map(() => (
        <Skeleton
          key={ Math.random().toString(36).substring(2, 15)}
          animation="wave"
          height={100}
          width="100%"
          style={{ marginBottom: -24, borderRadius: 6 }}
        />
      ))}
    </>
  );
}

export default FeedListLoader;
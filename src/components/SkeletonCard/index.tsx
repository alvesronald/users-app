import React from 'react';

import Skeleton from '@mui/material/Skeleton';

export const SkeletonCard = () => {
  return (
    <>
      {Array.from(new Array(8)).map((item) => (
        <div key={item}>
          <Skeleton
            variant="rectangular"
            width={300}
            height={400}
            style={{ margin: 10 }}
            animation="wave"
          />
        </div>
      ))}
    </>
  );
};

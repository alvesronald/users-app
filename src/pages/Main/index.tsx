import React, { memo } from 'react';

import { useFetch } from 'hooks/useFetch';
import CardItem from 'components/CardItem';
import Div from 'components/Div';
import { SkeletonCard } from 'components/SkeletonCard';
import ErrorInfoCard from 'components/ErrorInfoCard';

const path = 'users';

const Main = () => {
  const { loading, records, error, callFetchFunction } = useFetch(path);
  return (
    <>
      <Div display="flex" flexDirection="row">
        {error && <ErrorInfoCard reloadButton={callFetchFunction} />}
        {loading && <SkeletonCard />}
        {records.map((record) => (
          <CardItem
            name={record.name}
            email={record.email}
            username={record.username}
            key={record.id}
          />
        ))}
      </Div>
    </>
  );
};

export default memo(Main);

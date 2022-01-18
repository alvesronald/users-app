import React from 'react';

import { useFetch } from 'hooks/useFetch';
import Card from 'components/Card';

const path = 'users';

export const Main = () => {
  const { loading, records, error } = useFetch(path);
  return (
    <>
      {records.map((record) => (
        <Card
          name={record.name}
          email={record.email}
          username={record.username}
        />
      ))}
    </>
  );
};

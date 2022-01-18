import React, { memo } from 'react';

import { useFetch } from 'hooks/useFetch';
import CardItem from 'components/CardItem';
import Div from 'components/Div';

const path = 'users';

const Main = () => {
  const { loading, records, error } = useFetch(path);
  return (
    <>
      <Div display="flex" flexDirection="row">
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

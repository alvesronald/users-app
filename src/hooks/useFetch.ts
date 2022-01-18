import { useState, useEffect } from 'react';

import axios, { AxiosError } from 'axios';
import { UserProps } from 'interface/UserProps';

export const useFetch = <T extends UserProps>(
  path: string,
  options?: { id: number },
) => {
  const [records, setRecords] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError>();

  const url = `${process.env.REACT_APP_API}/${path}`;

  useEffect(() => {
    const callFetchFunction = async () => {
      setLoading(true);

      try {
        const res = await axios.get<T[]>(url, { params: options });
        setRecords(res.data);
      } catch (e) {
        setError(e as AxiosError);
      }

      setLoading(false);
    };

    callFetchFunction();
  }, [options, url]);

  return { records, loading, error };
};

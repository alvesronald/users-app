import { useState, useEffect, useCallback } from 'react';

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

  const callFetchFunction = useCallback(async () => {
    setLoading(true);
    setError(undefined);

    try {
      const res = await axios.get<T[]>(url, { params: options });
      setRecords(res.data);
    } catch (e) {
      setError(e as AxiosError);
    }

    setLoading(false);
  }, [options, url]);

  useEffect(() => {
    callFetchFunction();
  }, [options, url, callFetchFunction]);

  return { records, loading, error, callFetchFunction };
};

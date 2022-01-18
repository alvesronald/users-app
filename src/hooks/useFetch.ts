import { useState, useEffect } from 'react';

import axios, { AxiosError } from 'axios';

export const useFetch = () => {
  const [records, setRecords] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError>();
};

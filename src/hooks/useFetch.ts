import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
  const [dataFetch, setDataFetch] = useState({
    data: null,
    isLoading: true,
    isError: null,
  });
  const getData = async () => {
    setDataFetch({
      ...dataFetch,
      isLoading: true,
    });
    const res = await fetch(url);
    const data = await res.json();
    setDataFetch({
      data,
      isLoading: false,
      isError: null,
    });
  };

  useEffect(() => {
    getData();
  }, [url]);
  return {
    getData,
    data: dataFetch.data,
    isLoading: dataFetch.isLoading,
    isError: dataFetch.isError,
  };
};

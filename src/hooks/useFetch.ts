import useSWR from 'swr';
import { blogApi } from '../api/blogApi';

export const useFetch = (method: string) => {
  const fetcher = blogApi[method];
  const { data, error, mutate } = useSWR(method, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

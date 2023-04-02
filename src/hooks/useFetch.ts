import useSWR from 'swr';
import { blogApi } from '../api/blogApi';

export const useFetch = (method: string, pageNumber: number = 1, pageSize: number = 10) => {
  const fetcher = blogApi[method];
  const { data, error, mutate } = useSWR([method, pageNumber, pageSize], fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

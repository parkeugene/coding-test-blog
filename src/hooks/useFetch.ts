import useSWR from 'swr';
import { blogApi } from '../api/blogApi';

export const useFetch = (method: string, pageIndex: number = 1, pageSize: number = 5) => {
  const fetcher = blogApi[method];
  const { data, error, mutate } = useSWR([method, pageIndex, pageSize], fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

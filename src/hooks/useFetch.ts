import useSWR from 'swr';
import { blogApi } from '../api/blogApi';
import { ApiRequestInfoType } from '../types/types';

export const useFetch = ({ method, pageIndex = 1, pageSize = 5, id }: ApiRequestInfoType) => {
  const fetcher = blogApi[method];
  const { data, error, mutate } = useSWR({ method, pageIndex, pageSize, id }, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

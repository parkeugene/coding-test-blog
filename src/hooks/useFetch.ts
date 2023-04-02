import useSWR from 'swr';
import { blogApi } from '../api/blogApi';
import { ApiRequestInfoType } from '../types/types';

type FetchResult<T> = {
  data: T | null;
  isLoading: boolean;
  isError: any;
  mutate: () => void;
};

export const useFetch = <T = any>({ method, pageIndex = 1, pageSize = 5, id }: ApiRequestInfoType): FetchResult<T> => {
  const fetcher = blogApi[method];
  const { data, error, mutate } = useSWR({ method, pageIndex, pageSize, id }, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

import { UseQueryOptions } from '@tanstack/react-query';

export type TPromiseFn = (...args: any[]) => Promise<unknown>;

export type TQueryFetchData<TFn extends TPromiseFn> = Awaited<ReturnType<TFn>>;

export type TqueryOptions<TFn extends TPromiseFn> = Omit<
  UseQueryOptions<TQueryFetchData<TFn>, unknown, unknown>,
  'queryFn' | 'queryKey'
>;

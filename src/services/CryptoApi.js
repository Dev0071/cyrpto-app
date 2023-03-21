import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const CryptoApiHeaders = {
  'X-RapidAPI-Key': '4affdf8d28mshc3a758c195527c9p1c454djsn3a50db4640a5',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};
const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: CryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins'),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;

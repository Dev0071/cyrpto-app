import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const CryptoNewsHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '86077677famshb79beb6db719886p19453bjsn8490696acebc',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: CryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormart=Raw&freshness=Day&count=${count} `
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

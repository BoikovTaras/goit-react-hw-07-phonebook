import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reduserPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61fc3a9c3f1e34001792c840.mockapi.io',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
    }),
  }),
});

export const { useGetContactsQuery } = contactApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IRegisterUserResponse, IRegisterUserPayload, ILoginUserPayload, ILoginUserResponse, IUserResponse  } from './types'
import { baseUrl } from '../../utils/baseUrl'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IRegisterUserResponse, IRegisterUserPayload>({
      query: (body) => ({
        url:"registration",
        method:"POST",
        body
      })
    }),
    loginUser: builder.mutation<ILoginUserResponse, ILoginUserPayload>({
        query: (body) => ({
          url:"login",
          method:"POST",
          body
        })
      }),
    getUserByID: builder.query<IUserResponse, number>({
        query: (user_id) => `user?user_id=${user_id}` 
      }),
  }),
})


export const { useRegisterUserMutation, useLoginUserMutation, useGetUserByIDQuery } = userApi
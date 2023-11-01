"use client";

import React from 'react'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

type Props = {
    children: React.ReactNode
}

const queryClient = new QueryClient();

const Provider = ({children}:Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default Provider

//reson: Fetch all notes and to reduce hitting the end point twice , if teh request is reuseing the same as first query
//storing result in cache , so we store this resutl in a cache adn tehn use this instead of hitting the end point

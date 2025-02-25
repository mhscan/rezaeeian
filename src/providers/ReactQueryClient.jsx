"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export function ReactQueryClient({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children} 
      <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
  );
}

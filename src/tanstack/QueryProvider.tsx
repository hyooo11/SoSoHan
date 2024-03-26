"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

type Props = {
  children: React.ReactNode;
};

function QueryProvider({ children }: Props) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default QueryProvider;

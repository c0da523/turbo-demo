"use client";

import React, { useState } from "react";
import { WagmiContext } from "./context";
import { StateProvider } from "./state";
import WalletProviderChild from "./provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiContext>
      <QueryClientProvider client={queryClient}>
        <StateProvider>
          <WalletProviderChild />
          {children}
        </StateProvider>
      </QueryClientProvider>
    </WagmiContext>
  );
};

export default WalletProvider;

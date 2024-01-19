"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";

import { config } from "@/wagmi";
import { WalletProvider } from "./components";

export function Providers(props: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    // <WagmiProvider config={config}>
    //   <QueryClientProvider client={queryClient}>
    //     {props.children}
    //   </QueryClientProvider>
    // </WagmiProvider>
    //   <WagmiProvider config={config}>
    //   <QueryClientProvider client={queryClient}>
    //     {props.children}
    //   </QueryClientProvider>
    // </WagmiProvider>
    <WalletProvider>{props.children}</WalletProvider>
  );
}

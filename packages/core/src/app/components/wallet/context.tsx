"use client";

import { config } from "@/wagmi";
import { WagmiProvider } from "wagmi";

interface WagmiProviderProps {
  children: React.ReactNode;
}

function WagmiContext({ children }: WagmiProviderProps) {
  return <WagmiProvider config={config}>{children}</WagmiProvider>;
}

export { WagmiContext };

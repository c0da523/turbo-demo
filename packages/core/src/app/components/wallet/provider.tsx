"use client";

import React, { useContext } from "react";
import { useConnect } from "wagmi";

import StateContext from "./state";
import dynamic from "next/dynamic";

// set the walletModal up as a dynamic container
const DynamicWalletModal = dynamic(
  async () => {
    const { WalletModal } = await import("./modal");
    return WalletModal;
  },
  {
    ssr: false,
  }
);

export default function WalletProvider() {
  // unpack the context
  const { chainId, client, setClient, walletModalOpen, setWalletModalOpen } =
    useContext(StateContext);

  // control wagmi connector
  const { connect, connectors } = useConnect({
    mutation: {
      onSuccess() {
        setWalletModalOpen(false);
        setWalletModalOpen(false);
      },
    },
  });

  // check for injected connector
  const hasInjected = connectors.find((conn) => conn.id === "injected");

  return (
    <DynamicWalletModal
      open={walletModalOpen}
      setOpen={setWalletModalOpen}
      connectors={connectors as []}
      injectedName={hasInjected?.name?.replace(/Injected\s\(([^)]+)\)/, "$1")}
      onMetamask={() => {
        // setClient({
        //   ...client,
        //   connector: "metaMask",
        // });
        connect({
          connector: connectors.find((conn) => conn.id === "injected")!,
        });
      }}
    />
  );
}

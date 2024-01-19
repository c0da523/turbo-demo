"use client";

import Link from "next/link";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useWallet } from "./components";

const header = () => {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();
  const { setMobileMenuOpen, setWalletModalOpen } = useWallet();

  const handleWallet = () => {
    if (account.status === "connected") {
      disconnect();
    } else {
      setWalletModalOpen(true);
    }
  };

  return (
    <div className="px-5 py-3 border-b border-slate-800 mb-3">
      <div>
        <h2 className="text-2xl font-bold">Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>
      </div>

      <div>
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
      <button
        className="border border-slate-800 rounded p-2"
        onClick={handleWallet}
      >
        {account.status === "connected" ? "Disconnect" : " Connect wallet"}
      </button>
      <div className="flex gap-3 my-3">
        <Link className="border border-slate-800 rounded p-2" href="/">
          Home
        </Link>
        <Link className="border border-slate-800 rounded p-2" href="/bridge">
          Bridge
        </Link>
        <Link className="border border-slate-800 rounded p-2" href="/faucet">
          Faucet
        </Link>
      </div>
    </div>
  );
};

export default header;

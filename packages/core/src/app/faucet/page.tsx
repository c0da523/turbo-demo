"use client";

import React from "react";
import { useAccount, useReadContract } from "wagmi";
import abi from "@/contracts/mtk.json";

const page = () => {
  const account = useAccount();

  const { data, isLoading } = useReadContract({
    abi,
    address: "0x7cf4aC414C94E03Ecb2A7d6EA8F79087453cAEf0",
    functionName: "balanceOf",
    args: [account.address],
    query: {
      enabled: !!account.address,
    },
  });
  return (
    <div className="p-3">
      <h2 className="text-xl font-bold">Faucet page</h2>
      {isLoading && <p>Fetching...</p>}
      {account.address && !isLoading && <p>You have {Number(data)} CoM NFT</p>}
      {!account.address && !isLoading && (
        <p>Connect to see your CoM NFT balance</p>
      )}
    </div>
  );
};

export default page;

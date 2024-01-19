"use client";

import React, { useState } from "react";
import { useAccount, useReadContract } from "wagmi";
import abi from "@/contracts/mtk.json";

const page = () => {
  const account = useAccount();

  const [tokenId, setTokenId] = useState("");

  const { data, isLoading } = useReadContract({
    abi,
    address: "0x7cf4aC414C94E03Ecb2A7d6EA8F79087453cAEf0",
    functionName: "tokenURI",
    args: [tokenId],
    query: {
      enabled: !!tokenId,
    },
  });

  console.log(data);

  return (
    <div className="p-3">
      <h2 className="text-xl font-bold">Bridge page</h2>
      {isLoading && <p>Fetching...</p>}
      {!isLoading && (data as String) && <p>Token URI: {data as String}</p>}
      <input
        className="border border-black p-2 mt-3"
        placeholder="Token Id"
        type="text"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
      />
    </div>
  );
};

export default page;

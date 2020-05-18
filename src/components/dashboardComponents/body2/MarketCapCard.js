import React from "react";
import BitCoinCard from "./marketCapCard/BitCoinCard";
import BinanceCoinCard from "./marketCapCard/BinanceCoinCard";
import CodeoTokenCard from "./marketCapCard/CodeoTokenCard";
import EthereumCard from "./marketCapCard/EthereumCard";
import TronCard from "./marketCapCard/TronCard";
import LiteoinCard from "./marketCapCard/LiteoinCard";

export default function MarketCapCard() {
  return (
    <>
      <div>
        <h2 className="text-center text-white">Market Cap Table</h2>
        <h4 className="text-center text-white">
          Coin Market Cap provides direct cryptocurrency
          <td />
          market capitalization data via an API.
        </h4>
      </div>
      <div className="card-group">
        <div className="card card-eco m-2">
          <div className="card-body p-0 makeCenterRow pt-3 pb-3">
            <BitCoinCard />
          </div>
        </div>
        <div className="card card-eco m-2">
          <div className="card-body p-0 makeCenterRow pt-3 pb-3">
            <BinanceCoinCard />
          </div>
        </div>
        <div className="card card-eco m-2">
          <div className="card-body p-0 makeCenterRow pt-3 pb-3">
            <CodeoTokenCard />
          </div>
        </div>
      </div>
      <div className="card-group">
        <div className="card card-eco m-2">
          <div className="card-body p-0 makeCenterRow pt-3 pb-3">
            <EthereumCard />
          </div>
        </div>
        <div className="card card-eco m-2">
          <div className="card-body p-0 makeCenterRow pt-3 pb-3">
            <TronCard />
          </div>
        </div>
        <div className="card card-eco m-2">
          <div className="card-body p-0 makeCenterRow pt-3 pb-3">
            <LiteoinCard />
          </div>
        </div>
      </div>
    </>
  );
}

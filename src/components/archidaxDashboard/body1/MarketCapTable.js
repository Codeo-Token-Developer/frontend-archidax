import React from "react";
import BitcoinTable from "./marketCapTable/BitcoinTable";
import BinanceCoinTable from "./marketCapTable/BinanceCoinTable";
import CodeoTokenTable from "./marketCapTable/CodeoTokenTable";
import EthereumTable from "./marketCapTable/EthereumTable";
import TronTable from "./marketCapTable/TronTable";
import LiteoinTable from "./marketCapTable/LiteoinTable";

export default function MarketCapTable() {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover mb-0">
          <thead className="bg-warning2">
            <tr>
              <th className="border-top-0 text-center text-black">Name</th>
              <th className="border-top-0 text-center text-black">
                Market Cap
              </th>
              <th className="border-top-0 text-center text-black">Price</th>
              <th className="border-top-0 text-center text-black">Change</th>
              <th className="border-top-0 text-center text-black">Graph</th>
            </tr>
          </thead>
          <tbody className="bg-archidax">
            <BitcoinTable />
            <BinanceCoinTable />
            <CodeoTokenTable />
            <EthereumTable />
            <TronTable />
            <LiteoinTable />
          </tbody>
        </table>{" "}
      </div>
    </>
  );
}

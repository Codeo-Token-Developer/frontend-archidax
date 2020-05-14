import React from "react";
import BTCTradeHistory from "./tradeHistory/BTCTradeHistory";

export default function TradeHistory() {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover mb-0">
          <thead className="bg-warning2">
            <tr>
              <th className="border-top-0 text-center text-black">
                Market Pair
              </th>
              <th className="border-top-0 text-center text-black">Price</th>
              <th className="border-top-0 text-center text-black">
                Volume 24H
              </th>
              <th className="border-top-0 text-center text-black">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            <BTCTradeHistory />
          </tbody>
        </table>{" "}
      </div>
    </>
  );
}

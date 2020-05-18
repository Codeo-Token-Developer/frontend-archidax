import React from "react";
import MarketCapTable from "./MarketCapTable";
import TradeHistory from "./TradeHistory";

export default function LeftSide() {
  return (
    <>
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <MarketCapTable />
          </div>
        </div>
      </div>
      <br />
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <TradeHistory />
          </div>
        </div>
      </div>
    </>
  );
}

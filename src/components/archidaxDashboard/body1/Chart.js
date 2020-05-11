import React from "react";
import ChartCodeo from "./chart/ChartCodeo";
import ChartBitCoin from "./chart/ChartBitCoin";
import Codeo from "./Codeo";
import BNB from "./BNB";

export default function Chart() {
  return (
    <div>
      <div className="card-group">
        <div className="card card-eco" style={{ marginRight: "2%" }}>
          <div className="card-body">
            <ChartBitCoin />
          </div>
        </div>
        <div className="card">
          <div className="card-body " style={{ marginLeft: "2%" }}>
            <ChartCodeo />
          </div>
        </div>
      </div>
      <br />
      <div className="card">
        <div className="card-body">
          <Codeo />
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <BNB />
        </div>
      </div>
    </div>
  );
}

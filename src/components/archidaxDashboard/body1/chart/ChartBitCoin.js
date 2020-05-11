import React from "react";

export default function ChartBitCoin() {
  return (
    <div>
      <h5 className="card-title text-center text-warning2">
        <img
          style={{ cursor: "pointer" }}
          src="/assets/images/archidax/btc kecil.png"
          alt="logo-small"
          className="logo-sm"
          style={{ height: "25px", paddingRight: "10px" }}
        />
        Bitcoin (BTC)
      </h5>
      <h5 className="card-text text-center text-success m-0">9,06%</h5>
      <h4 className="card-text text-center text-white m-0 mt-1 mb-2">
        0,4512683 BTC
      </h4>
      <p className="card-text text-center text-warning2 m-0">MARKET CAP</p>
    </div>
  );
}

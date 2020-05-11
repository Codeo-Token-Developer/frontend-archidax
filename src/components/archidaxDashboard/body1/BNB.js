import React from "react";

export default function BNB() {
  return (
    <div className="row ">
      <div className="col-4 text-white text-center">
        <div>
          <img
            style={{ cursor: "pointer" }}
            src="/assets/images/archidax/bnb kecil.png"
            alt="logo-small"
            className="logo-sm"
          />
          Binance Coin (BNB)
        </div>
        <div>
          <img
            style={{ cursor: "pointer" }}
            src="/assets/images/archidax/codeo kecil.png"
            alt="logo-small"
            className="logo-sm"
          />
          Codeo
        </div>
        <div>
          <img
            style={{ cursor: "pointer" }}
            src="/assets/images/archidax/eth kecil.png"
            alt="logo-small"
            className="logo-sm"
          />
          Ethereum (ETH)
        </div>
      </div>
      <div className="col-2">
        <h4 className="text-white">$349,795.90</h4>
        <h6 className="text-warning2">0.1926.90 BTC</h6>
      </div>
      <div className="col-2">
        <h6 className="card-text text-success">$15.88%</h6>
        <h6 className="card-text text-danger">$15.88%</h6>
      </div>
      <div className="col-4">
        <h6 className="text-white">$50.000,56-545,678 BTC</h6>
        <h6 className="text-white">53,098 ETH-35,78 UIC</h6>
        <h6 className="text-white text-center">-5.54%</h6>
      </div>
    </div>
  );
}

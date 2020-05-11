import React from "react";

export default function Codeo() {
  return (
    <div className="row">
      <div className="col-2 text-white text-center p-0">
        <div>
          <img
            style={{ cursor: "pointer" }}
            src="/assets/images/archidax/codeo kecil.png"
            alt="logo-small"
            className="logo-sm"
            style={{ height: "20px", paddingRight: "2px" }}
          />
          Codeo
        </div>
        <h6>0,4512683 BTC</h6>
        <h6>-0,6%</h6>
        <button type="button" className="btn btn-link text-success">
          Buy
        </button>
        <button type="button" className="btn btn-link text-danger">
          Sell
        </button>
      </div>
      <div className="col-4 makeCenterRow">
        <h4 className="text-white m-0">$349,795.90</h4>
        <h6 className="text-warning2 m-0">0.1926.90 BTC</h6>
        <br />
        <h6 className="text-white m-0">$50.000,56-545,678 BTC</h6>
        <h6 className="text-white m-0">53,098 ETH-35,78 UIC</h6>
      </div>
      <div className="col-2 makeCenterRow ">
        <h6 className="card-text text-success m-1">$15.88%</h6>
        <h6 className="card-text text-danger m-0">$15.88%</h6>
      </div>
      <div
        className="col-4"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          style={{ cursor: "pointer" }}
          src="/assets/images/archidax/archidax logo.png"
          alt="logo-small"
          className="logo-sm text-right"
          style={{ height: "40px" }}
        />
        <p className="text-white text-right m-0">Choose the best exchange</p>
        <p className="text-warning2 text-right m-0">Change price</p>
        <p className="text-warning2 text-right">0.1%</p>
      </div>
    </div>
  );
}

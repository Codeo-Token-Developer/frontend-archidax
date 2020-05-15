import React from "react";

export default function ShowCodeo() {
  return (
    <div className="row">
      <div className="col-4 text-white text-center p-0">
        <div>
          <h3>
            <img
              style={{ cursor: "pointer" }}
              src="/assets/images/archidax/codeo gede.png"
              alt="logo-small"
              className="logo-md"
              style={{ height: "20px", paddingRight: "5px" }}
            />
            Codeo
          </h3>
        </div>
        <h4 className="m-0">0,4512683 BTC</h4>
        <h4 className="m-0">-0,6%</h4>
        <button type="button" className="btn btn-link text-success">
          Buy
        </button>
        <button type="button" className="btn btn-link text-danger">
          Sell
        </button>
      </div>
      <div className="col-5 makeCenterRow">
        <h3 className="text-white m-0">$349,795.90</h3>
        <h5 className="text-warning2 m-0">0.1926.90 BTC</h5>
        <br />
        <h5 className="text-white m-0">$50.000,56-545,678 BTC</h5>
        <h5 className="text-white m-0">53,098 ETH-35,78 UIC</h5>
      </div>
      <div className="col-3 makeCenterRow ">
        <h5 className="card-text text-success m-1">$15.88%</h5>
        <h5 className="card-text text-danger m-0">$15.88%</h5>
      </div>
    </div>
  );
}

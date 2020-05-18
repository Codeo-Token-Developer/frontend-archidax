import React from "react";

export default function LiteoinCard() {
  return (
    <>
      <h5 className="card-title text-center text-warning2">
        <img
          style={{ cursor: "pointer" }}
          src="/assets/images/archidax/ltc kecil.png"
          alt="logo-small"
          className="logo-sm"
          style={{ height: "25px", paddingRight: "10px" }}
        />
        Liteoin (LTC)
      </h5>
      <br />
      <h5 className="card-text text-center text-white m-0">0,4512683 BTC</h5>
      <h6 className="card-text text-center text-success m-1">0,69%</h6>
      <br />
      <div className="text-center">
        <button type="button" className="btn btn-link text-success">
          Buy
        </button>
        <button type="button" className="btn btn-link text-danger">
          Sell
        </button>
      </div>
    </>
  );
}

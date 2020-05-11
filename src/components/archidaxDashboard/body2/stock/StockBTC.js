import React from "react";

export default function StockBTC() {
  return (
    <>
      <div className="row">
        <div className="col-5 makeCenter p-0">Chart</div>
        <div className="col-7 p-2">
          <h6 className="text-center text-white">0,4512683 BTC</h6>
          <h6 className="text-center text-danger">-0,6%</h6>
          <div className=" text-center">
            <button type="button" className="btn btn-link text-success">
              Buy
            </button>
            <button type="button" className="btn btn-link text-danger">
              Sell
            </button>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-12">
          <h5 className="makeSpace p-2">
            0.4512683 BTC <span className="text-success">+0.6%</span>
          </h5>
          <h5 className="makeSpace p-2">
            0.4512683 BTC <span className="text-danger">-1.2%</span>
          </h5>
          <h5 className="makeSpace p-2">
            0.4512683 BTC <span className="text-success">+0.9%</span>
          </h5>
          <h5 className="makeSpace p-2">
            0.4512683 BTC <span className="text-danger">-0.3%</span>
          </h5>
          <h5 className="makeSpace p-2">
            0.4512683 BTC <span className="text-success">+1.5%</span>
          </h5>
          <h5 className="makeSpace p-2">
            0.4512683 BTC <span className="text-danger">-0.6%</span>
          </h5>
          <h5 className="makeSpace p-2">
            0.4512683 BTC <span className="text-success">+0.8%</span>
          </h5>
          <h5 className="makeSpace p-2">
            0.4512683 BTC <span className="text-danger">-0.4%</span>
          </h5>
        </div>
      </div>
    </>
  );
}

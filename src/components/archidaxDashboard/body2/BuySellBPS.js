import React from "react";
import BuyETH from "./BuySell/BuyETH";
import SellETH from "./BuySell/SellETH";

export default function BuySellBPS() {
  return (
    <>
      <div className="table-responsive bg-darkblue">
        <table className="table table-hover ">
          <thead className="bg-warning2">
            <tr>
              <th className="border-top-0 text-black">Buy/Sell BPS</th>
            </tr>
          </thead>
        </table>{" "}
      </div>
      <div class="row bg-darkblue m-0 pb-2">
        <div class="col-6">
          <BuyETH />
        </div>
        <div class="col-6">
          <SellETH />
        </div>
      </div>
    </>
  );
}

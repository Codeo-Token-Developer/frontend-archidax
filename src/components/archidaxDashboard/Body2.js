import React from "react";

import BuySellBPS from "./body2/BuySellBPS";
import MarketCapCard from "./body2/MarketCapCard";
import Stock from "./body2/Stock";

export default function Body2() {
  return (
    <div className="row m-0 p-3 position-relative top-50">
      <div className="col-md-5 col-sm-12 col-xs-12">
        <BuySellBPS />
      </div>
      <div className="col-md-5 col-sm-12 col-xs-12 p-0">
        <MarketCapCard />
      </div>
      <div className="col-md-2 col-sm-12 col-xs-12">
        <Stock />
      </div>
    </div>
  );
}

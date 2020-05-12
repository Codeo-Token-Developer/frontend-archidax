import React from "react";

import MarketCapTable from "./body1/MarketCapTable";
import Chart from "./body1/Chart";

export default function Body1() {
  return (
    <div className="row m-0 p-3 mt-5 position-relative top-50">
      <div className="col-md-7 col-sm-12 col-xs-12">
        <MarketCapTable />
      </div>
      <div className="col-md-5 col-sm-12 col-xs-12">
        <Chart />
      </div>
    </div>
  );
}

import React from "react";

import LeftSide from "./body1/LeftSide";
import RightSide from "./body1/RIghtSide";

export default function Body1() {
  return (
    <div className="row m-0 p-3  position-relative top-50">
      <div className="col-md-6 col-sm-12 col-xs-12">
        <LeftSide />
      </div>
      <div className="col-md-6 col-sm-12 col-xs-12">
        <RightSide />
      </div>
    </div>
  );
}

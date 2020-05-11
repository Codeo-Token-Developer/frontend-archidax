import React from "react";

export default function HeaderMiddle() {
  return (
    <div className="row bg-subaru makeCenter" style={{ height: "80px" }}>
      <div className="col-6 text-white text-center">
        <h5 className="text-white text-left">5Y change</h5>
        <h6 className="text-warning2 text-left">6,149%</h6>
      </div>
      <div className="col-6 ">
        <h5 className="text-white text-left">Market Cap</h5>
        <h6 className="text-warning2 text-left">$126.98 B</h6>
      </div>
    </div>
  );
}

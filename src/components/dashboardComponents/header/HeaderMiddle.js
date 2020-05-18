import React from "react";

export default function HeaderMiddle() {
  return (
    <div className="row bg-subaru makeCenter" style={{ height: "80px" }}>
      <div className="col-6 text-white text-center">
        <h4 className="text-white text-center">5Y change</h4>
        <h5 className="text-warning2 text-center">6,149%</h5>
      </div>
      <div className="col-6 ">
        <h4 className="text-white text-center">Market Cap</h4>
        <h5 className="text-warning2 text-center">$126.98 B</h5>
      </div>
    </div>
  );
}

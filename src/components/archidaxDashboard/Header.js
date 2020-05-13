import React from "react";

import HeaderLeft from "./header/HeaderLeft";
import HeaderMiddle from "./header/HeaderMiddle";
import HeaderRight from "./header/HeaderRight";

export default function Header() {
  return (
    <div className="topbar bg-darkblue">
      <div className="row makeCenter" style={{ height: "100px" }}>
        <div className="col-6">
          <HeaderLeft />
        </div>
        <div className="col-2">
          <HeaderMiddle />
        </div>
        <div className="col-3">
          <HeaderRight />
        </div>
      </div>
    </div>
  );
}

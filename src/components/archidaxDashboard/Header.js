import React from "react";

import Navbar from "./header/Navbar";
import HeaderMiddle from "./header/HeaderMiddle";
import HeaderRight from "./header/HeaderRight";

export default function Header() {
  return (
    <div className="topbar bg-darkblue">
      <div className="row makeCenter" style={{ height: "100px" }}>
        <div className="col-6">
          <Navbar />
        </div>
        <div className="col-2">
          <HeaderMiddle />
        </div>
        <div className="col-4">
          <HeaderRight />
        </div>
      </div>
    </div>
  );
}

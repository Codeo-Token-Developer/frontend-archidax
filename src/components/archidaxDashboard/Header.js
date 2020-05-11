import React from "react";

import Navbar from "./header/Navbar";
import HeaderMiddle from "./header/HeaderMiddle";
import HeaderRight from "./header/HeaderRight";

export default function Header() {
  return (
    <div class="topbar bg-darkblue">
      <div className="row makeCenter" style={{ height: "100px" }}>
        <div CLASS="col-6">
          <Navbar />
        </div>
        <div CLASS="col-2">
          <HeaderMiddle />
        </div>
        <div CLASS="col-4">
          <HeaderRight />
        </div>
      </div>
    </div>
  );
}

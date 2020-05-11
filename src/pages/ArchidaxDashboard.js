import React from "react";

import Body1 from "../components/archidaxDashboard/Body1";
import Body2 from "../components/archidaxDashboard/Body2";
import Bottom from "../components/archidaxDashboard/Bottom";

export default function ArchidaxDashboard() {
  return (
    <div className="mt-5">
      <Body1 />
      <Body2 />
      <Bottom />
    </div>
  );
}

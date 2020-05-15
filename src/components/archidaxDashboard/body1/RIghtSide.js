import React from "react";

import Chat from "./Chat";
import News from "./newsPage/News";
import ShowMarket from "./ShowMarket";

export default function RightSide() {
  return (
    <>
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <ShowMarket />
          </div>
        </div>
      </div>
      <br />
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <Chat />
          </div>
        </div>
      </div>
      <br />
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <News />
          </div>
        </div>
      </div>
    </>
  );
}

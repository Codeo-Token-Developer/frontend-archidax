import React from "react";

import Chat from "./Chat";
import ShowMarket from "./ShowMarket";
import News from "./newsPage/News";

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

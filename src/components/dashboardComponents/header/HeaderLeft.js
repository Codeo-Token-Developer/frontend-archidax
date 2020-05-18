import React from "react";
import { Link } from "react-router-dom";

export default function HeaderLeft() {
  return (
    <div className="row">
      <div className="col-4 makeCenter">
        <div className="logo">
          <Link to={`/`}>
            <img
              style={{ cursor: "pointer" }}
              src="/assets/images/archidax/archidax logo.png"
              alt="logo-small"
              className="logo-sm"
              style={{ height: "55px" }}
            />
          </Link>
        </div>
      </div>
      <div className="col-2 makeCenter">
        <Link to={"/"}>
          <h4 className="text-warning2 text-center">Dashboard</h4>
        </Link>
      </div>
      <div className="col-2 text-white text-center makeCenter">
        <Link to={"/"}>
          <h4 className="text-white text-center">Promotion</h4>
        </Link>
      </div>
      <div className="col-2 text-white text-center makeCenter">
        <Link to={"/"}>
          <h4 className="text-white text-center">Trending</h4>
        </Link>
      </div>
      <div className="col-2 text-white text-center makeCenter">
        <Link to={"/"}>
          <h4 className="text-white text-center">Tools</h4>
        </Link>
      </div>
    </div>
  );
}

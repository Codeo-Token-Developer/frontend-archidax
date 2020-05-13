import React from "react";

export default function LanguageHeader() {
  return (
    <>
      <li className="hidden-sm liNone">
        <a
          className="nav-link dropdown-toggle waves-effect waves-light"
          data-toggle="dropdown"
          href="javascript: void(0);"
          role="button"
          aria-haspopup="false"
          aria-expanded="false"
        >
          English{" "}
          <img
            src="assets/images/flags/us_flag.jpg"
            className="ml-2"
            height="16"
            alt=""
          />{" "}
          <i className="mdi mdi-chevron-down"></i>
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <a className="dropdown-item" href="javascript: void(0);">
            <span> German </span>
            <img
              src="assets/images/flags/germany_flag.jpg"
              alt=""
              className="ml-2 float-right"
              height="14"
            />
          </a>
          <a className="dropdown-item" href="javascript: void(0);">
            <span> Italian </span>
            <img
              src="assets/images/flags/italy_flag.jpg"
              alt=""
              className="ml-2 float-right"
              height="14"
            />
          </a>
          <a className="dropdown-item" href="javascript: void(0);">
            <span> French </span>
            <img
              src="assets/images/flags/french_flag.jpg"
              alt=""
              className="ml-2 float-right"
              height="14"
            />
          </a>
          <a className="dropdown-item" href="javascript: void(0);">
            <span> Spanish </span>
            <img
              src="assets/images/flags/spain_flag.jpg"
              alt=""
              className="ml-2 float-right"
              height="14"
            />
          </a>
          <a className="dropdown-item" href="javascript: void(0);">
            <span> Russian </span>
            <img
              src="assets/images/flags/russia_flag.jpg"
              alt=""
              className="ml-2 float-right"
              height="14"
            />
          </a>
        </div>
      </li>
    </>
  );
}

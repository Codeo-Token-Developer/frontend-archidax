import React from "react";

export default function ProfileHeader() {
  return (
    <>
      <li className="dropdown liNone">
        <a
          className="nav-link dropdown-toggle waves-effect waves-light nav-user pr-0"
          data-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="false"
          aria-expanded="false"
        >
          <img
            src="assets/images/users/user-4.jpg"
            alt="profile-user"
            className="rounded-circle"
          />
          <span className="ml-1 nav-user-name hidden-sm">
            Handrawan <i className="mdi mdi-chevron-down"></i>{" "}
          </span>
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <a className="dropdown-item" href="#">
            <i className="dripicons-user text-muted mr-2"></i> Profile
          </a>
          <a className="dropdown-item" href="#">
            <i className="dripicons-wallet text-muted mr-2"></i> My Wallet
          </a>
          <a className="dropdown-item" href="#">
            <i className="dripicons-gear text-muted mr-2"></i> Settings
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">
            <i className="dripicons-exit text-muted mr-2"></i> Logout
          </a>
        </div>
      </li>
    </>
  );
}

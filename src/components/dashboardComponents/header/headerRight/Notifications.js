import React from "react";

export default function Notifications() {
  return (
    <>
      <li className="dropdown notification-list liNone">
        <a
          className="nav-link dropdown-toggle arrow-none waves-light waves-effect"
          data-toggle="dropdown"
          href="#a1"
          role="button"
          aria-haspopup="false"
          aria-expanded="false"
        >
          <i className="dripicons-bell noti-icon" />
          <span className="badge badge-danger badge-pill noti-icon-badge">
            2
          </span>
        </a>
        <div className="dropdown-menu dropdown-menu-right dropdown-lg">
          {/* item*/}
          <h6 className="dropdown-item-text">Notifications (18)</h6>
          <div className="slimscroll notification-list">
            {/* item*/}
            <a href="#a" className="dropdown-item notify-item active">
              <div className="notify-icon bg-success">
                <i className="mdi mdi-cart-outline" />
              </div>
              <p className="notify-details">
                Your order is placed
                <small className="text-muted">
                  Dummy text of the printing and typesetting industry.
                </small>
              </p>
            </a>
            {/* item*/}
            <a href="#b" className="dropdown-item notify-item">
              <div className="notify-icon bg-warning">
                <i className="mdi mdi-message" />
              </div>
              <p className="notify-details">
                New Message received
                <small className="text-muted">
                  You have 87 unread messages
                </small>
              </p>
            </a>
            {/* item*/}
            <a href="#C" className="dropdown-item notify-item">
              <div className="notify-icon bg-info">
                <i className="mdi mdi-glass-cocktail" />
              </div>
              <p className="notify-details">
                Your item is shipped
                <small className="text-muted">
                  It is a long established fact that a reader will
                </small>
              </p>
            </a>
            {/* item*/}
            <a href="#Yourorderisplaced" className="dropdown-item notify-item">
              <div className="notify-icon bg-primary">
                <i className="mdi mdi-cart-outline" />
              </div>
              <p className="notify-details">
                Your order is placed
                <small className="text-muted">
                  Dummy text of the printing and typesetting industry.
                </small>
              </p>
            </a>
            {/* item*/}
            <a href="#NewMessageReceived" className="dropdown-item notify-item">
              <div className="notify-icon bg-danger">
                <i className="mdi mdi-message" />
              </div>
              <p className="notify-details">
                New Message received
                <small className="text-muted">
                  You have 87 unread messages
                </small>
              </p>
            </a>
          </div>
          {/* All*/}
          <a href="#ViewAll" className="dropdown-item text-center text-primary">
            View all <i className="fi-arrow-right" />
          </a>
        </div>
      </li>
    </>
  );
}

import React from "react";

export default function HeaderRight() {
  return (
    <div className="row makeCenter">
      <div className="col-3 text-white text-center ">
        <h5 className="text-white text-right">$ 73,514,72</h5>
        <h6 className="text-warning2 text-right">0.1826 BTC</h6>
      </div>
      <div className="col-2">
        <h5 className="text-success text-right">$14.66</h5>
        <h6 className="text-danger text-right">$14.66</h6>
      </div>
      <div className="col-5">
        <h6 className="text-warning2">$5.982.176.123 - 59,412.00 BTC</h6>
        <h6 className="text-warning2">4.123.156ETH - 2.567.00 BTC</h6>
      </div>
      <div className="col-1">
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
              <a
                href="#Yourorderisplaced"
                className="dropdown-item notify-item"
              >
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
              <a
                href="#NewMessageReceived"
                className="dropdown-item notify-item"
              >
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
            <a
              href="#ViewAll"
              className="dropdown-item text-center text-primary"
            >
              View all <i className="fi-arrow-right" />
            </a>
          </div>
        </li>
      </div>
    </div>
  );
}

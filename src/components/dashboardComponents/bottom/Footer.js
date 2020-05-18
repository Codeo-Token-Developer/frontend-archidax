import React from "react";

export default function Footer() {
  return (
    <div className="bg-subaru">
      <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
        <div className="row" style={{ paddingTop: "5%", paddingBottom: "5%" }}>
          <div
            className="col-md-2 col-sm-6 col-xs-12"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="footer_logo">
              <img
                style={{ cursor: "pointer" }}
                src="/assets/images/archidax/archidax logo.png"
                alt="logo-small"
                className="logo-sm text-right"
                style={{ height: "60px" }}
              />
            </div>
            <h5 className="text-white">
              Investments and employment Blockchain Technologies. Optimize your
              business blockchain technology and Smart Contracts.
            </h5>
          </div>
          <div className="col-md-1 col-sm-0 col-xs-0"></div>
          <div className="col-md-2 col-sm-6 col-xs-12 text-white">
            <div className="main-heading left_text">
              <h2>Quick links</h2>
            </div>
            <hr />
            <ul
              style={{
                listStyle: "none",
                fontSize: "14px",
                marginLeft: "0",
                paddingLeft: "0",
              }}
            >
              <li style={{}}>
                <a
                  href="#"
                  className="footer-vertical-block text-white text-left"
                >
                  <i
                    class="fa fa-angle-right"
                    style={{ paddingRight: "10px" }}
                  ></i>{" "}
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="footer-vertical-block text-white">
                  <i
                    class="fa fa-angle-right"
                    style={{ paddingRight: "10px", paddingTop: "10px" }}
                  ></i>{" "}
                  Market
                </a>
              </li>
              <li>
                <a href="#" className="footer-vertical-block text-white">
                  <i
                    class="fa fa-angle-right"
                    style={{ paddingRight: "10px", paddingTop: "10px" }}
                  ></i>{" "}
                  Add Bitcoin/Token
                </a>
              </li>
              <li>
                <a href="#" className="footer-vertical-block text-white">
                  <i
                    class="fa fa-angle-right"
                    style={{ paddingRight: "10px", paddingTop: "10px" }}
                  ></i>{" "}
                  IEO
                </a>
              </li>
              <li>
                <a href="#" className="footer-vertical-block text-white">
                  <i
                    class="fa fa-angle-right"
                    style={{ paddingRight: "10px", paddingTop: "10px" }}
                  ></i>{" "}
                  News
                </a>
              </li>
              <li>
                <a href="#" className="footer-vertical-block text-white">
                  <i
                    class="fa fa-angle-right"
                    style={{ paddingRight: "10px", paddingTop: "10px" }}
                  ></i>{" "}
                  Earn
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-0 col-xs-0"></div>
          <div className="col-md-3 col-sm-12 col-xs-12 makeCenterRow">
            <div className="main-heading left_text">
              <h2 className="text-white">Newsletter Signup</h2>
            </div>
            <hr />
            <h4 className="text-white text-left">
              Get latest updates, news, <br />
              surveys &amp; offers
            </h4>
            {/* <div className="footer_mail-section" style="width: 90%;">
            <form>
              <fieldset>
                <div className="field">
                  <input placeholder="Email" type="text" />
                  <button className="button_custom">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </button>
                </div>
              </fieldset>
            </form>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

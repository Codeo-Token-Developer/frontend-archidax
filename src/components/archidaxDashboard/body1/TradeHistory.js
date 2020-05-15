import React from "react";
import CodeoTradeHistory from "./tradeHistory/CodeoTradeHistory";
import BTCTradeHistory from "./tradeHistory/BTCTradeHistory";
import BNBTradeHIstory from "./tradeHistory/BNBTradeHistory";
import ETHTradeHistory from "./tradeHistory/ETHTradeHistory";
import TRXTradeHistory from "./tradeHistory/TRXTradeHistory";
import LTCTradeHistory from "./tradeHistory/LTCTradeHistory";

export default function TradeHistory() {
  return (
    <>
      {/* <div className="table-responsive">
        <table className="table table-hover mb-0">
          <thead className="bg-warning2">
            <tr>
              <th className="border-top-0 text-center text-black">
                Market Pair
              </th>
              <th className="border-top-0 text-center text-black">Price</th>
              <th className="border-top-0 text-center text-black">
                Volume 24H
              </th>
              <th className="border-top-0 text-center text-black">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            <BTCTradeHistory />
          </tbody>
        </table>{" "}
      </div> */}

      <section id="tabs" class="project-tab">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <nav>
                <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                  <a
                    class="nav-item nav-link active"
                    id="nav-codeo-tab"
                    data-toggle="tab"
                    href="#nav-codeo"
                    role="tab"
                    aria-controls="nav-codeo"
                    aria-selected="true"
                  >
                    CODEO
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="nav-btc-tab"
                    data-toggle="tab"
                    href="#nav-btc"
                    role="tab"
                    aria-controls="nav-btc"
                    aria-selected="false"
                  >
                    BTC
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="nav-bnb-tab"
                    data-toggle="tab"
                    href="#nav-bnb"
                    role="tab"
                    aria-controls="nav-bnb"
                    aria-selected="false"
                  >
                    BNB
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="nav-eth-tab"
                    data-toggle="tab"
                    href="#nav-eth"
                    role="tab"
                    aria-controls="nav-eth"
                    aria-selected="false"
                  >
                    ETH
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="nav-trx-tab"
                    data-toggle="tab"
                    href="#nav-trx"
                    role="tab"
                    aria-controls="nav-trx"
                    aria-selected="false"
                  >
                    TRX
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="nav-ltc-tab"
                    data-toggle="tab"
                    href="#nav-ltc"
                    role="tab"
                    aria-controls="nav-ltc"
                    aria-selected="false"
                  >
                    LTC
                  </a>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-codeo"
                  role="tabpanel"
                  aria-labelledby="nav-codeo-tab"
                >
                  <CodeoTradeHistory />
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-btc"
                  role="tabpanel"
                  aria-labelledby="nav-btc-tab"
                >
                  <BTCTradeHistory />
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-bnb"
                  role="tabpanel"
                  aria-labelledby="nav-bnb-tab"
                >
                  <BNBTradeHIstory />
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-eth"
                  role="tabpanel"
                  aria-labelledby="nav-eth-tab"
                >
                  <ETHTradeHistory />
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-trx"
                  role="tabpanel"
                  aria-labelledby="nav-trx-tab"
                >
                  <TRXTradeHistory />
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-ltc"
                  role="tabpanel"
                  aria-labelledby="nav-ltc-tab"
                >
                  <LTCTradeHistory />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

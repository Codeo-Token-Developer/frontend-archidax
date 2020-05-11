import React from "react";

export default function BitcoinTable() {
  return (
    <>
      <tr className="bg-subaru">
        <th
          className="border-top-0 text-center text-warning2"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            style={{ cursor: "pointer" }}
            src="/assets/images/archidax/btc kecil.png"
            alt="logo-small"
            className="logo-sm"
            style={{ height: "30px", paddingRight: "10px" }}
          />
          <h4>Bitcoin (BTC)</h4>
        </th>
        <th className="border-top-0 text-center text-white">
          <h6>
            $50.000,56 - 545,678 BTC
            <br />
            53,098ETH - 35,78 BTC
          </h6>
        </th>
        <th className="border-top-0 text-center text-warning2">
          <h6>$554,678.0</h6>
        </th>
        <th className="border-top-0 text-center text-success">
          <h6>34%</h6>
        </th>
        <th className="border-top-0 text-center text-success">
          <h6>$18.27</h6>
        </th>
      </tr>
    </>
  );
}

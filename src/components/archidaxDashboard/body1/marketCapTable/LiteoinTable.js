import React from "react";

export default function LiteoinTable() {
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
            src="/assets/images/archidax/ltc kecil.png"
            alt="logo-small"
            className="logo-sm"
            style={{ height: "30px", paddingRight: "10px" }}
          />
          <h4>Liteoin (LTC)</h4>
        </th>
        <th className="border-top-0 text-center text-white">
          <h5>
            $50.000,56 - 545,678 BTC
            <br />
            53,098ETH - 35,78 BTC
          </h5>
        </th>
        <th className="border-top-0 text-center text-warning2">
          <h5>$554,678.0</h5>
        </th>
        <th className="border-top-0 text-center text-success">
          <h5>34%</h5>
        </th>
      </tr>
    </>
  );
}

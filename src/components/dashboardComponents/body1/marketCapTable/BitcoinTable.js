import React from "react";

export default function BitcoinTable() {
  return (
    <>
      <tr className="bg-subaru">
        <td
          className="border-top-0 text-center text-warning2 verticalCenter"
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
        </td>
        <td className="border-top-0 text-center text-white verticalCenter">
          <h5>
            $50.000,56 - 545,678 BTC
            <br />
            53,098Etd - 35,78 BTC
          </h5>
        </td>
        <td className="border-top-0 text-center text-warning2 verticalCenter">
          <h5>$554,678.0</h5>
        </td>
        <td className="border-top-0 text-center text-success verticalCenter">
          <h5>34%</h5>
        </td>
      </tr>
    </>
  );
}

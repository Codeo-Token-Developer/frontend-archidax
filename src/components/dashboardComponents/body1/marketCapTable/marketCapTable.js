import React from "react";

export default function marketCapTable() {
  return (
    <>
      <tr className="bg-subaru">
        <th
          className="border-top-0 text-center text-warning2 verticalCenter"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            style={{ cursor: "pointer" }}
            src="/assets/images/archidax/bnb kecil.png"
            alt="logo-small"
            className="logo-sm"
            style={{ height: "30px", paddingRight: "10px" }}
          />
          <h4>{props.title}</h4>
        </th>
        <th className="border-top-0 text-center text-white verticalCenter">
          <h5>
            {props.marketCap1}
            <br />
            {props.marketCap2}
          </h5>
        </th>
        <th className="border-top-0 text-center text-warning2 verticalCenter">
          <h5>{props.price}</h5>
        </th>
        <th className="border-top-0 text-center text-success verticalCenter">
          <h5>{props.change}</h5>
        </th>
      </tr>
    </>
  );
}

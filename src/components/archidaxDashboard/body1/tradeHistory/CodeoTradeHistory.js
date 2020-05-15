import React from "react";

export default function CodeoTradeHistory() {
  return (
    <table class="table" cellspacing="0">
      <thead>
        <tr>
          <th className="border-top-0 text-center text-black">Market Pair</th>
          <th className="border-top-0 text-center text-black">Price</th>
          <th className="border-top-0 text-center text-black">Volume 24H</th>
          <th className="border-top-0 text-center text-black">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border-top-0 text-center text-white verticalCenter">
            <h5>BTC/USD</h5>
          </td>
          <td className="border-top-0 text-center text-white verticalCenter">
            <h5>$10.000</h5>
          </td>
          <td className="border-top-0 text-center text-white verticalCenter">
            <h5>271 BTC</h5>
          </td>
          <td className="border-top-0 text-center text-white verticalCenter">
            <button type="button" class="btn btn-primary mr-1">
              Wallet
            </button>
            <button type="button" class="btn btn-danger ml-1">
              Trade
            </button>
          </td>
        </tr>
        <tr>
          <td className="border-top-0 text-center text-white verticalCenter">
            <h5>CODEO/USD</h5>
          </td>
          <td className="border-top-0 text-center text-white verticalCenter">
            <h5>$200</h5>
          </td>
          <td className="border-top-0 text-center text-white verticalCenter">
            <h5>271 BTC</h5>
          </td>
          <td className="border-top-0 text-center text-white verticalCenter">
            <button type="button" class="btn btn-primary mr-1">
              Wallet
            </button>
            <button type="button" class="btn btn-danger ml-1">
              Trade
            </button>
          </td>
        </tr>
        <tr>
          <td className="border-top-0 text-center text-white verticalCenter">
            <h5>BTC/USD</h5>
          </td>
          <td className="border-top-0 text-center text-white verticalCenter">
            <h5>$235</h5>
          </td>
          <td className="border-top-0 text-center text-white verticalCenter">
            <h5>271 BTC</h5>
          </td>
          <td className="border-top-0 text-center text-white verticalCenter">
            <button type="button" class="btn btn-primary mr-1">
              Wallet
            </button>
            <button type="button" class="btn btn-danger ml-1">
              Trade
            </button>
          </td>
        </tr>
        <tr>
          <td className="border-top-0 text-center text-white verticalCenter">
            <h5>BTC/USD</h5>
          </td>
          <td className="border-top-0 text-center text-white verticalCenter">
            <h5>$500</h5>
          </td>
          <td className="border-top-0 text-center text-white verticalCenter">
            <h5>271 BTC</h5>
          </td>
          <td className="border-top-0 text-center text-white verticalCenter">
            <button type="button" class="btn btn-primary mr-1">
              Wallet
            </button>
            <button type="button" class="btn btn-danger ml-1">
              Trade
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

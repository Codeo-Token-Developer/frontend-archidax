import React from "react";

export default function SellETH() {
  return (
    <>
      <div className="bg-darkblue p-2 m-0">
        <div className="bg-subaru p-3 m-0">
          <form>
            <p className="text-warning2 m-0 mb-1">Sell ETH</p>
            <p className="text-warning2 text-right m-0 mb-2">
              Available BTC{" "}
              <span className="text-white bg-darkblue padding5">1234,76</span>
            </p>

            <div>
              <label for="exampleInputPassword1">Price</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control bg-darkblue"
                  placeholder="0,013874"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    BTC
                  </span>
                </div>
              </div>
            </div>
            <div>
              <label for="exampleInputPassword1">Amount</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control bg-darkblue"
                  placeholder="178,923"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    ETH
                  </span>
                </div>
              </div>
            </div>
            <div>
              <p
                style={{ display: "flex", justifyContent: "space-between" }}
                className="text-white"
              >
                Total <span className="text-info">18,007.9 BTC</span>
              </p>
            </div>
            <div>
              <p
                style={{ display: "flex", justifyContent: "space-between" }}
                className="text-white"
              >
                Fee <span className="text-info">0,1% x 178,923 = 178,9</span>
              </p>
            </div>
            <br />
            <br />
            <div>
              <p
                style={{ display: "flex", justifyContent: "space-between" }}
                className="text-white"
              >
                Estimated total price{" "}
                <span className="text-info">18.007.9 BTC</span>
              </p>
            </div>
            <br />
            <button type="button" class="btn btn-danger col-12">
              Sell ETH
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

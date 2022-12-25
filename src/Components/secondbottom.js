import React from "react";

function Secondbottom() {
  return (
    <div className="pl-20 pr-20 bg-gray-100">
      <div className="pb-10">
        <div className="pl-10 pr-10 pt-10">
          <hr className="solid" />
        </div>
        <h1 className="pt-5 font-semibold text-2xl text-center p-5">
          More Articles
        </h1>
        <div className="pl-10 pr-10 pb-10">
          <hr className="thinline" />
        </div>

        <div className="justify-center flex">
          <div className="cards grid grid-cols-3">
            <div className="card">
              <img
                className="pb-2 cursor-pointer"
                src="https://thumbor.forbes.com/thumbor/fit-in/365x/https://www.forbes.com/advisor/au/wp-content/uploads/2022/12/telstra-super-scaled.jpg"
              />

              <h2 className="font-bold text-left pb-2 cursor-pointer hover:underline">
                Telstra Super Superannuation Review
              </h2>
              <p className="text-xs cursor-pointer hover:underline">
                By Sophie Venz Editor
              </p>
            </div>
            <div className="card">
              <img
                className="pb-2 cursor-pointer"
                src="https://thumbor.forbes.com/thumbor/fit-in/365x/https://www.forbes.com/advisor/au/wp-content/uploads/2022/12/capital-gains-discount-scaled.jpg"
              />
              <h2 className="font-bold text-left pb-2 cursor-pointer hover:underline">
                What Is The Capital Gains Discount?
              </h2>
              <p className="text-xs cursor-pointer hover:underline">
                By Penny Pryor Contributor
              </p>
            </div>{" "}
            <div className="card">
              <img
                className="pb-2 cursor-pointer"
                src="https://thumbor.forbes.com/thumbor/fit-in/365x/https://www.forbes.com/advisor/au/wp-content/uploads/2022/12/australian-retirement-trust-scaled.jpg"
              />
              <h2 className="font-bold text-left pb-2 cursor-pointer hover:underline">
                Australian Retirement Trust Superannuation Review
              </h2>
              <p className="text-xs cursor-pointer hover:underline">
                By Sophie Venz Editor
              </p>
            </div>{" "}
            <div className="card">
              <img
                className="pb-2 cursor-pointer"
                src="https://thumbor.forbes.com/thumbor/fit-in/365x/https://www.forbes.com/advisor/au/wp-content/uploads/2022/12/mortgage-broker-scaled.jpg"
              />
              <h2 className="font-bold text-left pb-2 cursor-pointer hover:underline">
                What Does a Mortgage Broker Do?
              </h2>
              <p className="text-xs cursor-pointer hover:underline">
                By Jessica Mudditt Contributor
              </p>
            </div>{" "}
            <div className="card">
              <img
                className="pb-2 cursor-pointer"
                src="https://thumbor.forbes.com/thumbor/fit-in/365x/https://www.forbes.com/advisor/au/wp-content/uploads/2022/12/australian-super-review-scaled.jpg"
              />
              <h2 className="font-bold text-left pb-2 cursor-pointer hover:underline">
                Australian Super Superannuation Review
              </h2>
              <p className="text-xs cursor-pointer hover:underline">
                By Sophie Venz Editor
              </p>
            </div>{" "}
            <div className="card">
              <img
                className="pb-2 cursor-pointer"
                src="https://thumbor.forbes.com/thumbor/fit-in/365x/https://www.forbes.com/advisor/au/wp-content/uploads/2022/12/bitgert-blockchain-scaled.jpg"
              />
              <h2 className="font-bold text-left pb-2 cursor-pointer hover:underline">
                Bitgert: A Scam Or A Good Investment?
              </h2>
              <p className="text-xs cursor-pointer hover:underline">
                By Patrick McGimpsey Contributor
              </p>
            </div>{" "}
          </div>
        </div>

        <div className="pl-10 pr-10">
          <hr className="thinline" />
        </div>
        <div className="p-3 flex justify-center">
          <h1 className="font-semibold text-center text-blue-500 cursor-pointer hover:underline">
            View More Articles
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Secondbottom;

import React from "react";

function Firstbottom() {
  return (
    <div className="pl-20 pr-20 bg-gray-50">
      <div className="p-20">
        <div className="pb-5 pr-10 justify-center">
          <hr className="solid" />
        </div>
        <div>
          <h1 className="text-4xl font-bold pb-10">
            Helping you make Smart Financial Decisions
          </h1>
        </div>

        {/* text and image section */}
        <div className="grid grid-cols-2">
          <div className="pt-7">
            <div className="p-2 rounded-2xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:rounded-2xl hover:scale-110 hover:bg-indigo-500 duration-150">
              <h1 className="font-bold text-lg">Understanding</h1>

              <p className="p-5">
                We have a team of seasoned financial journalists who can explain
                how to identify and secure the right financial product for your
                needs
              </p>
            </div>

            <div className="p-2 rounded-2xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:rounded-2xl hover:scale-110 hover:bg-indigo-500 duration-150">
              <h2 className="font-bold text-lg">Finding The Best Deal</h2>
              <p className="p-5 ">
                We work with a wide range of financial companies and utility
                services so we can present you with a choice of high quality,
                good value products
              </p>
            </div>

            <div className="p-2 rounded-2xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:rounded-2xl hover:scale-110 hover:bg-indigo-500 duration-150">
              <h3 className="font-bold text-lg">
                Making the most of your money
              </h3>
              <p className="p-5">
                Taking control of your household and personal finances means
                your money will work as hard for you as you worked to earn it
              </p>
            </div>
          </div>

          <div className="justify-center hidden md:inline-flex">
            <img
              src="https://thumbor.forbes.com/thumbor/fit-in/419x/https://www.forbes.com/advisor/au/wp-content/uploads/2022/07/Making-the-mos-of-your-money.png"
              alt=""
            />
          </div>
        </div>

        {/* text and image section END*/}
      </div>
    </div>
  );
}

export default Firstbottom;

import React from "react";

function Testing() {
  return (
    <div className="">
      <div className="pl-5 cursor-pointer">
        <img
          src="https://thumbor.forbes.com/thumbor/fit-in/600x300/https://www.forbes.com/advisor/wp-content/uploads/2022/02/2291_10006590-removebg-preview.png"
          alt="credit-card"
          width="150px"
        />
      </div>

      <div className="pl-4 mt-5 mb-5 rounded-full">
        <div className="pr-2 mt-2 ">
          {/* inside div start*/}
          <div className="flex">
            <h1 className="text-2xl">5.0</h1>
            <h1 className="pl-2">⭐⭐⭐⭐⭐</h1>
          </div>
        </div>

        <div className="pl-10 pb-1">
          <img
            src="https://www.forbes.com/advisor/wp-content/themes/fadv/assets/img/fb-rating-logo.svg"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Testing;

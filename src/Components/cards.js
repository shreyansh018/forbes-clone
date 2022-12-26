import React from "react";

function Cards() {
  return (
    <div className="bodybackground pl-20 pr-20">
      <div className="pl-10 pr-10">
        <div className="grid grid-row-5 lg:grid-cols-5">
          {/* upper container */}
          <div className="bg-white ml-10 mr-10 rounded-lg p-5 cursor-pointer transition ease-in-out delay-100 hover:rounded-lg hover:scale-125">
            <div className="flex justify-center">
              <img
                src="https://www.forbes.com/advisor/au/wp-content/uploads/2022/09/icon-card.svg"
                width="50px"
              />
            </div>
            <div className="flex justify-center">
              <h1>Credit Cards</h1>
            </div>
          </div>

          <div className="bg-white ml-10 mr-10 rounded-lg p-5 cursor-pointer transition ease-in-out delay-100 hover:rounded-lg hover:scale-125">
            <div className="flex justify-center">
              <img
                src="https://www.forbes.com/advisor/au/wp-content/uploads/2022/09/Best-Retirement-Plans.svg"
                width="50px"
              />
            </div>
            <div className="flex justify-center">
              <h1>Superannuation</h1>
            </div>
          </div>

          <div className="bg-white ml-10 mr-10 rounded-lg p-5 cursor-pointer transition ease-in-out delay-100 hover:rounded-lg hover:scale-125">
            <div className="flex justify-center">
              <img
                src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/au/wp-content/uploads/2022/09/car-insurance.png"
                width="50px"
              />
            </div>
            <div className="flex justify-center">
              <h1>Car Insurance</h1>
            </div>
          </div>

          <div className="bg-white ml-10 mr-10 rounded-lg p-5 cursor-pointer transition ease-in-out delay-100 hover:rounded-lg hover:scale-125">
            <div className="flex justify-center">
              <img
                src="https://www.forbes.com/advisor/au/wp-content/uploads/2022/09/Private-health-insurance-1.svg"
                width="50px"
              />
            </div>
            <div className="flex justify-center">
              <h1>Health Insurance</h1>
            </div>
          </div>

          <div className="bg-white ml-10 mr-10 rounded-lg p-5 cursor-pointer transition ease-in-out delay-100 hover:rounded-lg hover:scale-125">
            <div className="flex justify-center">
              <img
                src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/au/wp-content/uploads/2022/09/life-insurance.png"
                width="50px"
              />
            </div>
            <div className="flex justify-center">
              <h1>Life Insurance</h1>
            </div>
          </div>
        </div>

        {/* upper container end */}

        <div className="grid grid-row-5 pt-5 lg:grid-cols-5">
          {/* lower container */}
          <div className="bg-white ml-10 mr-10 rounded-lg p-5 cursor-pointer transition ease-in-out delay-100 hover:rounded-lg hover:scale-125">
            <div className="flex justify-center">
              <img
                src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/au/wp-content/uploads/2022/09/Pet-Insurance-For-Pre-Existing-Conditions.png"
                width="50px"
              />
            </div>

            <div className="flex justify-center">
              <h1>Pet Insurance</h1>
            </div>
          </div>

          <div className="bg-white ml-10 mr-10 rounded-lg p-5 cursor-pointer transition ease-in-out delay-100 hover:rounded-lg hover:scale-125">
            <div className="flex justify-center">
              <img
                src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/au/wp-content/uploads/2022/09/travel-insurance.png"
                width="50px"
              />
            </div>
            <div className="flex justify-center">
              <h1>Travel Insurance</h1>
            </div>
          </div>

          <div className="bg-white ml-10 mr-10 rounded-lg p-5 cursor-pointer transition ease-in-out delay-100 hover:rounded-lg hover:scale-125">
            <div className="flex justify-center">
              <img
                src="https://www.forbes.com/advisor/au/wp-content/uploads/2022/09/home-insurance.svg"
                width="50px"
              />
            </div>
            <div className="flex justify-center">
              <h1>Home Loans</h1>
            </div>
          </div>

          <div className="bg-white ml-10 mr-10 rounded-lg p-5 cursor-pointer transition ease-in-out delay-100 hover:rounded-lg hover:scale-125">
            <div className="flex justify-center">
              <img
                src="https://www.forbes.com/advisor/au/wp-content/uploads/2022/09/Broadband.svg"
                width="50px"
              />
            </div>
            <div className="flex justify-center">
              <h1>Internet</h1>
            </div>
          </div>

          <div className="bg-white ml-10 mr-10 rounded-lg p-5 cursor-pointer transition ease-in-out delay-100 hover:rounded-lg hover:scale-125">
            <div className="flex justify-center">
              <img
                src="https://www.forbes.com/advisor/au/wp-content/uploads/2022/09/icon-card.svg"
                width="50px"
              />
            </div>

            <div className="flex justify-center">
              <h1 className="text-center">Buy Now Pay Later</h1>
            </div>
          </div>
        </div>

        {/* lower container end */}
      </div>
    </div>
  );
}

export default Cards;

import React from "react";

function Cards() {
  return (
    <div className="pl-10 pr-10 bodybackground">
      <div>
        <div className="ml-5 mr-30 w-50vh flex justify-center">
          <div className="column flex">
            <div className="p-10 bg-white rounded-lg cursor-pointer transition ease-in-out delay-75 hover:-translate-y-1 hover:rounded-lg hover:scale-110 duration-150">
              <div className="p-2">
                <img src="https://www.forbes.com/advisor/au/wp-content/uploads/2022/09/icon-card.svg" />
              </div>

              <h1 className="text-justify pt-2">Credit Cards</h1>
            </div>
          </div>
          <div className="column flex">
            <div className="p-10 bg-white rounded-lg cursor-pointer transition ease-in-out delay-75 hover:-translate-y-1 hover:rounded-lg hover:scale-110 duration-150">
              <div className="p-2">
                <img src="https://www.forbes.com/advisor/au/wp-content/uploads/2022/09/Best-Retirement-Plans.svg" />
              </div>

              <h1 className="text-left">Superannuation</h1>
            </div>
          </div>
          <div className="column flex">
            <div className="p-10 bg-white rounded-lg cursor-pointer transition ease-in-out delay-75 hover:-translate-y-1 hover:rounded-lg hover:scale-110 duration-150">
              <img src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/au/wp-content/uploads/2022/09/car-insurance.png" />
              <h1 className="text-left pt-2 pl-2">Car Insurance</h1>
            </div>
          </div>
          <div className="column flex">
            <div className="p-10 bg-white rounded-lg cursor-pointer transition ease-in-out delay-75 hover:-translate-y-1 hover:rounded-lg hover:scale-110 duration-150">
              <img src="https://www.forbes.com/advisor/au/wp-content/uploads/2022/09/Private-health-insurance-1.svg" />
              <h1 className="text-left pt-2 pl-2">Health Insurance</h1>
            </div>
          </div>
          <div className="column flex">
            <div className="p-10 bg-white rounded-lg cursor-pointer transition ease-in-out delay-75 hover:-translate-y-1 hover:rounded-lg hover:scale-110 duration-150">
              <img src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/au/wp-content/uploads/2022/09/life-insurance.png" />
              <h1 className="text-left pt-2 pl-2">Life Insurance</h1>
            </div>
          </div>
        </div>

        <div className="ml-5 mr-30 w-50vh flex justify-center">
          <div className="column flex">
            <div className=" p-10 bg-white rounded-lg cursor-pointer transition ease-in-out delay-75 hover:-translate-y-1 hover:rounded-lg hover:scale-110 duration-150">
              <img src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/au/wp-content/uploads/2022/09/Pet-Insurance-For-Pre-Existing-Conditions.png" />
              <h1 className="text-left pl-2">Pet Insurance</h1>
            </div>
          </div>
          <div className="column flex">
            <div className="p-10 bg-white rounded-lg cursor-pointer transition ease-in-out delay-75 hover:-translate-y-1 hover:rounded-lg hover:scale-110 duration-150">
              <img src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/au/wp-content/uploads/2022/09/travel-insurance.png" />
              <h1 className="text-left pt-2">Travel Insurance</h1>
            </div>
          </div>
          <div className="column flex">
            <div className="p-10 bg-white rounded-lg cursor-pointer transition ease-in-out delay-75 hover:-translate-y-1 hover:rounded-lg hover:scale-110 duration-150">
              <img src="https://www.forbes.com/advisor/au/wp-content/uploads/2022/09/home-insurance.svg" />
              <h1 className="text-left pt-2">Home Loans</h1>
            </div>
          </div>
          <div className="column flex">
            <div className="p-10 bg-white rounded-lg cursor-pointer transition ease-in-out delay-75 hover:-translate-y-1 hover:rounded-lg hover:scale-110 duration-150">
              <img src="https://www.forbes.com/advisor/au/wp-content/uploads/2022/09/Broadband.svg" />
              <h1 className="text-left pt-2">Internet</h1>
            </div>
          </div>
          <div className="column flex">
            <div className="p-10 bg-white rounded-lg cursor-pointer transition ease-in-out delay-75 hover:-translate-y-1 hover:rounded-lg hover:scale-110 duration-150">
              <img src="https://www.forbes.com/advisor/au/wp-content/uploads/2022/09/icon-card.svg" />
              <h1 className="text-left pt-2">Buy Now Pay Later</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

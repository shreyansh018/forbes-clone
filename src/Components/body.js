import React from "react";

function Body() {
  return (
    <div className="pl-10 pr-10 bodybackground">
      <div className="text-left justify-end flex pr-10">
        <h1 className="cursor-pointer font-bold text-lg hover:underline text-white">
          How We Work?
        </h1>
      </div>
      <div className="pl-20 pt-10">
        <div className="grid grid-cols-2 pl-20 pb-5 pt-2">
          <div className="justify-end text-left pt-10 pl-10">
            <h1 className="font-bold text-5xl text-white">
              Smart Financial Decisions Made Simple
            </h1>

            <div className="pt-5">
              <ul class="space-y-4 text-white">
                <li className="flex items-center">
                  <svg
                    class="h-6 w-6 flex-none fill-green-400 stroke-white stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-3 text-sm">
                    Helping you find the right deal
                  </p>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 flex-none fill-green-400 stroke-white stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-3 text-sm">Boosting your market knowledge</p>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 flex-none fill-green-400 stroke-white stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-3 text-sm">Making the most of your money</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden md:inline-flex">
            <img
              src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/au/wp-content/uploads/2022/07/Advisor-Homepage-US.png"
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;

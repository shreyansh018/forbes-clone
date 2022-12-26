import React, { useEffect, useState } from "react";

function Widget() {
  const [Accordian1, setAccordian1] = useState(false);
  const [Accordian2, setAccordian2] = useState(false);
  const [Accordian3, setAccordian3] = useState(false);
  return (
    <div className="p-5">
      <div className=" ml-10 mr-20">
        <h1 className="font-bold text-3xl pb-4">Top Cash-Back Credit Cards</h1>
        <div className="rounded-lg border border-blue-300 py-2">
          {/* inside upper div separation */}
          <div className="grid grid-cols-2">
            {/* left div */}
            <div>
              <div className="grid grid-cols-2 pb-2 mr-20 ml-4">
                <h1 className="text-xs pt-1 pl-7 pb-1 rounded-lg bg-blue-200 font-semibold text-blue-800">
                  BEST CASH BACK, BEST NO ANNUAL FEE CARD
                </h1>
              </div>

              <div>
                <h1 className="pl-7 text-3xl font-bold">Chase Freedom Flex℠</h1>
              </div>
            </div>

            {/* right div */}
            <div className="text-center pt-3 ml-20 mr-20">
              <h1 className="text-white text-2xl font-bold bg-green-500 hover:bg-green-600 hover:duration-200 hover:ease-out duration-200 rounded-lg ml-20 mr-20 p-3 cursor-pointer">
                Apply Now
              </h1>

              <div>
                <h1 className="text-xs pt-3">
                  On Chase Bank USA, NA's Website
                </h1>
              </div>
            </div>
          </div>
          {/* inside upper div separation END */}
          {/* 2nd phase */}
          <div className="flex">
            {/* left div */}
            <div className="pl-5 cursor-pointer">
              <img
                src="https://thumbor.forbes.com/thumbor/fit-in/600x300/https://www.forbes.com/advisor/wp-content/uploads/2022/02/2291_10006590-removebg-preview.png"
                alt="credit-card"
                width="150px"
              />
            </div>

            {/* right div */}

            <div className="bg-yellow-50 pl-10 ml-20 rounded-lg">
              <div className="float-left pr-7 pt-4">
                <img
                  src="https://www.travall.com/media/wysiwyg/images/guarante_img.png"
                  alt=""
                  width="60px"
                />
              </div>
              <div>
                <h1 className="font-sans text-yellow-600 pt-2 font-bold">
                  Up to 5X Reward Rate
                </h1>
              </div>

              <div className="mr-20">
                <h1 className="mr-20 text-sm">
                  Earn 5% cash back in categories that rotate quarterly on up to
                  $1,500 when enrolled, 5% on travel purchased through. Read
                  More
                </h1>
              </div>
            </div>
          </div>
          {/* 2nd phase end */}
          {/* 3rd phase */}
          <div className=" flex pt-1">
            {/* left div */}

            <div className="pl-1">
              <div className="pl-4 border rounded-full mt-5 mb-5">
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

            {/* right div */}

            <div className="pl-10 ml-10 rounded-lg grid grid-cols-4 divide-x-2 pt-3">
              <div>
                <div>
                  <h1 className="text-left text-xs text-gray-400">
                    Welcome Bonus
                  </h1>
                </div>
                <div>
                  <h1 className="text-lg">$200 bonus</h1>
                </div>
              </div>

              <div className="pl-2 pr-2">
                <div>
                  <h1 className="text-left text-xs text-gray-400">
                    Annual Fee
                  </h1>
                </div>
                <div>
                  <h1 className="text-lg">$0</h1>
                </div>
              </div>

              <div className="pl-2 pr-2">
                <div>
                  <h1 className="text-left text-xs text-gray-400">
                    Regular APR
                  </h1>
                </div>
                <div>
                  <h1 className="text-lg ">18.74% - 27.49% Variable</h1>
                </div>
              </div>

              <div>
                <div className="pl-5 pr-5 text-xs ">
                  <h1 className="text-gray-400">Credit Score </h1>
                  <div>
                    <h1 className="text-lg">Excellent, Good (700 - 749)</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3rd phase END */}
          {/* 4th Phase */}
          <div className="pr-20">
            <div className="">
              <div
                onClick={() => setAccordian1((prevState) => !prevState)}
                className="block"
              >
                <div className="pb-2">
                  <h3 className="text-base flex justify-between text-blue-600 w-100 pl-5 text-left relative bg-white hover:underline cursor-pointer">
                    Why we picked it
                    <span className="mt-2">
                      <img
                        className={Accordian1 && "rotate-180"}
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMjkzIDcuMjkzTC43MDcgMS43MDdBMSAxIDAgMDEyLjEyMS4yOTNMNyA1LjE3Mmw0Ljg3OS00Ljg4YTEgMSAwIDExMS40MTQgMS40MTVMNy43MDcgNy4yOTNhMSAxIDAgMDEtMS40MTQgMHoiIGZpbGw9IiMzQTVDQjAiLz48L3N2Zz4="
                      />
                    </span>
                  </h3>
                </div>
                <p
                  className={
                    Accordian1
                      ? "block text-lg leading-6 mb-10 pl-5 pt-2"
                      : "hidden"
                  }
                >
                  This card has the brawn to handle just about all of your
                  credit card spending needs without an over-inflated price tag.
                  The card has an annual fee of $0, yet comes with a pumped-up
                  earnings structure that covers a wide swath of expenses
                  including travel, drugstores and dining plus rotating
                  quarterly bonus categories in areas many households are likely
                  to find appealing.
                </p>
                <div className="border-b-2 ml-5" />
              </div>
              <div
                onClick={() => setAccordian2((prevState) => !prevState)}
                className="block"
              >
                <div className="pb-2 pt-2">
                  <h3 className="text-base flex justify-between text-blue-600 w-100 pl-5 text-left relative bg-white hover:underline cursor-pointer">
                    Pros & Cons
                    <span className="mt-2">
                      <img
                        className={Accordian2 && "rotate-180"}
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMjkzIDcuMjkzTC43MDcgMS43MDdBMSAxIDAgMDEyLjEyMS4yOTNMNyA1LjE3Mmw0Ljg3OS00Ljg4YTEgMSAwIDExMS40MTQgMS40MTVMNy43MDcgNy4yOTNhMSAxIDAgMDEtMS40MTQgMHoiIGZpbGw9IiMzQTVDQjAiLz48L3N2Zz4="
                      />
                    </span>
                  </h3>
                </div>
                <p
                  className={
                    Accordian2 ? "block text-lg leading-6 mb-10 pl-5" : "hidden"
                  }
                >
                  <div className="flex">
                    <div>
                      <div className="flex mt-3 mb-3">
                        <div className="bg-green-900 rounded-lg mr-1 mt-2 block h-fit">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS41IDFMNCA2LjUgMS41IDQiIHN0cm9rZT0iIzEwQjIwMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4="
                            className="w-3 h-3 p-0.5"
                          />
                        </div>
                        No annual fee
                      </div>
                      <div className="flex mt-3 mb-3">
                        <div className="bg-green-900 rounded-lg mr-2 mt-2 block h-fit">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS41IDFMNCA2LjUgMS41IDQiIHN0cm9rZT0iIzEwQjIwMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4="
                            className="w-3 h-3 p-0.5"
                          />
                        </div>
                        Rotating quarterly categories earn 5% rewards when
                        activated, up to a combined quarterly $1,500 maximum
                      </div>
                      <div className="flex mt-3 mb-3">
                        <div className="bg-green-900 rounded-lg mr-2 mt-2 block h-fit">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS41IDFMNCA2LjUgMS41IDQiIHN0cm9rZT0iIzEwQjIwMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4="
                            className="w-3 h-3 p-0.5"
                          />
                        </div>
                        Travel rewards rate rivals some of the best premium
                        travel cards
                      </div>
                      <div className="flex mt-3 mb-3">
                        <div className="bg-green-900 rounded-lg mr-2 mt-2 block h-fit">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS41IDFMNCA2LjUgMS41IDQiIHN0cm9rZT0iIzEwQjIwMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4="
                            className="w-3 h-3 p-0.5"
                          />
                        </div>
                        Generous rewards rate in several other categories
                      </div>
                    </div>
                    <div>
                      <div className="flex">
                        <div className="bg-red-200 rounded-lg mr-2 mt-2 block h-fit">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik02LjkgNy44MjJhLjY1LjY1IDAgMTAuOTItLjkyTDUuNDE3IDQuNSA3LjgyIDIuMDk3YS42NDkuNjQ5IDAgMTAtLjkxNy0uOTE3TDQuNSAzLjU4MyAyLjEgMS4xNzhhLjY1MS42NTEgMCAxMC0uOTIyLjkyMmwyLjQwNSAyLjQtMi40MDUgMi40YS42NTEuNjUxIDAgMTAuOTIyLjkyMmwyLjQtMi40MDUgMi40IDIuNDA1eiIgZmlsbD0iI0VFNkE2QSIgc3Ryb2tlPSIjRUU2QTZBIiBzdHJva2Utd2lkdGg9Ii40Ii8+PC9zdmc+"
                            className="w-4 h-4 p-0.5"
                          />
                        </div>
                        Travel bookings must be made through Chase Ultimate
                        Rewards® to earn 5% cash back
                      </div>
                    </div>
                  </div>
                </p>
                <div className="border-b-2 ml-5" />
              </div>
              <div
                onClick={() => setAccordian3((prevState) => !prevState)}
                className="block"
              >
                <div className="pt-2">
                  <h3 className="text-base flex justify-between text-blue-600 w-100 pl-5 text-left relative bg-white hover:underline cursor-pointer">
                    Card Details
                    <span className="mt-2">
                      <img
                        className={Accordian3 && "rotate-180"}
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMjkzIDcuMjkzTC43MDcgMS43MDdBMSAxIDAgMDEyLjEyMS4yOTNMNyA1LjE3Mmw0Ljg3OS00Ljg4YTEgMSAwIDExMS40MTQgMS40MTVMNy43MDcgNy4yOTNhMSAxIDAgMDEtMS40MTQgMHoiIGZpbGw9IiMzQTVDQjAiLz48L3N2Zz4="
                      />
                    </span>
                  </h3>
                </div>
                <p
                  className={
                    Accordian3 ? "block text-lg leading-6 mb-10" : "hidden"
                  }
                >
                  <ul className="m-0 pl-10 list-disc">
                    <li className="mt-1 mb-1">
                      Earn a $200 Bonus after you spend $500 on purchases in
                      your first 3 months from account opening.
                    </li>
                    <li className="mt-1 mb-1">
                      5% cash back on up to $1,500 in combined purchases in
                      bonus categories each quarter you activate. Enjoy new 5%
                      categories each quarter!
                    </li>
                    <li className="mt-1 mb-1">
                      5% cash back on travel purchased through Chase Ultimate
                      Rewards®, our premier rewards program that lets you redeem
                      rewards for cash back, travel, gift cards and more
                    </li>
                    <li className="mt-1 mb-1">
                      3% cash back on drugstore purchases and dining at
                      restaurants, including takeout and eligible delivery
                      service, and unlimited 1% cash back on all other
                      purchases.
                    </li>
                    <li className="mt-1 mb-1">
                      No minimum to redeem for cash back. You can choose to
                      receive a statement credit or direct deposit into most
                      U.S. checking and savings accounts. Cash Back rewards do
                      not expire as long as your account is open!
                    </li>
                    <li className="mt-1 mb-1">
                      0% Intro APR for 15 months from account opening on
                      purchases and balance transfers, then a variable APR of
                      18.74% - 27.49%.
                    </li>
                    <li className="mt-1 mb-1">
                      No annual fee - You won't have to pay an annual fee for
                      all the great features that come with your Freedom Flex℠
                      card
                    </li>
                    <li className="mt-1 mb-1">
                      Keep tabs on your credit health - Chase Credit Journey
                      helps you monitor your credit with free access to your
                      latest score, real-time alerts, and more.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          {/* 4th Phase End */}
        </div>
      </div>
    </div>
  );
}

export default Widget;

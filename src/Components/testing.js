import React, { useState } from "react";

function Testing() {
  const [acc1, setAcc1] = useState(false);
  const [acc2, setAcc2] = useState(false);
  const [acc3, setAcc3] = useState(false);

  return (
    <div>
      <div>
        <div
          onClick={() => setAcc1((prevState) => !prevState)}
          className="block"
        >
          <div className="bg-green-400">
            <h3 className="text-lg flex justify-between text-blue-300 w-100 pl-5 text-left relative bg-white hover:underline cursor-pointer">
              Why we picked it
              <span>
                <img
                  className={acc1 && "rotate-180"}
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMjkzIDcuMjkzTC43MDcgMS43MDdBMSAxIDAgMDEyLjEyMS4yOTNMNyA1LjE3Mmw0Ljg3OS00Ljg4YTEgMSAwIDExMS40MTQgMS40MTVMNy43MDcgNy4yOTNhMSAxIDAgMDEtMS40MTQgMHoiIGZpbGw9IiMzQTVDQjAiLz48L3N2Zz4="
                />
              </span>
            </h3>
          </div>
          <p className={acc1 ? "block text-lg leading-6 mb-10" : "hidden"}>
            This card has the brawn to handle just about all of your credit card
            spending needs without an over-inflated price tag. The card has an
            annual fee of $0, yet comes with a pumped-up earnings structure that
            covers a wide swath of expenses including travel, drugstores and
            dining plus rotating quarterly bonus categories in areas many
            households are likely to find appealing.
          </p>
          <div className="border-b-2" />
        </div>
        <div
          onClick={() => setAcc2((prevState) => !prevState)}
          className="block"
        >
          <div className="bg-green-400">
            <h3 className="text-lg flex justify-between text-blue-300 w-100 pl-5 text-left relative bg-white hover:underline cursor-pointer">
              Pros & Cons
              <span>
                <img
                  className={acc2 && "rotate-180"}
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMjkzIDcuMjkzTC43MDcgMS43MDdBMSAxIDAgMDEyLjEyMS4yOTNMNyA1LjE3Mmw0Ljg3OS00Ljg4YTEgMSAwIDExMS40MTQgMS40MTVMNy43MDcgNy4yOTNhMSAxIDAgMDEtMS40MTQgMHoiIGZpbGw9IiMzQTVDQjAiLz48L3N2Zz4="
                />
              </span>
            </h3>
          </div>
          <p className={acc2 ? "block text-lg leading-6 mb-10" : "hidden"}>
            <div className="flex">
              <div>
                <div className="flex mt-3 mb-3">
                  <div className="bg-green-900 rounded-lg mr-1 block h-fit">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS41IDFMNCA2LjUgMS41IDQiIHN0cm9rZT0iIzEwQjIwMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4="
                      className="w-3 h-3 p-0.5"
                    />
                  </div>
                  No annual fee
                </div>
                <div className="flex mt-3 mb-3">
                  <div className="bg-green-900 rounded-lg mr-1 block h-fit">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS41IDFMNCA2LjUgMS41IDQiIHN0cm9rZT0iIzEwQjIwMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4="
                      className="w-3 h-3 p-0.5"
                    />
                  </div>
                  Rotating quarterly categories earn 5% rewards when activated,
                  up to a combined quarterly $1,500 maximum
                </div>
                <div className="flex mt-3 mb-3">
                  <div className="bg-green-900 rounded-lg mr-1 block h-fit">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS41IDFMNCA2LjUgMS41IDQiIHN0cm9rZT0iIzEwQjIwMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4="
                      className="w-3 h-3 p-0.5"
                    />
                  </div>
                  Travel rewards rate rivals some of the best premium travel
                  cards
                </div>
                <div className="flex mt-3 mb-3">
                  <div className="bg-green-900 rounded-lg mr-1 block h-fit">
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
                  <div className="bg-red-200 rounded-lg mr-1 block h-fit">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik02LjkgNy44MjJhLjY1LjY1IDAgMTAuOTItLjkyTDUuNDE3IDQuNSA3LjgyIDIuMDk3YS42NDkuNjQ5IDAgMTAtLjkxNy0uOTE3TDQuNSAzLjU4MyAyLjEgMS4xNzhhLjY1MS42NTEgMCAxMC0uOTIyLjkyMmwyLjQwNSAyLjQtMi40MDUgMi40YS42NTEuNjUxIDAgMTAuOTIyLjkyMmwyLjQtMi40MDUgMi40IDIuNDA1eiIgZmlsbD0iI0VFNkE2QSIgc3Ryb2tlPSIjRUU2QTZBIiBzdHJva2Utd2lkdGg9Ii40Ii8+PC9zdmc+"
                      className="w-3 h-3 p-0.5"
                    />
                  </div>
                  Travel bookings must be made through Chase Ultimate Rewards®
                  to earn 5% cash back
                </div>
              </div>
            </div>
          </p>
          <div className="border-b-2" />
        </div>
        <div
          onClick={() => setAcc3((prevState) => !prevState)}
          className="block"
        >
          <div className="bg-green-400">
            <h3 className="text-lg flex justify-between text-blue-300 w-100 pl-5 text-left relative bg-white hover:underline cursor-pointer">
              Card Details
              <span>
                <img
                  className={acc3 && "rotate-180"}
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMjkzIDcuMjkzTC43MDcgMS43MDdBMSAxIDAgMDEyLjEyMS4yOTNMNyA1LjE3Mmw0Ljg3OS00Ljg4YTEgMSAwIDExMS40MTQgMS40MTVMNy43MDcgNy4yOTNhMSAxIDAgMDEtMS40MTQgMHoiIGZpbGw9IiMzQTVDQjAiLz48L3N2Zz4="
                />
              </span>
            </h3>
          </div>
          <p className={acc3 ? "block text-lg leading-6 mb-10" : "hidden"}>
            <ul className="m-0 pl-5">
              <li className="mt-1 mb-1">
                Earn a $200 Bonus after you spend $500 on purchases in your
                first 3 months from account opening.
              </li>
              <li className="mt-1 mb-1">
                5% cash back on up to $1,500 in combined purchases in bonus
                categories each quarter you activate. Enjoy new 5% categories
                each quarter!
              </li>
              <li className="mt-1 mb-1">
                5% cash back on travel purchased through Chase Ultimate
                Rewards®, our premier rewards program that lets you redeem
                rewards for cash back, travel, gift cards and more
              </li>
              <li className="mt-1 mb-1">
                3% cash back on drugstore purchases and dining at restaurants,
                including takeout and eligible delivery service, and unlimited
                1% cash back on all other purchases.
              </li>
              <li className="mt-1 mb-1">
                No minimum to redeem for cash back. You can choose to receive a
                statement credit or direct deposit into most U.S. checking and
                savings accounts. Cash Back rewards do not expire as long as
                your account is open!
              </li>
              <li className="mt-1 mb-1">
                0% Intro APR for 15 months from account opening on purchases and
                balance transfers, then a variable APR of 18.74% - 27.49%.
              </li>
              <li className="mt-1 mb-1">
                No annual fee - You won't have to pay an annual fee for all the
                great features that come with your Freedom Flex℠ card
              </li>
              <li className="mt-1 mb-1">
                Keep tabs on your credit health - Chase Credit Journey helps you
                monitor your credit with free access to your latest score,
                real-time alerts, and more.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testing;

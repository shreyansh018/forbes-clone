import React from "react";

function Widget() {
  return (
    <div className="p-5">
      <div>
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

            <div className="pl-10 ml-10 rounded-lg grid grid-cols-4">
              <div>
                <div>
                  <h1 className="text-left text-xs text-gray-400">
                    Welcome Bonus
                  </h1>
                </div>
                <div>
                  <h1 className="text-lg">$200 bonus</h1>
                </div>

                <div className="flex justify-end pr-5">
                  <div class="vl"></div>
                </div>
              </div>

              <div>
                <div>
                  <h1 className="text-left text-xs text-gray-400">
                    Annual Fee
                  </h1>
                </div>
                <div>
                  <h1 className="text-lg">$0</h1>
                </div>

                <div className="flex justify-end pr-2">
                  <div class="vl"></div>
                </div>
              </div>

              <div>
                <div>
                  <h1 className="text-left text-xs text-gray-400">
                    Regular APR
                  </h1>
                </div>
                <div>
                  <h1 className="text-lg ">18.74% - 27.49% Variable</h1>
                </div>

                <div className="flex justify-end">
                  <div class="vl"></div>
                </div>
              </div>

              <div className="">
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
            <div className="pl-5 pr-20">
              <div className="pb-3 flex cursor-pointer">
                <h1 className="text-blue-500 cursor-pointer hover:underline">
                  Why We Picked It
                </h1>

                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAADm5ubz8/MkJCQwMDD19fXw8PBXV1dQUFBZWVlTU1MuLi4pKSlYWFgmJiZeXl5mZmbExMRLS0vd3d2Dg4MfHx+tra2YmJjQ0NDh4eEODg6MjIxvb2/r6+toaGgYGBhDQ0M6OjoUjT9JAAAEKUlEQVR4nO3c6VbqMBQFYApaJgcUUVQcru//kBdvjCXNTihthhPu/n63y5yVM6QFHI2IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIqHj3m9l6tX3IvYwTPWxX69nmvsOVL6vqn9ddHX1VAe1e1bJXR3fm4brSbiYplhbG2++qX5/9V74/Vo35NM3yBqs/Dlb9+O69dlMdmheSqHfGqje+S6efxrXVrIhE/TAX/elLvfuqZSk/UeuP9qJ9DfWpfbH8EOs7a81PnsvtCKul8ES1A/RG+GxfXs1EtxsrRfd886K+BTcIHhogRavqwrslW3CH3ESFAVZb/z1/0D1ChwYOcH2kqsbX6C6RIeIAr/xHmr3xJUxUebWIA7wcH79zjLpNtZTWUesVWuZthwD3IV6gexeyQsQ7eNEpQFeiiqpFvINdUlQRH+LQAF2JKuZ0gwPsmqIKbjdCahHXYLcm0xCcqMNTVHGM/vy7iAO8PjlAsYk6ZA62ja9giHkTFQd41StAkbUYqgY1cUOjXqAFnTYmTDjEVa4QQ8zBNlGJOoE72D9FFdxubnLsIk7Rvk2mIWZohBwTJjz6k9diuEFvw7WYeC5OZmgRQ2tQw7uYtBZrGGCYHfyGazFhouImE6IGNccBLlWIkxv054d30UOOWkwTYtwa1DK+nsI1OOwkg2Q7wIU/i7rgRI3+dYbpMkWKKlnazQQGGLbJNDIMDdxkQo4JU/IDHA4w3KC3JT7ApaxBDSdqpKf+yTxtiioJhwZO0RhjwpQsUadwB+OmqJJoLuYLMNEBDs/B+CmqJJiLqedgW/Q3cDlTVIn8sQ0eEzEHvS3qG7jcKapE/NgGn2RiHbbdotVi/hrUIn1sg2sw1ZgwRZmLuY5qWIRElZOiCm43A0LEAaZvMo3AiZr3qIbh0d8zRBxg2kFvC1iL0mpQw7vY48uaEo5qWKADnIyjGhako0o5qmEBalFqDWqDD3CSjmrYwLko66iGDfqGv/QUVXC76fRrG3lHNaz323B8kpExJkw9f22Dx4SEQW/rVYtl1KDW49c2eT586Q8PDc9Xi0oYEyZHR3Ulaild9NBJtVhWDWo4UWEtSnyi78IxF+2hIflxyQ8nqvVz6TJTVMHtZm7uIh4TsptMo0OilnNUw44+9ct+ou/iyNAouQY1nKg/tVjaUQ1zvNj4DrG8oxrmHBrnkKKK44z6UnyTaeBEhQVaXooquN2gqAsN0FWLlhJrUMPvblpkvpPpqkOilpuiCu6oB8rsooeO1GLJNajhofGj1DFh8oR4HgF6EvUcUlRxtJvym0wDDo3Sx4QJjP6yB73NqsXzqUGttYvntoPfjKFxLmPCNP76DfDrLAMcjab6f1K/yfsfhaE87xbrxe7If9wmIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiov/cX08aJw5PInkjAAAAAElFTkSuQmCC"
                  alt=""
                  width="20px"
                  className="ml-auto"
                />
              </div>

              <div className="pb-1">
                <hr className="widgetthinline" />
              </div>

              <div className="pb-3 grid grid-cols-2 cursor-pointer">
                <h1 className="text-blue-500 cursor-pointer hover:underline">
                  Pros & Cons
                </h1>

                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAADm5ubz8/MkJCQwMDD19fXw8PBXV1dQUFBZWVlTU1MuLi4pKSlYWFgmJiZeXl5mZmbExMRLS0vd3d2Dg4MfHx+tra2YmJjQ0NDh4eEODg6MjIxvb2/r6+toaGgYGBhDQ0M6OjoUjT9JAAAEKUlEQVR4nO3c6VbqMBQFYApaJgcUUVQcru//kBdvjCXNTihthhPu/n63y5yVM6QFHI2IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIqHj3m9l6tX3IvYwTPWxX69nmvsOVL6vqn9ddHX1VAe1e1bJXR3fm4brSbiYplhbG2++qX5/9V74/Vo35NM3yBqs/Dlb9+O69dlMdmheSqHfGqje+S6efxrXVrIhE/TAX/elLvfuqZSk/UeuP9qJ9DfWpfbH8EOs7a81PnsvtCKul8ES1A/RG+GxfXs1EtxsrRfd886K+BTcIHhogRavqwrslW3CH3ESFAVZb/z1/0D1ChwYOcH2kqsbX6C6RIeIAr/xHmr3xJUxUebWIA7wcH79zjLpNtZTWUesVWuZthwD3IV6gexeyQsQ7eNEpQFeiiqpFvINdUlQRH+LQAF2JKuZ0gwPsmqIKbjdCahHXYLcm0xCcqMNTVHGM/vy7iAO8PjlAsYk6ZA62ja9giHkTFQd41StAkbUYqgY1cUOjXqAFnTYmTDjEVa4QQ8zBNlGJOoE72D9FFdxubnLsIk7Rvk2mIWZohBwTJjz6k9diuEFvw7WYeC5OZmgRQ2tQw7uYtBZrGGCYHfyGazFhouImE6IGNccBLlWIkxv054d30UOOWkwTYtwa1DK+nsI1OOwkg2Q7wIU/i7rgRI3+dYbpMkWKKlnazQQGGLbJNDIMDdxkQo4JU/IDHA4w3KC3JT7ApaxBDSdqpKf+yTxtiioJhwZO0RhjwpQsUadwB+OmqJJoLuYLMNEBDs/B+CmqJJiLqedgW/Q3cDlTVIn8sQ0eEzEHvS3qG7jcKapE/NgGn2RiHbbdotVi/hrUIn1sg2sw1ZgwRZmLuY5qWIRElZOiCm43A0LEAaZvMo3AiZr3qIbh0d8zRBxg2kFvC1iL0mpQw7vY48uaEo5qWKADnIyjGhako0o5qmEBalFqDWqDD3CSjmrYwLko66iGDfqGv/QUVXC76fRrG3lHNaz323B8kpExJkw9f22Dx4SEQW/rVYtl1KDW49c2eT586Q8PDc9Xi0oYEyZHR3Ulaild9NBJtVhWDWo4UWEtSnyi78IxF+2hIflxyQ8nqvVz6TJTVMHtZm7uIh4TsptMo0OilnNUw44+9ct+ou/iyNAouQY1nKg/tVjaUQ1zvNj4DrG8oxrmHBrnkKKK44z6UnyTaeBEhQVaXooquN2gqAsN0FWLlhJrUMPvblpkvpPpqkOilpuiCu6oB8rsooeO1GLJNajhofGj1DFh8oR4HgF6EvUcUlRxtJvym0wDDo3Sx4QJjP6yB73NqsXzqUGttYvntoPfjKFxLmPCNP76DfDrLAMcjab6f1K/yfsfhaE87xbrxe7If9wmIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiov/cX08aJw5PInkjAAAAAElFTkSuQmCC"
                  alt=""
                  width="20px"
                  className="ml-auto"
                />
              </div>

              <div className="pb-1">
                <hr className="widgetthinline" />
              </div>

              <div className="pb-3 grid grid-cols-2 cursor-pointer">
                <h1 className="text-blue-500 cursor-pointer hover:underline">
                  Card Details
                </h1>

                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAADm5ubz8/MkJCQwMDD19fXw8PBXV1dQUFBZWVlTU1MuLi4pKSlYWFgmJiZeXl5mZmbExMRLS0vd3d2Dg4MfHx+tra2YmJjQ0NDh4eEODg6MjIxvb2/r6+toaGgYGBhDQ0M6OjoUjT9JAAAEKUlEQVR4nO3c6VbqMBQFYApaJgcUUVQcru//kBdvjCXNTihthhPu/n63y5yVM6QFHI2IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIqHj3m9l6tX3IvYwTPWxX69nmvsOVL6vqn9ddHX1VAe1e1bJXR3fm4brSbiYplhbG2++qX5/9V74/Vo35NM3yBqs/Dlb9+O69dlMdmheSqHfGqje+S6efxrXVrIhE/TAX/elLvfuqZSk/UeuP9qJ9DfWpfbH8EOs7a81PnsvtCKul8ES1A/RG+GxfXs1EtxsrRfd886K+BTcIHhogRavqwrslW3CH3ESFAVZb/z1/0D1ChwYOcH2kqsbX6C6RIeIAr/xHmr3xJUxUebWIA7wcH79zjLpNtZTWUesVWuZthwD3IV6gexeyQsQ7eNEpQFeiiqpFvINdUlQRH+LQAF2JKuZ0gwPsmqIKbjdCahHXYLcm0xCcqMNTVHGM/vy7iAO8PjlAsYk6ZA62ja9giHkTFQd41StAkbUYqgY1cUOjXqAFnTYmTDjEVa4QQ8zBNlGJOoE72D9FFdxubnLsIk7Rvk2mIWZohBwTJjz6k9diuEFvw7WYeC5OZmgRQ2tQw7uYtBZrGGCYHfyGazFhouImE6IGNccBLlWIkxv054d30UOOWkwTYtwa1DK+nsI1OOwkg2Q7wIU/i7rgRI3+dYbpMkWKKlnazQQGGLbJNDIMDdxkQo4JU/IDHA4w3KC3JT7ApaxBDSdqpKf+yTxtiioJhwZO0RhjwpQsUadwB+OmqJJoLuYLMNEBDs/B+CmqJJiLqedgW/Q3cDlTVIn8sQ0eEzEHvS3qG7jcKapE/NgGn2RiHbbdotVi/hrUIn1sg2sw1ZgwRZmLuY5qWIRElZOiCm43A0LEAaZvMo3AiZr3qIbh0d8zRBxg2kFvC1iL0mpQw7vY48uaEo5qWKADnIyjGhako0o5qmEBalFqDWqDD3CSjmrYwLko66iGDfqGv/QUVXC76fRrG3lHNaz323B8kpExJkw9f22Dx4SEQW/rVYtl1KDW49c2eT586Q8PDc9Xi0oYEyZHR3Ulaild9NBJtVhWDWo4UWEtSnyi78IxF+2hIflxyQ8nqvVz6TJTVMHtZm7uIh4TsptMo0OilnNUw44+9ct+ou/iyNAouQY1nKg/tVjaUQ1zvNj4DrG8oxrmHBrnkKKK44z6UnyTaeBEhQVaXooquN2gqAsN0FWLlhJrUMPvblpkvpPpqkOilpuiCu6oB8rsooeO1GLJNajhofGj1DFh8oR4HgF6EvUcUlRxtJvym0wDDo3Sx4QJjP6yB73NqsXzqUGttYvntoPfjKFxLmPCNP76DfDrLAMcjab6f1K/yfsfhaE87xbrxe7If9wmIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiov/cX08aJw5PInkjAAAAAElFTkSuQmCC"
                  alt=""
                  width="20px"
                  className="ml-auto"
                />
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

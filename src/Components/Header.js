import React from "react";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 py-1 px-5 md:px-5 bg-black">
      {/*left*/}
      <div className="relative flex items-center my-auto">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEM9p0isF0rLA_yr6y8GQ3GERGGbqtHz4jNw&usqp=CAU"
          className="object-contain object-left cursor-pointer hidden md:inline-flex"
          width="30px"
        />
      </div>

      {/*Middel */}

      <div className="flex items-center justify-center">
        <h1 className="font-serif text-3xl cursor-pointer rounded-full text-white">
          Forbes Advisor
        </h1>
      </div>

      {/*Right*/}
      <div className=" flex space-x-2 pl-20 justify-end">
        <p className="text-right object-contain text-white cursor-pointer text-sm pt-2 hidden md:inline-flex">
          AU
        </p>

        <img
          src="data:image/png;base64,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"
          className="object-contain object-right cursor-pointer hidden md:inline-flex"
          width="20px"
        />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEUAAAD////W1taVlZXq6upNTU0uLi61tbX6+vqYmJhiYmJKSkp/f3/Ozs719fUvLy9ra2uJiYnAwMDk5ORSUlIICAgPDw+hoaEmJiZfX189PT3b29vU1NQVFRUbGxuurq6CxvlhAAADO0lEQVR4nO3ba3PaMBCF4SjhnpALEAikbf7/vyxtZ9IBbEkra3ePPOf9rmWfsXPxjLm7Y4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMsVH18Xicee/Q22x3+hg2YbpZhD99PtXZqGpPP/7utphPi0f8XIfvnlcVd6vR6vn/cuvCGadw0UPVBYe2vFyu6AdpGgIucX69XMGdegNEIt4AC4gdQBxiB1BM7ASiEDuBIbxIZvQAMYg9wLAQEHuBCMQ+4JmY/Rs1AvQn9gPziVGgN/EhulseMQH0JcaBIetPfxLoSUwCM67iYxroR0wD08TZIkfoRMwBnom/okM+s4b4EPOA50e92JBV5hAPYi4whNiD3jp93IuYD4w+LuZPsSYKgCH0j8m/Sa2JImDkNn0VzTEkyoDhtXfQm2yQGVEIDG+9k4TX0IooBUau4Sl92IEoBoZd/7C8/2hsiXLgIjIt9vDlRJQDwzwy7kU+TplYAIw/QS3T502JJcCv+Mh7KGIJ8D41FImoAkQiKgFxiGpAFKIiEIOoCkQgKgP9iepAb2IJcCv9EE9iCXAi/xg/ohHQj2gG9CIaAn2IpkAPojHQnmgOtCY6AG2JLkBLohPQjugGtCI6Am2IrkALojNQn+gO1CYCAHWJEEBNIghQjwgD1CICAXWIUEANIhiwPhEOWJsICKxLhATWJIIC6xFhgbWIwMAy4vJqRslbH2bAMuLmYsIGG1hGnBy/jx8n6MAyYtgud+/7991yW3LYGFhIHJA50JroALQlugAtiU5AO6Ib0IroCLQhugItiM5AfaI7UJsIANQlQgA1iSBAPSIMUIsIBNQhQgE1iGDA+kQ4YG0iILAuERJYkwgKrEeEBdYiAgPrEKGBNYjgwOFEeOBQYgPAYcQmgEOIjQDLic0AS4kNAcuI4q/X+SYnCr8g6Z+U2BxQSmwQKCM2CZQQGwXmE5sF5hIbBuYRmwbmEBsHponNA1PEEQDjxFEAY8SRAPuJowH2EUcE7CaOCthFHBnwljg64DVxhMDLt/MP3svotD/8e8F7e9h7r6LXfraajZjHGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjw/sNpRYtdwuaUZ0AAAAASUVORK5CYII="
          className="object-contain object-left cursor-pointer hidden md:inline-flex pt-1 rounded-full"
          width="20px"
        />
      </div>
    </header>
  );
}

export default Header;

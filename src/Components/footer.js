import React from "react";

function Footer() {
  return (
    <div className="pl-10 pr-10 footerColor">
      <div>
        <div className="pt-10 text-3xl text-center font-bold font-serif ">
          Forbes
        </div>
        <div className="text-center text-xs font-mono pt-5">
          © 2022 Forbes Media LLC. All Rights Reserved.
        </div>

        <div className="p-5 pl-20 pr-20">
          <hr className="thinline" />
        </div>

        <div className="justify-center flex space-x-4 pt-5 text-xs pb-10">
          <div>
            <h1 className="cursor-pointer hover:underline">AdChoices</h1>
          </div>
          <div>
            <h1 className="cursor-pointer hover:underline">
              Privacy Statement{" "}
            </h1>
          </div>
          <div>
            <h1 className="cursor-pointer hover:underline">
              Terms and Conditions
            </h1>
          </div>
          <div>
            <h1 className="cursor-pointer hover:underline">About Us</h1>
          </div>
          <div>
            <h1 className="cursor-pointer hover:underline"> Contact Us</h1>
          </div>
          <div>
            <h1 className="cursor-pointer hover:underline">Jobs At Forbes</h1>
          </div>
          <div>
            <h1 className="cursor-pointer hover:underline">
              Reprints & Permissions
            </h1>
          </div>
          <div>
            <h1 className="cursor-pointer hover:underline">
              Forbes Press Room
            </h1>
          </div>
          <div>
            <h1 className="cursor-pointer hover:underline">
              {" "}
              Forbes Quote of the Day
            </h1>
          </div>
          <div>
            <h1 className="cursor-pointer hover:underline"> Advertise</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

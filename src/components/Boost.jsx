import React from "react";
import bgBoost from "../images/bg-boost-desktop.svg";
import bgMobile from "../images/bg-boost-mobile.svg";

function Boost() {
  return (
    <div className="boost relative">
      <picture>
        <source media="(min-width: 768px)" srcSet={bgBoost} />
        <img src={bgMobile} alt="" />
      </picture>

      <div className="flex items-center justify-center flex-col boost-inner">
        <h2 className="mb-5 text-4xl text-white font-bold">
          Boost your links today
        </h2>
        <button className="btn-cta rounded-full">Get Started</button>
      </div>
    </div>
  );
}

export default Boost;

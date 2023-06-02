import React from "react";
import working from "../images/illustration-working.svg";

function Hero() {
  return (
    <div className="mt-20 mx-32">
      <div className="mx-10 flex">
        <div className="max-w-lg">
          <h1 className="text-7xl font-bold text-gray-700 my-5">
            More than just shorter links
          </h1>
          <h3 className="text-xl text-gray-500">
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </h3>
          <button className="bg-teal-400 text-white rounded-xl p-2 px-5 mt-5 font-bold">
            Get started
          </button>
        </div>
        <div className="ml-[500px]">
          <img src={working} alt="illustration-working" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

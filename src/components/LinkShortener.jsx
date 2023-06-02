import React, { useState } from "react";
import axios from "axios";
import { notification } from "antd";
import brandRecognition from "../images/icon-brand-recognition.svg";
import detailedRecords from "../images/icon-detailed-records.svg";
import fullCustomizable from "../images/icon-fully-customizable.svg";

function LinkShortener() {
  const [link, setLink] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const fetchLink = async () => {
    const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`);
    setShortenedLink(res.data.result.short_link);
    setSearchValue(link);
  };

  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Text Copied!",
      description: "Link has been copied to your clipboard",
      duration: 2,
    });
  };
  const copyText = () => {
    const text = document.getElementById("linkToCopy");
    navigator.clipboard.writeText(text.textContent).then(() => {
      setIsCopied(true);
      openNotificationWithIcon("success");
    });
  };

  return (
    <div className="bg-gray-200 h-screen mt-40 w-screen">
      {contextHolder}
      <div className="flex w-full h-[100px] z-10">
        <div className="bg-[#4b3f6b] bg-no-repeat w-[70%] mx-auto -mt-20 rounded-xl flex justify-center items-center">
          <div className="flex w-full justify-center items-center">
            <input
              type="text"
              className="px-6 py-4 w-[60%] h-20 mr-5 rounded-lg"
              placeholder="Shorten a link here..."
              onChange={(event) => setLink(event.target.value)}
            />
            <button
              className="bg-teal-400 text-white rounded-xl px-6 py-4 hover:bg-teal-200 h-20 w-[15%] font-bold"
              onClick={fetchLink}
            >
              Shorten It!
            </button>
          </div>
        </div>
      </div>
      {shortenedLink !== "" ? (
        <div className="w-[70%] mx-auto mt-10 rounded-l flex  bg-white text-lg p-3">
          <div className="ml-5">https://www.{searchValue}</div>
          <div className="ml-[700px] text-teal-400" id="linkToCopy">
            https://{shortenedLink}
          </div>
          <button
            className={
              !isCopied
                ? `bg-teal-400 text-white rounded-xl px-5 py-1 hover:bg-teal-200 ml-36`
                : `bg-[#4b3f6b] text-white rounded-xl px-5 py-1 ml-36`
            }
            onClick={copyText}
          >
            {!isCopied ? `Copy` : `Copied!`}
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="flex items-center align-middle mt-20 w-full ">
        <div className="h-40 w-[30%] text-center flex items-center align-middle mx-auto">
          <div className="mt-20">
            <h1 className="font-bold text-4xl p-5 text-gray-700">
              Advanced Statistics
            </h1>
            <h3 className="text-xl text-gray-400 p-5">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </h3>
          </div>
        </div>
      </div>

      <div className="mx-40 mt-32 flex">
        <div className="flex mx-auto relative">
          <div className="line"></div>
          <article className=" w-[300px] h-[300px] mx-5 p-5 bg-gray-100 rounded-md relative">
            <div className="rounded-[100%] h-20 w-20 align-middle items-center flex bg-[#4b3f6b] -my-16">
              <img
                src={brandRecognition}
                alt="brand-recognition"
                srcset=""
                className="mx-5"
              />
            </div>
            <h2 className="mt-20 text-gray-700 font-bold text-lg tracking-wide">
              Brand Recognition
            </h2>
            <h3 className="pt-5 text-gray-400">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your content
            </h3>
          </article>
          <article className="w-[300px] h-[300px] mx-5 p-5 bg-gray-100 rounded-md mt-10 relative">
            <div className="rounded-[100%] h-20 w-20 align-middle items-center flex bg-[#4b3f6b] -my-16">
              <img
                src={detailedRecords}
                alt="detailed-records"
                srcset=""
                className="mx-5"
              />
            </div>
            <h2 className="mt-20 text-gray-700 font-bold text-lg tracking-wide">
              Detailed Records
            </h2>
            <h3 className="pt-5 text-gray-400">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </h3>
          </article>
          <article className="w-[300px] h-[300px] mx-5 p-5 bg-gray-100 rounded-md mt-20 relative">
            <div className="rounded-[100%] h-20 w-20 align-middle items-center flex bg-[#4b3f6b] -my-16">
              <img
                src={fullCustomizable}
                alt="full-customizable"
                srcset=""
                className="mx-5"
              />
            </div>
            <h2 className="mt-20 text-gray-700 font-bold text-lg tracking-wide">
              Fully Customizable
            </h2>
            <h3 className="pt-5 text-gray-400">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </h3>
          </article>
        </div>
      </div>
    </div>
  );
}

export default LinkShortener;

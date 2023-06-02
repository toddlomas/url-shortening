import React from "react";
import logo from "../images/footer-logo.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

function Footer() {
  return (
    <>
      <footer className="footer max-width py-20 bg-[#232027]">
        <div className="grid grid-cols-5">
          <article className="mx-20">
            <img src={logo} alt="" />
          </article>

          <article className="">
            <h3 className="text-white text-lg font-bold tracking-wide">
              Features
            </h3>
            <ul className="py-3">
              <li className="">
                <button className="text-gray-500 hover:text-teal-300 text-sm mt-1">
                  Link Shortening
                </button>
              </li>
              <li>
                <button className="text-gray-500 hover:text-teal-300 text-sm mt-1">
                  Branded Links
                </button>
              </li>
              <li>
                <button className="text-gray-500 hover:text-teal-300 text-sm mt-1">
                  Analytics
                </button>
              </li>
            </ul>
          </article>
          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Resources
            </h3>
            <ul>
              <li>
                <button className="text-gray-500 hover:text-teal-300 text-sm mt-1">
                  Blog
                </button>
              </li>
              <li>
                <button className="text-gray-500 hover:text-teal-300 text-sm mt-1">
                  Developers
                </button>
              </li>
              <li>
                <button className="text-gray-500 hover:text-teal-300 text-sm mt-1">
                  Support
                </button>
              </li>
            </ul>
          </article>
          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Company
            </h3>
            <ul>
              <li>
                <button className="text-gray-500 hover:text-teal-300 text-sm mt-1">
                  About
                </button>
              </li>
              <li>
                <button className="text-gray-500 hover:text-teal-300 text-sm mt-1">
                  Our Team
                </button>
              </li>
              <li>
                <button className="text-gray-500 hover:text-teal-300 text-sm mt-1">
                  Careers
                </button>
              </li>
              <li>
                <button className="text-gray-500 hover:text-teal-300 text-sm mt-1">
                  Contact
                </button>
              </li>
            </ul>
          </article>
          <article className="flex flex-row">
            <ul className="flex items-center">
              <li>
                <img
                  src={facebook}
                  alt=""
                  className="fill-red-700 cursor-pointer"
                />
              </li>
              <li className="ml-4">
                <img src={twitter} alt="" />
              </li>
              <li className="mx-5">
                <img src={pinterest} alt="" />
              </li>
              <li>
                <img src={instagram} alt="" />
              </li>
            </ul>
          </article>
        </div>
      </footer>
    </>
  );
}

export default Footer;

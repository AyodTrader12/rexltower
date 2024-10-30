import pix from "../assets/large-logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-[70vh] bg-[#182424] flex justify-center">
        <div className="w-[75%] h-full ">
          <div className="w-full h-[75%]  flex gap-24">
            <div className="w-[50%] h-full ">
              <div className="mb-7">
                <img src={pix} alt="img" className="pt-10 w-[30%] h-[30%]" />
              </div>
              <div className="mb-4">
                <p className="text-white">
                  Pellentesque habitant morbi tristique senectus et netus et
                  fames acturpis egestas. Vestibulum tortor quam, feugiat vitae,
                  tempor sit amet, ante. Donec eu libero sit amet quam egestas
                  semper. mivitae est. Mauris placerat eleifend leo. Quisque sit
                  amet est et sapien.
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <p className="font-normal text-white">Follow Us</p>
                <span>
                  <FaInstagram className="text-white" />
                </span>
                <span>
                  <FaFacebook className="text-white" />
                </span>
                <span>
                  <FaTwitter className="text-white" />
                </span>
                <span>
                  <FaGooglePlusG className="text-white" />
                </span>
              </div>
            </div>
            <div className="flex gap-32">
              <div>
                <h1 className="pt-10 text-white font-normal text-[20px] mb-5 cursor-pointer">
                  Company News
                </h1>
                <nav className="cursor-pointer text-white font-medium hover:text-[#d29751] transition-all 300ms mb-2">
                  Partners
                </nav>
                <nav className="cursor-pointer text-white font-medium hover:text-[#d29751] transition-all 300ms mb-2">
                  About Us
                </nav>
                <nav className="cursor-pointer text-white font-medium hover:text-[#d29751] transition-all 300ms mb-2">
                  Career
                </nav>
                <nav className="cursor-pointer text-white font-medium hover:text-[#d29751] transition-all 300ms mb-2">
                  Reviews
                </nav>
                <nav className="cursor-pointer text-white font-medium hover:text-[#d29751] transition-all 300ms mb-2">
                  Terms & Conditions
                </nav>
                <nav className="cursor-pointer text-white font-medium hover:text-[#d29751] transition-all 300ms mb-2">
                  Help
                </nav>
              </div>
              <div>
                <h1 className="pt-10 text-white font-normal text-[20px] mb-5 cursor-pointer">
                  Useful Links
                </h1>
                <nav className="cursor-pointer text-white font-medium hover:text-[#d29751] transition-all 300ms mb-2">
                  Home
                </nav>
                <nav className="cursor-pointer text-white font-medium hover:text-[#d29751] transition-all 300ms mb-2">
                  About Us
                </nav>
                <nav className="cursor-pointer text-white font-medium hover:text-[#d29751] transition-all 300ms mb-2">
                  Services
                </nav>
                <nav className="cursor-pointer text-white font-medium hover:text-[#d29751] transition-all 300ms mb-2">
                  Project
                </nav>
                <nav className="cursor-pointer text-white font-medium hover:text-[#d29751] transition-all 300ms mb-2">
                  Our Team
                </nav>
                <nav className="cursor-pointer text-white font-medium hover:text-[#d29751] transition-all 300ms mb-2">
                  Latest Blog
                </nav>
              </div>
            </div>
          </div>
          <hr className="text-stone-300" />
          <div>
            <div>
              <p className="text-center mt-3 text-white">
                © 2021 @ Relxtower All design Zcube.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

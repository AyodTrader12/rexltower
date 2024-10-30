import React from "react";
import pix from "../assets/relxtower logo.png";

const Header = () => {
  const nav = [
    { id: 1, title: "Home" },
    { id: 2, title: "About us" },
    { id: 3, title: "Services" },
    { id: 4, title: "Apartments" },
    { id: 5, title: "Gallery" },
    { id: 6, title: "Blog" },
    { id: 7, title: "Contact" },
  ];
  return (
    <div>
      <div className="w-full h-[90px] bg-[#3c3934] flex justify-center">
        {/* header wrapper */}
        <div className="w-[78%] h-full  flex justify-between">
          {/* header content */}
          <div className="w-[15%] h-full  flex items-center">
            <img src={pix} alt="img" className="w-[80%] h-[80%]" />
          </div>
          <div className="w-[60%]  h-full flex items-center gap-10 text-white font-semibold">
            <div className="flex gap-10  ">
              {nav.map((el) => (
                <div>{el.title}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

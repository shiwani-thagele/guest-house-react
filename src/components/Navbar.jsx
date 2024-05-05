import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import guestlogo from "../assets/lDOObE01.svg";
import "./index.css";
// import {contact} from "./Contact";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "About", link: "/about" },
    { id: 3, text: "Services", link: "/services" },
    { id: 4, text: "Rooms", link: "/rooms" },
    { id: 5, text: "Gallery", link: "/gallery" },
    { id: 6, text: "Contact", link: "/contact" },
  ];

  return (
    <div className="bg-custom-orange p-5 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black relative z-50">
      <h1 className="h-15 max-w-[124px] mx-left-auto flex">
        <img src={guestlogo} alt="Logo" className="cursor-pointer hover:scale-110" />
      </h1>
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-3 hover:bg-[#FFF8DC] hover:border-2 hover:border-black rounded-xl cursor-pointer duration-300 hover:text-black"
          >
            <Link to={item.link} className="text-black">{item.text}</Link>
          </li>
        ))}
        <li className="p-4">
          <a
            href="#"
            className="bg-[#2C7865] text-white hover:bg-[#FFF8DC] hover:border-2 hover:border-black  hover:text-black font-bold py-3 px-4 rounded-xl transition duration-300 ease-in-out"
          >
            Book Now
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r text-[#114232] border-white bg-[#F7F6BB] ease-in-out duration-500" : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"}>
        <h1 className="w-full text-3xl font-bold text-white m-4">
          <img src={guestlogo} alt="Logo" className="text-white h-15 max-w-[124px]" />
        </h1>
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 rounded-xl  hover:text-black hover:bg-[#87A922] duration-300 cursor-pointer border-gray-600"
          >
            <Link to={item.link} className="text-black">{item.text}</Link>
          </li>
        ))}
        <li className="p-4">
          <a
            href="#"
            className="bg-[#87A922] hover:bg-[#FFF8DC] hover:border-2 hover:border-black  hover:text-black  font-bold rounded-xl py-3 px-4 transition duration-300 ease-in-out block text-center"
          >
            Book Now
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

// Vibrant Blue: #00bcd4, Coral: #ff7f50, Yellow: #ffdd00
// Lime Green: #00ff00, Hot Pink: #ff69b4, Purple: #8e4585
// Orange: #ffa500, Teal: #008080, Magenta: #ff00ff
// Pink: #ff6699, Sky Blue: #87ceeb, Mint Green: #98ff98

// 6C0345
// DC6B19
// F7C566
// FFF8DC

// 1A4D2E
// 4F6F52
// E8DFCA
// F5EFE6

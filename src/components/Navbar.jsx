import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from 'react-icons/bs';
import logo from "../assets/sys.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav((nav) => !nav);
  };

  const closeMenu = () => {
    setNav(false);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between  items-center px-4  bg-[#0a192f] text-green-100">
      <div>
        <img src={logo} alt="" className=" md:w-20 md:h-15" />
      </div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={50} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} offset={50} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={50} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}

      <div onClick={handleClick} className="md:hidden z-10 text-xl">
        {!nav ? <FaBars  /> : <FaTimes  />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : " flex flex-col justify-center items-center absolute top-0 left-0 w-full bg-[#0a192f]  h-screen "
        }
      >
        <li className="py-6 text-4xl">
          <Link  onClick={closeMenu} to="home" smooth={false} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="about" smooth={false} offset={50} duration={500}  onClick={closeMenu}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="skills" smooth={false} offset={50} duration={500}  onClick={closeMenu}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="work" smooth={false} offset={50} duration={500}  onClick={closeMenu}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="contact" smooth={false} offset={50} duration={500}  onClick={closeMenu} >
            Contact
          </Link>
        </li>
      </ul>
      {/* social */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300  bg-blue-700   ">
            <a
              className="flex justify-between items-center w-full text-gray-300 py-1"
              href="https://www.linkedin.com/in/yusuf-soliu/"
            >
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300  bg-black-700">
            <a
              className="flex justify-between items-center w-full text-gray-300 py-1"
              href="https://github.com/whalay/"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300  bg-gray-400   ">
            <a
              className="flex justify-between items-center w-full text-gray-300 py-1"
              href="soliuy5@gmail.com"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300  bg-blue-700   ">
            <a
              className="flex justify-between items-center w-full text-gray-300 py-1"
              href="https://twitter.com/holar102"
            >
              Resume
              <FaTwitter size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
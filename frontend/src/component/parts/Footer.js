import React from "react";
import { ImHome } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { useLocation, Link } from "react-router-dom";

const Footer = ({ Blue, colourful, path }) => {
  const { pathname } = useLocation();

  return (
    <footer>
      <Link to="/home">
        <ImHome color={pathname === "/home" ? "blue" : "black"} />
      </Link>
      <Link to="/search">
        <FaSearch color={pathname === "/search" ? "blue" : "black"} />
      </Link>
      <Link to="/posting">
        <AiFillPlusCircle color={pathname === "/posting" ? "blue" : "black"} />
      </Link>
      <Link to="/notify">
        <IoMdNotifications color={pathname === "/notify" ? "blue" : "black"} />
      </Link>
      <Link to="/profile">
        <BsPersonCircle color={pathname === "/profile" ? "blue" : "black"} />
      </Link>
    </footer>
  );
};

export default Footer;

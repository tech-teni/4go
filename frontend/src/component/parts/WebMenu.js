import React from "react";
import { ImHome } from "react-icons/im";
import { FaEnvelope } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { useLocation, Link } from "react-router-dom";

const WebMenu = () => {
  const { pathname } = useLocation();

  console.log("this" + pathname);

  return (
    <div className="web-menu">
      <div className="web-menu-inner">
        <Link to="/home">
          <div
            className="each-line"
            style={{ fontWeight: pathname === "/home" ? "bold" : "inherited" }}
          >
            <a>
              <ImHome color={pathname === "/home" ? "blue" : "black"} />
            </a>
            Home
          </div>
        </Link>
        <Link to="/notify">
          <div
            className="each-line"
            style={{
              fontWeight: pathname === "/notify" ? "bold" : "inherited",
            }}
          >
            <a>
              <IoMdNotifications
                color={pathname === "/notify" ? "orange" : "black"}
              />
            </a>
            Notification
          </div>
        </Link>
        <Link to="/home">
          <div
            className="each-line"
            style={{
              fontWeight: pathname === "/message" ? "bold" : "inherited",
            }}
          >
            <a>
              <FaEnvelope
                color={pathname === "/message" ? "orange" : "black"}
              />
            </a>
            Message
          </div>
        </Link>
        <Link to="/home">
          <div
            className="each-line"
            style={{
              fontWeight: pathname === "/bookmarks" ? "bold" : "inherited",
            }}
          >
            <a>
              <BsFillBookmarkFill
                color={pathname === "/bookmarks" ? "orange" : "black"}
              />
            </a>
            Bookmarks
          </div>
        </Link>
        <Link to="/profile">
          <div
            className="each-line"
            style={{
              fontWeight: pathname === "/profile" ? "bold" : "inherited",
            }}
          >
            <a>
              <BsPersonCircle
                color={pathname === "/profile" ? "orange" : "black"}
              />
            </a>
            Profile
          </div>
        </Link>
        <Link to="/home">
          <div
            className="each-line"
            style={{ fontWeight: pathname === "/more" ? "bold" : "inherited" }}
          >
            <a>
              <CgMoreO color={pathname === "/more" ? "orange" : "black"} />
            </a>
            More
          </div>
        </Link>
        <div className="sign-out">
          <input type="Submit" placeholder="Password" value="Sign Out" />
        </div>
      </div>
    </div>
  );
};

export default WebMenu;

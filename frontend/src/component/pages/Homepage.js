import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import PerTrend from "../parts/PerTrend";
import { useLocation, Link } from "react-router-dom";

import PostInfo from "../parts/PostInfo";
import Footer from "../parts/Footer";
import Button from "../parts/Button";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";
import WebMenu from "../parts/WebMenu";

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayRoute, setDisplayRoute] = useState(true);
  const fetchPost = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/post`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      setLoading(false);
      if (res.status === 200) {
        setPosts(res.data.posts.reverse());
      }
      console.log("res", res);
    } catch (error) {
      setLoading(false);
      console.log("error: ", error);
      setDisplayRoute(false);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);
  const Blue = {
    color: "#4c88e1",
  };
  const [menuBar, setMenuBar] = useState(false);
  const showMenuBar = () => {
    setMenuBar(!menuBar);
  };

  const navigate = useNavigate();
  // console.log(navigate);
  const clearLocalStorage = async () => {
    if (typeof window !== "undefined") {
      window.localStorage.clear();
    }
    await fetch(`${process.env.REACT_APP_API}/auth/logout`, { method: "GET" })
      .then((res) => {
        console.log(res);

        return res.json();
      })
      .catch((e) => {
        console.log(e);
      });
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };
  console.log(displayRoute);

  console.log(posts);
  if (displayRoute === false) {
    return <p>YOU ARE NOT AUTHORIZED, KINDLY LOGIN </p>;
  }
  return (
    displayRoute && (
      <div className="main-home">
        {menuBar && (
          <div className="menu-bar">
            <div className="orange-button">
              <button onClick={clearLocalStorage}>Sign Out</button>
            </div>
            <div>
              <AiFillCloseCircle onClick={showMenuBar} />
            </div>
          </div>
        )}
        <div className="web-header">
          <h1>4go</h1>
          <form>
            <input type="search" placeholder="Search" />
          </form>
          <div className="searchfor-homepage">
            <AiOutlineSearch />
          </div>
        </div>
        <WebMenu />

        <header className="mobile-header">
          <div onClick={showMenuBar}>
            <img src="./img/profilePic.png" alt="" />
          </div>
          <h1>4go</h1>
          <div>
            <img src="img/message.png" alt="" />
          </div>
        </header>

        <div className="major-home">
          <section className="post-screen">
            {loading ? (
              <h1>loading</h1>
            ) : (
              posts.map((post) => (
                <PostInfo
                  img={post.image}
                  username={post.postedBy.userName}
                  words={post.postContent}
                  time={new Date(post.date).getHours() + "h"}
                  // moreInfo=""
                  likes={post.likes.length}
                  comment={post.comments.length}
                  retweet="50"
                  harshTag="#techTalk"
                />
              ))
            )}
          </section>
          <div className="trends-for-you">
            <div className="trend-container">
              <h1>Trends for you </h1>

              <PerTrend />
              <PerTrend />
              <PerTrend />
              <PerTrend />
              <PerTrend />
              <PerTrend />
              <PerTrend />
              <PerTrend />
              <PerTrend />
              <PerTrend />
              <PerTrend />
              <PerTrend />
              <PerTrend />
              <PerTrend />
              <PerTrend />
              <PerTrend />
              <PerTrend />
              <PerTrend />
              <PerTrend />
              <PerTrend />
              <PerTrend />
              <PerTrend />
              <PerTrend />
              <PerTrend />
              <PerTrend />
            </div>
          </div>
        </div>

        {/* <div className="space"></div> */}

        <Footer path="/" Blue={Blue} />
      </div>
    )
  );
};

export default Homepage;

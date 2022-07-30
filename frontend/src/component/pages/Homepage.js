import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import PostInfo from "../parts/PostInfo";
import Footer from "../parts/Footer";
import Button from "../parts/Button";
import { AiFillCloseCircle } from "react-icons/ai";
const Homepage = () => {
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
  return (
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

      <header>
        <div onClick={showMenuBar}>
          <img src="./img/profilePic.png" alt="" />
        </div>
        <h1>4go</h1>
        <div>
          <img src="img/message.png" alt="" />
        </div>
      </header>
      <section className="post-screen">
        <PostInfo
          img="/img/dusan.png"
          username="Java Babe"
          words="Just curious, are u using => functions exclusively or still sticking
          to the traditional function syntax?"
          time="2h"
          // moreInfo=""
          likes="100"
          comment="100"
          retweet="50"
          harshTag="#techTalk"
        />
        <PostInfo
          img="/img/happy.png"
          username="Happy Soul"
          words="Hello world, Can u hear me?, I said can u hear me"
          time="1h"
          // moreInfo=""
          likes="150"
          comment="20"
          retweet="20"
          harshTag=""
        />
        <PostInfo
          img="/img/happy.png"
          username="Happy Soul"
          words="Happy new month fams, say Hi to your latest celebrity on the app?"
          time="3h"
          // moreInfo=""
          likes="70"
          comment="24"
          retweet="150"
          harshTag="#incomingBlueTick #themGoHear"
        />
        <PostInfo
          img="/img/ayoogunseinde.png"
          username="Ayo Olasehinde"
          words="Hi fam, welcome me to 4go, I hope u are nice over here"
          time="5h"
          // moreInfo=""
          likes="10"
          comment="23"
          retweet="15"
          harshTag="#welcomeMeTo4go #4goStarter"
        />
        <PostInfo
          img="/img/ayoogunseinde.png"
          username="Ayo Olasehinde"
          words="Hi fam, welcome me to 4go, I hope u are nice over here"
          time="5h"
          // moreInfo=""
          likes="10"
          comment="23"
          retweet="15"
          harshTag="#welcomeMeTo4go #4goStarter"
        />
        <PostInfo
          img="/img/ayoogunseinde.png"
          username="Ayo Olasehinde"
          words="Hi fam, welcome me to 4go, I hope u are nice over here"
          time="5h"
          // moreInfo=""
          likes="10"
          comment="23"
          retweet="15"
          harshTag="#welcomeMeTo4go #4goStarter"
        />
        <PostInfo
          img="/img/ayoogunseinde.png"
          username="Ayo Olasehinde"
          words="Hi fam, welcome me to 4go, I hope u are nice over here"
          time="5h"
          // moreInfo=""
          likes="10"
          comment="23"
          retweet="15"
          harshTag="#welcomeMeTo4go #4goStarter"
        />
        <PostInfo
          img="/img/ayoogunseinde.png"
          username="Ayo Olasehinde"
          words="Hi fam, welcome me to 4go, I hope u are nice over here"
          time="5h"
          // moreInfo=""
          likes="10"
          comment="23"
          retweet="15"
          harshTag="#welcomeMeTo4go #4goStarter"
        />
      </section>
      <div className="space"></div>

      <Footer path="/" Blue={Blue} />
    </div>
  );
};

export default Homepage;

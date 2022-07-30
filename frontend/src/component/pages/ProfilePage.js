import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from "../parts/Footer";
const ProfilePage = () => {
  const [diplayName, setDisplayName] = useState("");
  const [about, setAbout] = useState("");

  console.log(diplayName);

  useEffect(() => {
    let userId;
    let userEmail;
    const fetchData = async () => {
      if (localStorage.getItem("id")) {
        userId = localStorage.getItem("id");
        userEmail = localStorage.getItem("email");
        const User = {
          email: userEmail,
          id: userId,
        };

        await fetch(`${process.env.REACT_APP_API}/profile`, {
          method: "POST",

          body: JSON.stringify(User),

          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            console.log(response.user[0].userName);

            setDisplayName(response.user[0].userName);
            // console.log(UserName);
          });
      }
    };
    fetchData();
  }, [diplayName]);

  return (
    <div>
      <div className="upper">
        <h1>4go</h1>
        <h5>
          <GiHamburgerMenu />
        </h5>
      </div>
      <div className="profile-img">
        <img src="/img/profilePic.png" alt="" />
      </div>
      <div className="profile-words">
        <h4>{diplayName}</h4>
        <p>A foodie and a very sharp mouth</p>
      </div>
      <div className="follow-follow">
        <div>
          <p className="bigg">10k</p>
          <p className="small">Followers</p>
        </div>
        <div>
          <p className="bigg">250k</p>
          <p className="small">Following</p>
        </div>
      </div>
      <div className="post-number">
        <button>
          Post <i>(20+)</i>
        </button>
      </div>
      <div className="edit-button">
        <button>Edit Profile</button>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;

import React, { useState, useEffect } from "react";
import Footer from "../parts/Footer";
import Search from "../parts/Search";
import { AiOutlineSearch } from "react-icons/ai";

const SearchPage = () => {
  const [users, setUsers] = useState("");
  const [fetched, setFetched] = useState(false);
  const [follow, setFollow] = useState(false);

  const checkFollow = async () => {
    await fetch;
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${process.env.REACT_APP_API}/users`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          // console.log(users);

          // console.log(response);
          setUsers(response.users);
          setFetched(true);
        });
    };
    fetchData();
  }, []);
  console.log(users);

  return (
    <div className="searchpage">
      <div className="notify-flex">
        <div>
          <img src="/img/profilePic.png" alt="" />
        </div>
        <div className="posting-form">
          <form>
            <input type="search" />
          </form>
          <div className="searchfor">
            <AiOutlineSearch />
          </div>
        </div>
      </div>
      {users &&
        users.map((user) => {
          return <Search userName={user.userName} />;
        })}
      <div className="space"></div>
      <Footer />
    </div>
  );
};

export default SearchPage;

import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";

const search = ({ userName }) => {
  return (
    <div className="search-entity post-info">
      <div>
        <img src="img/ayoogunseinde.png" alt="" />
      </div>
      <div className="post-words">
        <div>
          <h1>{userName}</h1>
        </div>
        <p>1500 Folowers</p>
        <div className="add-viewButton">
          <button>Follow</button>
          <button className="coloured">View Profile</button>
        </div>
      </div>
      <FiMoreHorizontal />
    </div>
  );
};

export default search;

import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { MdOutlineModeComment } from "react-icons/md";
import { AiOutlineRetweet } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";

const PostInfo = ({
  img,
  username,
  words,
  time,
  likes,
  comment,
  retweet,
  harshTag,
}) => {
  return (
    <div className="post-info">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="post-words">
        <div>
          <h1>{username}</h1>
        </div>
        <p>
          {words}

          <a href="/post" className="harsh-tag">
            {harshTag}
          </a>
        </p>
        <div className="likes-comment">
          <span>
            <AiFillHeart style={{ color: "#fb7901" }} />
            <p>{likes}</p>
          </span>
          <span>
            <MdOutlineModeComment style={{ color: "rgb(168, 166, 166)" }} />
            <p>{comment}</p>
          </span>
          <span>
            <AiOutlineRetweet style={{ color: "rgb(168, 166, 166)" }} />
            <p>{retweet}</p>
          </span>
        </div>
      </div>
      <div className="time-more">
        <i>{time}</i>
        <FiMoreHorizontal />
      </div>
    </div>
  );
};

export default PostInfo;

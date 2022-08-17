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
      <div className="user-pic">
        <img alt="" src="/img/profilePic.png" />
      </div>
      <div className="post-words">
        <div>
          <h1>{username}</h1>
        </div>
        <p className="post-corner">
          <img src={img} alt="" width={170} height={"auto"} />
          <a href="/post" className="harsh-tag">
            {harshTag}
          </a>

          <span>{words}</span>
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

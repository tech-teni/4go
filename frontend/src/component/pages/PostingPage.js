import React from "react";
import { ImHome } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import Footer from "../parts/Footer";
const PostingPage = () => {
  const postBlue = {
    color: "#4c88e1",
  };
  let colourful = {
    home: false,
    search: false,
    post: true,
    notify: false,
    profile: false,
  };
  return (
    <div>
      <div className="upper-button">
        <button className="cancel-button">Cancel</button>
        <button className="post-button">Post</button>
      </div>
      <div>
        <div class="posting-flex">
          <div>
            <img src="/img/profilePic.png" alt="" />
          </div>
          <div class="posting-form">
            <form>
              <textarea
                cols="35"
                rows="10"
                placeholder="What are u thinking? "
              ></textarea>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>

    // </div>
  );
};

export default PostingPage;

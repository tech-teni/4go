import React, { useState } from "react";
import { ImHome } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import Footer from "../parts/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const PostingPage = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState();
  const [image, setImage] = useState();
  const [postContent, setPostContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      setImagePreview(reader.result);
      setImage(image);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("postContent", postContent);
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/post`,
        formData,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      setLoading(false);
      if (res.status === 200) {
        toast.success("successfully posted");
        setPostContent("");
        setImage(null);
        navigate("/home");
      }
    } catch (error) {
      setLoading(false);
    }

    return;

    await fetch(`${process.env.REACT_APP_API}/post`, {
      method: "POST",
      body: formData,
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log(users);
        console.log(response);
      });
  };

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
        <button
          disabled={loading}
          className="post-button"
          onClick={handleSubmit}
        >
          {loading ? "Posting" : "Post"}
        </button>
      </div>
      <div>
        <div className="posting-flex">
          <div>
            <img src="/img/profilePic.png" alt="" />
          </div>
          <div className="posting-form">
            <form>
              <textarea
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                cols="35"
                rows="10"
                placeholder="What are u thinking? "
              ></textarea>
              {imagePreview && (
                <img src={imagePreview} width={200} height={200} />
              )}
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/jpeg"
              />
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

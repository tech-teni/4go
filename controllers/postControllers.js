const postModel = require("../models/postModel");
const mongoose = require("mongoose");
const { check, validationResult } = require("express-validator");
const _ = require("lodash");
const formidable = require("formidable");
const fs = require("fs");
const { post } = require("../routes/postRoutes");
const { findById } = require("../models/postModel");
// const cloudinary = require("../utils/cloudinary");
const cloudinary = require("cloudinary");

// get post by _id
const PostById = (req, res, next, id) => {
  postModel = findById(id)
    .populate("postedBy", "_id name")
    .exec((err, post) => {
      if ((err, !post)) {
        return res.status(400).json({ error: err });
      }
      req.post = post;
      next;
    });
};

//create post
const createPostController = async (req, res, next) => {
  try {
    const result = await cloudinary.v2.uploader.upload(req.file.path, {
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
      cloud_name: process.env.CLOUD_NAME,
    });

    console.log("image", result);
    const errors = validationResult(req);
    if (errors.notEmpty) {
      console.log(errors);

      return res
        .status(400)
        .json({ post: errors.array().map((err) => err.msg) });
    }

    const { postContent } = req.body;
    const post = {
      postedBy: req.auth._id,
      postContent,
      image: result.secure_url,
    };
    const Post = new postModel(post);

    Post.save()
      .then((result) => {
        console.log("post saved");
        res.status(200).json({ post: result });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ post: err });
      });
    return;
  } catch (error) {
    console.log("error", error);
  }
};

//get all posts
const getPostController = async (req, res) => {
  const posts = postModel
    .find()
    .populate("postedBy")
    .sort({ date: 1 })
    // .select("_id userName")
    .then((posts) => {
      res.status(200).json({ posts: posts });
    })
    .catch((e) => {
      console.log(e);
    });
};
// get a user post
const postByUser = (req, res) => {
  postModel
    .find({ postedBy: req.profile._id })
    .populate("postedBy", "_id name ")
    .sort("_created")
    .exec((err, posts) => {
      if (err) {
        return res.status(400).json({ err });
      }
      res.json({ posts: posts });
    });
};

// update post
const updatePost = (req, res, next) => {
  let post = req.post;
  post = _.extend(user, req.body);
  post.updated = Date.now();
  post.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(post);
  });
};
//
const deletePost = (req, res) => {
  let post = req.post;
  post.remove((err, post) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.json({ message: "post deleted succesfully " });
  });
};
const isPoster = (req, res) => {
  let isPost = req.post && req.auth && req.post.postedBy === req.auth._id;
  if (!isPost) {
    res.status(403).json({
      error: "user is not permiited",
    });
  }
  next();
};

// export
module.exports = {
  createPostController,
  getPostController,
  updatePost,
  postByUser,
  PostById,
  deletePost,
  isPoster,
};

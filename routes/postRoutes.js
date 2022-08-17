const express = require("express");
const { check, validationResult } = require("express-validator");
const { UserById } = require("../controllers/userController");

const { postValidator } = require("../validators/validators");
const jwt = require("jsonwebtoken");
const {
  createPostController,
  getPostController,
  updatePost,
  postByUser,
  PostById,
  deletePost,
  isPoster,
} = require("../controllers/postControllers");
const { authenticateToken } = require("../controllers/AuthControllers");
const multer = require("multer");
const router = express.Router();
const upload = multer({
  storage: multer.diskStorage({}),
});
//authenticate token
router.post(
  "/",
  upload.single("image"),
  authenticateToken,
  createPostController
);
router.get("/", authenticateToken, getPostController);
router.get("/by/:userId", authenticateToken, postByUser);
router.delete("/post/:postId", authenticateToken, isPoster, deletePost);

router.put("/", authenticateToken, updatePost);

// params PostById
router.param("userId", UserById);
router.param("postId", PostById);

module.exports = router;

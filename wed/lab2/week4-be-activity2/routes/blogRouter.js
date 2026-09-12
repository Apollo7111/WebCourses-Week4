const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  // patchBlog
} = require("../controllers/blogController");
 
// GET /blogs
router.get("/", getAllBlogs);

// POST /blogs
router.post("/", createBlog);

// GET /blogs/:carId
router.get("/:blogId", getBlogById);

// PUT /blogs/:carId
router.put("/:blogId", updateBlog);

// DELETE /blogs/:carId
router.delete("/:blogId", deleteBlog);

module.exports = router;



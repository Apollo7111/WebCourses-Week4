const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  // patchUser
} = require("../controllers/userController");
 
// GET /users
router.get("/", getAllUsers);

// POST /users
router.post("/", createUser);

// GET /users/:carId
router.get("/:userId", getUserById);

// PUT /users/:carId
router.put("/:userId", updateUser);

// DELETE /users/:carId
router.delete("/:userId", deleteUser);

module.exports = router;



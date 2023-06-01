const asyncHandler = require("express-async-handler");

const userModel = require("../models/users");

// @desc   Get users
// @route  GET /users
const getUsers = asyncHandler(async (req, res) => {
  const users = await userModel.find();

  res.status(200).json(users);
});

// @desc   Create users
// @route  POST /users
const createUser = asyncHandler(async (req, res) => {
  const user = await userModel.create({
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  });

  res.status(200).json(user);
});

// @desc   Update users
// @route  PUT /users/:id
const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update user ${req.params.id}` });
});

// @desc   Delete users
// @route  DELETE /users/:id
const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete user ${req.params.id}` });
});

module.exports = { getUsers, createUser, updateUser, deleteUser };

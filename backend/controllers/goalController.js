const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// @desc    Get goals
// @route   GET /api/goals
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

// @desc    Set goals
// @route   POST /api/goals
const setGoal = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

// @desc    Update goals
// @route   PUT /api/goals:id
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc    Delete goals
// @route   DELETE /api/goals:id
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };

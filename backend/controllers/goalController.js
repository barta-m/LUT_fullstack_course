// @desc    Get goals
// @route   GET /api/goals
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

// @desc    Set goals
// @route   POST /api/goals:id
const setGoal = (req, res) => {
  res.status(200).json({ message: "Set goal" });
};

// @desc    Update goals
// @route   PUT /api/goals
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// @desc    Delete goals
// @route   DELETE /api/goals:id
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };

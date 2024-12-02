import { useDispatch } from "react-redux";
import { deleteGoal, toggleFlag } from "../features/goals/goalSlice"; // Přidat toggleFlag

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  return (
    <div className={`goal ${goal.isFlagged ? "flagged" : ""}`}>
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        X
      </button>
      <button
        onClick={() => dispatch(toggleFlag(goal._id))}
        className="flag-btn"
      >
        {goal.isFlagged ? "Unflag" : "Flag"}
      </button>
    </div>
  );
}

export default GoalItem;

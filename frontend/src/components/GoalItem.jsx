import { format } from "date-fns";
import { useDispatch } from "react-redux";
import { deleteGoal, toggleFlag } from "../features/goals/goalSlice"; // Přidat toggleFlag

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  const formattedDate = format(new Date(goal.createdAt), "d MMM yyyy, HH:mm");

  return (
    <div className="goal">
      <div className="goal-date">{formattedDate}</div>
      <h2 className="goal-text">{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        X
      </button>
      <button
        onClick={() => dispatch(toggleFlag(goal._id))}
        className={`flag-btn ${goal.isFlagged ? "flagged" : ""}`}
      >
        {goal.isFlagged ? "❌ Unflag" : "🏴‍☠️ Flag"}
      </button>
    </div>
  );
}

export default GoalItem;

import { useMyTasksContext } from "../../hooks/useTaskContext";
import { useAuthContext } from "../../hooks/useAuthContext";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

const TaskDetails = ({ task }) => {
  const { dispatch } = useMyTasksContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/myTasks/${task._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete task");
      }

      const deletedTask = await response.json();
      dispatch({ type: "DELETE_TASK", payload: deletedTask });
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      <p>{task.title}</p>
      <p>
        {formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}
      </p>
      <span
        onClick={handleClick}
        style={{ cursor: "pointer", backgroundColor: "red" }}
      >
        Delete
      </span>
    </div>
  );
};

export default TaskDetails;

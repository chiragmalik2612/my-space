import { useEffect, useState } from "react";
import { useMyTasksContext } from "../../hooks/useTaskContext";
import TaskDetails from "./TaskDetails";
import AddTask from "./AddTask";

const MyTasks = () => {
  const { tasks, dispatch } = useMyTasksContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/myTasks');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        dispatch({ type: 'SET_TASKS', payload: json });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="myTasks">
      <AddTask />
      <div className="tasks">
        {tasks && tasks.map(task => (
          <TaskDetails task={task} key={task._id} />
        ))}
      </div>
    </div>
  );
};

export default MyTasks;

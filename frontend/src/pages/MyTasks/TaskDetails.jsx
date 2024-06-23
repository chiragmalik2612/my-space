import { useMyTasksContext } from "../../hooks/useTaskContext";

import formatDistanceToNow from "date-fns/formatDistanceToNow"

const TaskDetails = ({task}) => {
    const {dispatch} = useMyTasksContext()

    const handleClick = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/myTasks/${task._id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete task');
            }

            const deletedTask = await response.json();
            dispatch({ type: 'DELETE_TASK', payload: deletedTask });
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };
      

    return(
        <div style={{border:"1px solid black", padding:"1rem"}}>
            <p>{task.title}</p>
            <p>{formatDistanceToNow(new Date(task.createdAt), {addSuffix: true})}</p>
            <span onClick={handleClick} style={{cursor:"pointer", backgroundColor:"red"}}>Delete</span>
        </div>
    )
}

export default TaskDetails;
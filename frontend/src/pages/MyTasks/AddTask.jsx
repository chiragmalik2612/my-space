import { useState } from 'react'
import { useMyTasksContext } from '../../hooks/useTaskContext'

const AddTask = () => {
    const { dispatch } = useMyTasksContext()

    const [title, setTitle] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const task = { title }

        const response = await fetch('http://localhost:5000/api/myTasks', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            setTitle('')
            dispatch({ type: 'CREATE_TASK', payload: json })
        }
    }
  return (
    <div>
      <form style={{ marginBottom: "1rem" }} onSubmit={handleSubmit}>
        <h3>Add a New Task</h3>
        <label>Task Title:</label>
        <input type="text"
        onChange={(e) => setTitle(e.target.value)}
        value= {title} />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
import { useState } from 'react'
import { useMyTasksContext } from '../../hooks/useTaskContext'
import { useAuthContext } from '../../hooks/useAuthContext'


const AddTask = () => {
    const { dispatch } = useMyTasksContext()
    const { user } = useAuthContext()

    const [title, setTitle] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
          setError('You must be logged in')
          return
        }

        const task = { title }

        const response = await fetch('http://localhost:5000/api/myTasks', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
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
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default AddTask;
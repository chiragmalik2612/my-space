import { useAuthContext } from './useAuthContext'
import { useMyTasksContext } from './useTaskContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchTasks } = useMyTasksContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    dispatchTasks({ type: 'SET_TASKS', payload: null })
  }

  return { logout }
}
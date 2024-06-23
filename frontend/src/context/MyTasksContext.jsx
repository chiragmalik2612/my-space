import { createContext, useReducer } from "react";

export const MyTasksContext = createContext();

export const myTasksReducer = (state, action) => {
    switch (action.type) {
        case "SET_TASKS":
        return {
            tasks: action.payload,
        };
        case "CREATE_TASK":
        return {
            tasks: [action.payload, ...state.tasks],
        };
        case "DELETE_TASK":
        return {
            tasks: state.tasks.filter((t) => t._id !== action.payload._id),
        };
        case "UPDATE_TASK":
        return {
            tasks: state.tasks.map((t) =>
            t._id === action.payload._id ? action.payload : t
            ),
        };
        default:
        return state;
    }
    }

export const MyTasksContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(myTasksReducer, {
        tasks: null,
    });

    return (
        <MyTasksContext.Provider value={{ ...state, dispatch }}>
        {children}
        </MyTasksContext.Provider>
    );
}

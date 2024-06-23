import {MyTasksContext} from "../context/MyTasksContext";
import {useContext} from "react";

export const useMyTasksContext = () => {
    const context = useContext(MyTasksContext)

    if(!context) {
        throw Error('useMyTasksContext must be used inside an MyTasksContextProvider')
    }

    return context
}


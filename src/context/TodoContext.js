import { createContext, useContext } from "react";

const TodoContext = createContext();
const todoDispatchContext = createContext();

const TodoProvider = ({children}) => {
    return (
        <TodoContext.Provider>
            <todoDispatchContext.Provider>
                {children}
            </todoDispatchContext.Provider>
        </TodoContext.Provider>
    )
}

const useTodos = () => useContext(TodoContext);
const useDispatchTodos = () => useContext(todoDispatchContext);

export { useTodos, useDispatchTodos }

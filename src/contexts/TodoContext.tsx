import React, { createContext, useContext, ReactNode } from "react";
import { TodoContextType } from "../types";
import { useTodo } from "../hooks/useTodo";

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodoContext = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodoContext must be used within TodoProvider");
    }
    return context;
};

interface TodoProviderProps {
    children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    const todoHook = useTodo();

    return (
        <TodoContext.Provider value={todoHook}>
            {children}
        </TodoContext.Provider>
    );
};

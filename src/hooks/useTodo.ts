import { useState } from "react";
import { Todo } from "../types";

export const useTodo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text: string) => {
        if (text.trim()) {
            const newTodo: Todo = {
                id: Date.now().toString(),
                text: text.trim(),
                completed: false,
                createdAt: new Date()
            };
            setTodos(prev => [...prev, newTodo]);
        }
    };

    const deleteTodo = (id: string) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id: string) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return {
        todos,
        addTodo,
        deleteTodo,
        toggleTodo
    };
};

import React, { useState } from 'react'
import Form from './Form'
import List from './List'

const Todo = () => {
    const todosList = [
        {
            id: 1,
            content: "店予約する",
            editing: false,
        },
        {
            id: 2,
            content: "卵買う",
            editing: false,
        },
        {
            id: 3,
            content: "郵便出す",
            editing: false,
        },
    ];

    const [todos, setTodos] = useState(todosList);

    const createTodo = (todo) => {
        setTodos([...todos, todo]);
    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => {
            return todo.id !== id;
        })

        setTodos(newTodos);
    }

    const updateTodo = (todo) => {
        const newTodos = todos.map(_todo => {
            return _todo.id === todo.id ? {..._todo, ...todo} : {..._todo}
        })
        setTodos(newTodos);
    }

    return (
        <>
            <List todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
            <Form createTodo={createTodo} />
        </>
  )
}

export default Todo

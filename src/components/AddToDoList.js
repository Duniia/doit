import React, { useState } from 'react'; 
import AddToDoForm from './AddToDoForm';

export default function AddToDoList() {

    const [todos, setTodos] =useState([])
    
    const addTodo = todo => {

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(...todos);
    };


    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
             return todo;
        });

        setTodos(updatedTodos); 
    }
    return (
        <>
        <h1>New task</h1>
        <AddToDoForm onSubmit={addTodo} />
        </>
    )
};
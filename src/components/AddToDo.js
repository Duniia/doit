// Kodet af Michelle

import React, { useState } from "react";

export default function AddTodo({todos, completeTodo}) {

    return todos.map((todo, index) => (
        <div className= {todo.isComplete ? 'todo-row complete' :
         'todo-row'} key={index}>  

         <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
         </div>
        </div>
    )); 
};
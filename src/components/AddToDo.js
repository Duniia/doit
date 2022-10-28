import React, { useState } from "react";
import AddToDoForm from "./AddToDoForm";
import AddToDoList from "./AddToDoList";

export default function({todos, completeTodo}) {

    const [edit, setEdit] = useState({
        id:null,
        value: ''
    }) 

    return todos.map((todo, index) => (
        <div className= {todo.isComplete ? 'todo-row complete' :
         'todo-row'} key={index}>  

         <div key={todo.id} conClick={() => completeTodo(todo.id)}>
            {todo.text}
         </div>

         <div className="ikoner">

         </div>
         </div>
    )); 
}
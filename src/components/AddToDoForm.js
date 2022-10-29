// import { prependOnceListener } from 'process';
import React, { useState } from 'react'; 

export default function(props) {
    const [input,setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault(); 

        props.onSubmit({
          id:Math.floor(Math.random() * 10000),
          text: input
        });

        // Gør at du kan skrive ny tekst
        setInput('')
    };

    return (
        <>
         <form className="add-todo-form" onSubmit={handleSubmit}>
            <input type="text" 
             placeholder="Add a todo" 
             value={input}
             name="text" 
             className="Add-todo-input"
             onChange={handleChange}
            />
         
         </form>
        </>
    )
};
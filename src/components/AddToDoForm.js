// kodet af Michelle
import React, { useState } from 'react'; 

export default function({title, setTitle}) {
  




   
    return (
     

            <input type="text" 
             placeholder="Add a todo" 
             value={title}
             name="text" 
             className="Add-todo-input"
             onChange={(e) => setTitle(e.target.value)}
            />
    
    )
};
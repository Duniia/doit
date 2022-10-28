import React, { useState } from 'react'
import {BsPlusLg} from 'react-icons/bs'

function ToDoForm(probs) {
    
    // State
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        probs.addTodo(input)
        setInput('')
    }

    return (
    <form onSubmit={handleSubmit} className='todo-form'>
        <input 
        value={input}
        onChange={(e) => setInput(e.target.value)} 
        placeholder='Add a new task' 
        className="todo-input" 
        />
        <button type='submit'className="todo-button"><BsPlusLg/></button>
    </form>
  )
}

export default ToDoForm
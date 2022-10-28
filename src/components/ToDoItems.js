import React from 'react';
// import {IoClose} from 'rect-icons/io';

function ToDoItems(probs) {
  return (
    <div className='todo-row'>
        {probs.todo.text}
        <div className='iconsContainer'>
        {/* <IoClose className='icon'/> */}
        </div>
    </div>
  )
}

export default ToDoItems
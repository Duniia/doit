// Kodet af Michelle 

import React from "react";
import '../styles/addtask.css'; 
import {AiOutlinePlus} from 'react-icons/ai';

export default function AddTask() {

    return (
        <>
         <div className="New">
            <h2>Add new task</h2>
            <div className="plus">
                <AiOutlinePlus/>
            </div>
         </div>
        </>
       
    );
}; 
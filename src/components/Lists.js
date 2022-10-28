// Kodet af Michelle 

import React from "react";
import '../styles/Lists.css';
import {BsArrowsAngleExpand} from 'react-icons/bs'; 



export default function Lists() {

    return (
        <>
         <div className="List_one">
         <h4>Personal doit list</h4>
         <BsArrowsAngleExpand/>
        
        </div>
        <div className="List_two">
        <h4>Household doit list</h4>
        <BsArrowsAngleExpand/>
       
        </div>
        </>  
    );
}; 
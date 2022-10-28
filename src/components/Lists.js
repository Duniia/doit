// Kodet af Michelle 

import React from "react";
import {BsArrowsAngleExpand} from 'react-icons/bs'; 



export default function Lists() {

    return (
        <>
         <div className="List_one">
         <h4>Personal doit list</h4>
         <div className="List_arrow">
         <BsArrowsAngleExpand/>
         </div>
        
        </div>
        <div className="List_two">
        <h4>Household doit list</h4>
        <div className="List_arrow">
         <BsArrowsAngleExpand/>
         </div>
        </div>
        </>  
    );
}; 
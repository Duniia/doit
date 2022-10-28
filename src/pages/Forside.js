import React from 'react';
import { NavLink } from "react-router-dom";
import PersonIkon from '../components/PersonIkon';
import Opgaver from '../components/Opgaver';
import Overskrift from '../components/Overskrift';
import OpgaveTitle from '../components/OpgaveTitle';
import Button from '../components/Button';
import Lists from '../components/Lists';
import AddTask from '../components/AddTask'; 


// kodet af Michelle

export default function Forside() {
  return (
    <>
    <section className="Top">
      <h1>doit</h1>

      <NavLink to="/Profil"><PersonIkon/></NavLink>
     
     </section>

       <section className="box">
        <div className="Container">
          <Overskrift name="Your next task"/>

         <div className="Opgave1">
          <Opgaver name="Personal" />
           <div className="opgave_container">
            <OpgaveTitle name="Fold laundry" />
           <Button/>
          </div>
        </div>

       <div className="Opgave2">
        <Opgaver name="Household" />
         <div className="Opgave_container2">
           <OpgaveTitle name="Cook dinner" /> 
            <Button/>
          </div>
        </div>

     </div>
   </section>

    <section className="List_container">
      <Lists/>
      
     </section>

     <section className="addnew">
     <NavLink to="/NewTask"><AddTask />
      </NavLink>
     </section>
  </>
  );
}; 
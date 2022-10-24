import React from 'react';
import '../styles/forside.css';
import PersonIkon from './components/PersonIkon.js';
import Opgaver from './components/Opgaver.js';
import Overskrift from './components/Overskrift.js';
import OpgaveTitle from './components/OpgaveTitle.js';
import Button from './components/Button.js';
import Lists from './components/Lists.js';
import AddTask from './components/AddTask.js'; 

// kodet af Michelle

export default function App() {
  return (
    <>
    <section className="Top">
      <h1>doit</h1>
     <PersonIkon/>
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
      <AddTask /> 
     </section>
  </>
  );
}; 
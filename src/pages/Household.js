// Dunia
import React from 'react';
import Button from '../components/Button';
import Overskrift from '../components/Overskrift';
import OpgaveTitle from '../components/OpgaveTitle';
import {CgArrowsExpandRight} from 'react-icons/cg'
import {IoMdArrowBack} from 'react-icons/io'
import { NavLink } from "react-router-dom";
import PersonalOrHouseBtn from '../components/PersonalOrHouseBtn';

function Household() {
  
    return (
      <>
    
      <section className='topnav'>
        <div className="back-btn">
          <NavLink to="/Forside"><IoMdArrowBack /></NavLink>
        </div>
        <PersonalOrHouseBtn/>
        </section>
        <h1>My Household Tasks</h1>
        <section className="box1">
          <Overskrift name="Your daily task"/>
        <div className="Container1">
         <div className="Opgave11">
           <div className="opgave_container11">
            <OpgaveTitle name="Fold laundry" />
           <Button/>
          </div>
        </div>
        

       <div className="Opgave22">
         <div className="Opgave_container22">
           <OpgaveTitle name="Cook dinner" /> 
            <Button/>
          </div>
        </div>
     </div>
     <div className="expand">
     <CgArrowsExpandRight/>
     </div>   
     </section>

    <section className="box1">
          <Overskrift name="Your weekly task"/>
        <div className="Container1">
         <div className="Opgave11">
           <div className="opgave_container11">
            <OpgaveTitle name="Fold laundry" />
           <Button/>
          </div>
          
        </div>

       <div className="Opgave22">
         <div className="Opgave_container22">
           <OpgaveTitle name="Cook dinner" /> 
            <Button/>
          </div>
        </div>
     </div>
     <div className="expand">
     <CgArrowsExpandRight/>
     </div>
   </section>
    </>
  )
}
export default Household;

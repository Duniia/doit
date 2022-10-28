// Kodet af Dunia
import React from 'react';
import { useState } from 'react';
import '../styles/personlig.scss'
import ToDoItems from '../components/ToDoItems';
import ToDoForm from '../components/ToDoForm';
import Button from '../components/Button';
import Overskrift from '../components/Overskrift';
import OpgaveTitle from '../components/OpgaveTitle';
import {CgArrowsExpandRight} from 'react-icons/cg'
import {IoMdArrowBack} from 'react-icons/io'
import { NavLink } from "react-router-dom";
import PersonalOrHouseBtn from '../components/PersonalOrHouseBtn';

function Personlig() {


  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = {id: id, text: text, comleted: false}
    let newTodos = [todo, ...todos]
    console.log(newTodos)
    setTodos(newTodos)
  };
  return (
    <>
  
    <section className='topnav'>
      <div className="back-btn">
        <NavLink to="/" end><IoMdArrowBack /></NavLink>
      </div>
        <PersonalOrHouseBtn/>
      </section>

      <h1>My Personal Tasks</h1>
    <div className='todo-app'>
      {/* Add for each to do into component (todoitems) */}
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
     </div>   </section>
      {todos.map((todo) => {
        return (
          <ToDoItems todo={todo}/>
        )
      })}
    </div>
    <div className='todo-app'>
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
    </div>
    <ToDoForm addTodo={addTodo}/>
    </>
  )
}

export default Personlig
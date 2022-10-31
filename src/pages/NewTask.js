// kodet af Michelle
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {BsArrowLeft} from 'react-icons/bs'
import PersonIkon from '../components/PersonIkon';
import InsertText from '../components/InsertText';
import Switch from '../components/Switch';
import Nav from '../components/Nav';
import AddToDoForm from '../components/AddToDoForm';



export default function NewTask({ addTodo }) {
  const [isToggled, setIsToogled] = useState(false);
  const [title, setTitle] = useState("");

  return (
    <>
      <section className="wrapper">
        <div className="T">
          <div className="tilbage_pil">
            <NavLink to="/">
              <BsArrowLeft />
            </NavLink>
          </div>
        </div>

        <div className="ny_opgave">
            <h1>New task</h1>
          <AddToDoForm title={title} setTitle={setTitle}/>
          <div className="When">
            <InsertText name="When to do it" />
          </div>
        </div>
        </section>
        
        <div className="hvem">
          <InsertText name="Who should do it?" />
        </div>
        <div className="Pr_container">
          <div className="personer">
            <PersonIkon />
            <PersonIkon />
            <PersonIkon />
            <PersonIkon />
          </div>
          <Switch
            rounded={true}
            isToogled={isToggled}
            onToogle={() => {
              setIsToogled(true);
              addTodo({title, category: "Personal"})
              window.location.href = "/forside"
            }}
          />
        </div>
      <Nav></Nav>
    </>
  );
}

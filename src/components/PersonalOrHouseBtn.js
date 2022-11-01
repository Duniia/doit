// Kodet af Dunia, credit til Rikke's signin/register component. 
import React from 'react'
import { NavLink } from 'react-router-dom'


function PersonalOrHouseBtn() {
  return (
    <section className="personalBtn">
      <div className="personalBtn-container">
        <NavLink to="/Personlig" end className={({ isActive }) => (isActive ? 'active' : 'inactive')} id="PersonalOrHouseBtn">Personal</NavLink>

        <NavLink to="/Household" className={({isActive}) => (isActive ? 'active' : 'inactive')} id="PersonalOrHouseBtn">Household</NavLink>
      </div>
    </section>
  )
}

export default PersonalOrHouseBtn;

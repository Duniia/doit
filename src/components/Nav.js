import React from 'react'
import { NavLink } from "react-router-dom";
// import '../styles/nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {FiUsers, FiSettings} from 'react-icons/fi'

function Nav() {
  return (
    <nav className="navbar">
    <NavLink to="/forside" end><AiOutlineHome /></NavLink>
    <NavLink to="/personlig"><AiOutlineUser /></NavLink>
    <NavLink to="/medlemmer"><FiUsers /></NavLink>
    <NavLink to="/settings"><FiSettings/></NavLink>
    </nav>
  )
}

export default Nav
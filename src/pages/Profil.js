//Dunia
import React from 'react'
import '../styles/profile.scss'
import {BsPersonFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import {IoMdArrowBack} from 'react-icons/io'

function Profil() {
  return (
    <>
          <div className=" back-profile">
        <NavLink to="/Forside"><IoMdArrowBack /></NavLink>
      </div>
    <section className="profile">
    <h1>My Profile</h1>
    <BsPersonFill className='profilicon' />
    <p>Change your profile photo</p>

    <div className="profile-form">
                <input type="text" placeholder="Name" className="profiletext" required/>
                <input type="text" placeholder="Password" className="profiletext" required/>
                <input type="text" placeholder="E-mail" className="profiletext" required/>
                <input type="submit" value="Change" id="create" />
            </div>
    </section>
    </>
    )
}

export default Profil
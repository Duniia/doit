//Dunia
import React from 'react'
import '../styles/personlig.css'
import Button from '../components/Button'
import {BsPersonFill} from 'react-icons/bs'

function Profil() {
  return (
    <>
    <h1>My Profile</h1>
    <div>
    <BsPersonFill className='profilicon'/>
    <p>Change your profile photo</p>
    </div>

    <div className="profile-form">
                <input type="text" placeholder="Name" className="register" required/>
                <input type="text" placeholder="Username" className="register" required/>
                <input type="text" placeholder="E-mail" className="register" required/>
                <input type="submit" value="Create" id="create" />
            </div>
            <Button/>
    </>
    )
}

export default Profil
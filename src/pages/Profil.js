//Dunia
import React from 'react'
import Button from '../components/Button'
import PersonIkon from '../components/PersonIkon'

function Profil() {
  return (
    <>
    <h1>My Profile</h1>
    <PersonIkon/>
    <p>Change your profile photo</p>

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
import {useState} from 'react';
import {BsPersonFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom';
import Nav from '../components/Nav';
import Ldcomponent from '../components/ld.js';
//  Nadia

export default function SettingsPage() {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // toggle
    setIsActive(current => !current);

  };

  return (
    <section>
  {/*intro*/}
  <main className="settingsmain"
    style={{
          backgroundColor: isActive ? ' rgb(203,255,212, 0.69), rgb(199,242,255, 0.82), rgb(148,236,255, 0.03)' : ''
        }}>

  <section className="settings">
    <div className="settings-intro">
        <h1 className="settings-header"> Settings</h1>
    </div>

  {/*Profil og log out*/}
    <br></br>
  <div className="row-settings">
    <div className="column-settings">
     {" "}
    <BsPersonFill className="profilsettingsicon" size={40} style={{
     backgroundColor: 'white', borderRadius: '70px', padding:'3px' }}/>
     Name
    </div>

  <div className="column-settings">
    <NavLink to="/" className="button-log" type="button" style={{marginTop:'10px' }}>
      Log out
    </NavLink>
          </div>
        </div>

  {/*settings knapper(bokse)*/}
    <br></br>
  <div className="settingboks-container">
    <a href="/#" className="settingboks" type="button">
      <p className="settings-btn-text">Visual settings</p>
    </a>
  </div>

  <div className="settingboks-container">
    <a href="/#" className="settingboks" type="button">
      <p className="settings-btn-text">Notifications</p>
    </a>
  </div>
           
 <div className="settingboks-container">
  <a href="/#" className="settingboks" type="button">
      <p className="settings-btn-text">Support</p>
  </a>
  </div>

  <div className="settingboks-container">
    <a href="/#" className="settingboks" type="button">
      <p className="settings-btn-text">About doit</p>
    </a>
  </div>
  <br></br>
 </section>

  {/*tema tekst*/}
  <div className="theme-text">
    <p>Choose theme</p>
  </div>

  {/*light / dark mode knap/icon*/}
  <Ldcomponent/>
  <br></br>

  {/*change background knap*/}
  <div className="buttonbackgroundcontainer">
    <a href="#" className="buttonbackground" type="button"
      onClick={handleClick}>
      <p className="btn-knaptekst">Change background</p>
    </a>
  </div>
  <br></br>

      </main>
      
      <Nav/>
    </section>
  );
}

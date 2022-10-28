import { Routes, Route, Navigate } from "react-router-dom";
import Nav from './components/Nav';
import './styles/nav.css';
import './styles/personlig.css';
import './styles/variables.css';
import './styles/style.css';
import './styles/loginregister.css';
import './styles/michelle.css';
import Forside from './pages/Forside'
import MedlemmerPage from "./pages/MedlemmerPage";
import SettingsPage from "./pages/SettingsPage";
import Personlig from "./pages/Personlig";
import NewTask from "./pages/NewTask";
import Household from "./pages/Household";
import SignIn from './pages/Signin';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        {/* <Route path="/" element={<SignIn/>}/> */}
        <Route path="forside" element={<Forside />}/>
        <Route path="Personlig" element={<Personlig />}/>
        <Route path="medlemmer" element={<MedlemmerPage />}/>
        <Route path="settings" element={<SettingsPage />}/>
        <Route path="NewTask" element={<NewTask />}/>
        <Route path="Household" element={<Household />}/>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<SignIn/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="/forside/:currentUser" element={<Forside />} />
        </Routes>
        </>
  );
}

export default App;

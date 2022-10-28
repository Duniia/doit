import { Routes, Route, Navigate } from "react-router-dom";
import Nav from './components/Nav';
import './styles/nav.css';
import Forside from './pages/Forside'
import MedlemmerPage from "./pages/MedlemmerPage";
import SettingsPage from "./pages/SettingsPage";
import Personlig from "./pages/Personlig";
import NewTask from "./pages/NewTask";
import Household from "./pages/Household";

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        {/* <Route path="/" element={<SignIn/>}/> */}
        <Route path="/" element={<Forside />}/>
        <Route path="Personlig" element={<Personlig />}/>
        <Route path="medlemmer" element={<MedlemmerPage />}/>
        <Route path="settings" element={<SettingsPage />}/>
        <Route path="NewTask" element={<NewTask />}/>
        <Route path="Household" element={<Household />}/>
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </>
  );
}

export default App;

import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Nav from './components/Nav';
import './styles/nav.css';
import Forside from './pages/Forside'
import MedlemmerPage from "./pages/MedlemmerPage";
import SettingsPage from "./pages/SettingsPage";
import Personlig from "./pages/Personlig";

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
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </>
  );
}

export default App;

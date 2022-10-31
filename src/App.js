import { Routes, Route, Navigate } from "react-router-dom";
import './styles/styles.css';
import Forside from './pages/Forside'
import MedlemmerPage from "./pages/medlemmer2";
import SettingsPage from "./pages/settings2";
import Personlig from "./pages/Personlig";
import NewTask from "./pages/NewTask";
import Household from "./pages/Household";
import SignIn from './pages/Signin';
import Register from './pages/Register';
import Profil from "./pages/Profil";
import { useState } from "react"


function App() {

  const [todos, setTodosState]= useState(JSON.parse(localStorage.getItem("todos") || "[]")) 
 
  const addTodo = (todo) => {
  setTodosState([...todos, todo ]) 
  localStorage.setItem("todos", JSON.stringify([...todos, todo ])) 
 }

  return (
    <>
      <Routes>
        <Route path="forside" element={<Forside todos={todos} />}/>
        <Route path="Personlig" element={<Personlig />}/>
        <Route path="medlemmer" element={<MedlemmerPage />}/>
        <Route path="settings" element={<SettingsPage />}/>
        <Route path="NewTask" element={<NewTask addTodo={addTodo}/>}/>
        <Route path="Household" element={<Household />}/>
        <Route path="Profil" element={<Profil />}/>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<SignIn/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="/forside/:currentUser" element={<Forside todos={todos}/>} />
      </Routes>
    </>
  );
}

export default App;

// Kodet af Rikke 
import { NavLink } from "react-router-dom";

export default function SignInRegisterBtn()  {
    return (
        <section className="signIn-RegisterBtn">
            <div className="signIn-RegisterBtn-container">
                <NavLink to="/" end
                className={({ isActive }) => (isActive ? 'active' : 'inactive')} id="signInOrRegisterBtn">
                    Sign In
                </NavLink>

                <NavLink to="/register"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')} id="signInOrRegisterBtn">
                    Register
                </NavLink>
            </div>
        </section>
    )
}
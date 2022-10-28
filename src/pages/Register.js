// Kodet af Rikke
import SignInRegisterBtn from '../components/SignInorRegister'

export default function Register() {
    return (
        <section className="registerPage">
            <div className='register-greeting'>
                <h1 className="register-header">doit</h1>
                <p>To register please fill out the form</p>
            </div>
            <div className="register-form">
                <input type="text" placeholder="Name" className="register" required/>
                <input type="text" placeholder="Username" className="register" required/>
                <input type="text" placeholder="E-mail" className="register" required/>
                <input type="text" placeholder="Password" className="register" required/>
                <input type="text" placeholder="Repeat password" className="register" required/>
                <input type="submit" value="Create" id="create" />
            </div>
            <SignInRegisterBtn/>
        </section>
    )
}
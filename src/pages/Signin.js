// Kodet af Rikke
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignInRegisterBtn from '../components/SignInorRegister'

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  async function getUsers() {
    const response = await fetch("https://groupexample-fcc00-default-rtdb.europe-west1.firebasedatabase.app/users.json");
    const data = await response.json();
      const postsArray = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
      })
    );
    setUsers(postsArray);
  };

  useEffect(() => {
      getUsers();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      username: username,
      password: password,
    };

    const validForm = formData.username && formData.password;
      if (validForm) {
        for (const user of users) {
          if (formData.username === user.username && formData.password === user.password) {
            console.log("It works");
            const currentuser = {
              uid: user.uid,
              username: user.username,
              gid: user.gid
            }
            navigate(`/forside/${JSON.stringify(currentuser)}`);
          }
        }
      } else {
        setErrorMessage("You need to fill in all the fields.");
      }
    }


    return (
      <section className="signInPage">
          <form onSubmit={handleSubmit}>
              <div className='signIn-greeting'>
                  <h1 className="signIn-header">doit</h1>
                  <p className="signIn-text" >Welcome to doit. <br /> We like getting things done</p>
              </div>
              <div className="signIn-from">
                  <input type="text" placeholder="Username" className="signIn" onChange={(e) => setUsername(e.target.value)} required/>
                  <input type="password" placeholder="Password" className="signIn" onChange={(e) => setPassword(e.target.value)} required/>
                  <a href="/" id="forgortPassword">Forgot Password</a>
                  <input type="submit" value="Sign In" id="signIn" />
              </div>
              <p>{errorMessage}</p>
          </form>
          <SignInRegisterBtn/>
      </section>
    )
}
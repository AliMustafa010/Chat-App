import "./LoginPage.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from "axios"

const LoginPage = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };
    console.log(user);

    try {
      const res = await axios.post("http://localhost:5000/login", user);

      console.log(res.data);
      if (res.data.status === 'ok') {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userToken", res.data.userToken);
        localStorage.setItem("userId", res.data.userId);
        navigate("/");
      } else {
        alert("Login failed: " + res.data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='login-page-container'>
      <div className='login-page'>
        <div className="login-page-head">
          Login
        </div>
        <div className='login-page-email'>
          <label>Email</label>
          <input
            type={"email"}
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
        </div>
        <div className='login-page-password'>
          <label>Password</label>
          <input
            type={'password'}
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </div>
        <div className='login-page-button'>
          <button className='login-page-button-element' onClick={handleSubmit}>Login</button>
        </div>
        <div className="login-page-not">
          Not Subscribed ?
          <Link className='login-page-not-register' to="/signup"> Regsiter </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
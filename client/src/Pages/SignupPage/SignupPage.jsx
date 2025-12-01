import React, { useState } from 'react'
import axios from "axios"
import "./SignupPage.css"
import { Link, useNavigate } from 'react-router-dom'

const SignupPage = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username,
      email,
      password,
      phone: tel
    };
    console.log(user);

    try {
      const res = await axios.post("http://localhost:5000/register", user);

      console.log(res.data);
      if (res.data.status === 'ok') {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userToken", res.data.userToken);
        localStorage.setItem("userId", res.data.userId);
        navigate("/");
      } else {
        alert("Registration failed: " + res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error saving");
    }
  };

  return (
    <div className='signup-page-container'>
      <div className='signup-page'>
        <div className="signup-page-head">
          Register
        </div>
        <div className='signup-page-username'>
          <label>Username</label>
          <input
            type={'text'}
            value={username}
            onChange={(e) => { setUsername(e.target.value) }}
          />
        </div>
        <div className='signup-page-email'>
          <label>Email</label>
          <input
            type={"email"}
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
        </div>
        <div className='signup-page-password'>
          <label>Password</label>
          <input
            type={'password'}
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </div>
        <div className='signup-page-tel'>
          <label>Phone</label>
          <input
            type={"tel"}
            value={tel}
            onChange={(e) => { setTel(e.target.value) }}
          />
        </div>
        <div className='signup-page-button'>
          <button onClick={handleSubmit}>Register</button>
        </div>
        <div className="signup-page-already">
          Already Subscribed ?
          <Link className='signup-page-already-register' to="/login"> Login </Link>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
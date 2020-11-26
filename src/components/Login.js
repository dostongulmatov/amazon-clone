import React, { useState } from 'react'
import "./Login.css"
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase';

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = e => {
    e.preventDefault()

    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
          history.push('/')
        })
        .catch(error => alert(error.message))
    // Some fancy firebase login code 
  }
  const register = e => {
    e.preventDefault()
    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          console.log(auth);
          if(auth){
            history.push('/')
          }
        })
        .catch(error => alert(error.message))
    // Some firebase Register code
  }

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/1200px-Amazon.com-Logo.svg.png" alt=""/>
      </Link>

      <div className="login__container">
        <h1>Sing-In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

          <button className="login__signInButton" type="submit" onClick={signIn}>Sing-In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">Create your Amazon account</button>
      </div>
    </div>
  )
}

export default Login

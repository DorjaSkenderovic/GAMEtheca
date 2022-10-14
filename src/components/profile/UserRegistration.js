import { React, useState } from "react"
import './userRegistration.css'
import { auth, db } from '../../firebase'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuthValue } from '../profile/AuthContext'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { collection, addDoc } from "firebase/firestore";

export default function UserRegistration() {
  const location = useLocation();
  function signupButton() {
    document.getElementById("user_options-forms").classList.remove("bounceRight");
    document.getElementById("user_options-forms").classList.add("bounceLeft");
  }

  /**
   * Add event listener to the "Login" button
   */
  function loginButton() {
    document.getElementById("user_options-forms").classList.remove("bounceLeft");
    document.getElementById("user_options-forms").classList.add("bounceRight");
  }

  //LOGIN/REGISTER
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { setTimeActive } = useAuthValue()
  const navigate = useNavigate()
  const [confirmPassword, setConfirmPassword] = useState('')

  //LOGIN
  const login = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (!auth.currentUser.emailVerified) {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true)
              navigate('/verify-email')
            })
            .catch(err => alert(err.message))
        } else {
          navigate(location.pathname)
        }
      })
      .catch(err => setError(err.message))
  }

  //REGISTER
  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== '') {
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  const register = e => {
    e.preventDefault()
    setError('')
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password).then(() => {
        addDoc(collection(db, 'users'), {
          email: email,
          userUid: auth.currentUser.uid
        })
      }).then(() => {
        sendEmailVerification(auth.currentUser)
          .then(() => {
            setTimeActive(true)
            navigate('/verify-email')
          }).catch((err) => alert(err.message))
      })
        .catch(err => setError(err.message))
    }


  }

  return (
    <section className="user">
      <div className="user_options-container">
        <div className="user_options-text">
          <div className="user_options-unregistered">
            <h2 className="user_unregistered-title">Don't have an account?</h2>
            <p className="user_unregistered-text">Create now!</p>
            <button className="user_unregistered-signup button_style" id="signup-button" onClick={signupButton}>Sign up</button>
          </div>

          <div className="user_options-registered">
            <h2 className="user_registered-title">Already have a account!</h2>
            <p className="user_registered-text">Get started..</p>
            <button className="user_registered-login button_style" id="login-button" onClick={loginButton}>Login</button>
          </div>
        </div>

        <div className="user_options-forms" id="user_options-forms">
          <div className="user_forms-login">
            <h2 className="forms_title">Login</h2>
            {error && <div>{error}</div>}
            <form className="forms_form" onSubmit={login}>
              <fieldset className="forms_fieldset" >
                <div className="forms_field">
                  <input
                    type="email"
                    value={email}
                    placeholder="Email"
                    className="forms_field-input input_style"
                    required
                    autoFocus
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="forms_field">
                  <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    className="forms_field-input input_style"
                    required
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
              </fieldset>
              <div className="forms_buttons">
                <button type="button" className="forms_buttons-forgot button_style">Forgot password?</button>
                <input type="submit" value="Log In" className="forms_buttons-action input_style" />
              </div>
            </form>
          </div>
          <div className="user_forms-signup">
            <h2 className="forms_title">Sign Up</h2>
            {error && <div>{error}</div>}
            <form className="forms_form" onSubmit={register}>
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input type="email"
                    placeholder="Email"
                    value={email}
                    className="forms_field-input input_style"
                    required
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="forms_field">
                  <input type="password"
                    placeholder="Password"
                    value={password}
                    className="forms_field-input input_style"
                    required
                    onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="forms_field">
                  <input type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    className="forms_field-input input_style"
                    required
                    onChange={e => setConfirmPassword(e.target.value)}
                  />
                </div>
              </fieldset>
              <div className="forms_buttons">
                <input type="submit" value="Sign up" className="forms_buttons-action signup input_style" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}


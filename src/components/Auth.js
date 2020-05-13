import React, { useState} from 'react';
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import { loginUser } from '../ducks/reducer'
import { connect } from 'react-redux'
import '../loginregister.css'




const Auth = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post ('/auth/login', body)
        .then((res) => {
            props.loginUser(res.data)
            props.history.push('/dashboard')
        }).catch((err) => {
            alert('Could not log in')
        })
    }
    return(
      <div className='login-body'>
        <div className='login-div'>
          <h1 className='login-header'>Login</h1>
        <input className='input'
            maxLength="100"
            placeholder="Email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />

            <input className='input'
                type="password"
                maxLength="20"
                placeholder="Password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />


              <button className='login'
              onClick={() => {
                handleLogin()
              }}
            >
              Log in
            </button>
        <Link className='login-link' to='/register'>Register</Link>
        </div>
        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState

 export default connect(mapStateToProps, { loginUser })(withRouter(Auth))
import React, { useState} from 'react';
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import { loginUser } from '../ducks/reducer'
import { connect } from 'react-redux'




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
        <div>
        <input
            maxLength="100"
            placeholder="Email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />

            <input
                type="password"
                maxLength="20"
                placeholder="Password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />


              <button
              onClick={() => {
                handleLogin()
              }}
            >
              Log in
            </button>
        <Link to='/register'>Register</Link>
        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState

 export default connect(mapStateToProps, { loginUser })(withRouter(Auth))
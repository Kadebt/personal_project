import React, {useState} from 'react';
import axios from 'axios'
import { loginUser } from '../ducks/reducer'
import { connect } from 'react-redux'

const Register = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

     const handleRegister = () => {
        const body = {
          email: email,
          password: password,
        }
    
        axios
          .post('/auth/register', body)
          .then((res) => {
            props.loginUser(res.data)
            props.history.push('/dashboard')
          })
          .catch((err) => alert('Could not register'))
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
                handleRegister()
              }}
            >
              Register
            </button>
        </div>
    )
}

export default connect(null, { loginUser })(Register)
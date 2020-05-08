import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { logoutUser, loginUser } from '../ducks/reducer'
import { connect } from 'react-redux'
import axios from 'axios'
import '../header.css'

const Header = (props) => {


    const logout = () => {
        axios.delete('/auth/logout').then(() => {
          props.logoutUser()
          props.history.push('/')
        })
      }
     

    return(
        <div className='header_div'>
          <div className="header_logo">
          <img className="logo_img" src="https://img.icons8.com/ultraviolet/40/000000/ramp.png"/>
          {/* <img className="logo_img" src="https://img.icons8.com/windows/32/000000/skateboard-truck.png"/> */}
          <h1 className="logo_text">Lucxy's Skate Shop</h1>
          </div>

        <div className="logout_cart">
            <Link className="cart_button" to="/cart"><img src="https://img.icons8.com/material-sharp/24/000000/shopping-cart.png"/></Link>

            
            <button className="logout_button" onClick={() => {
        logout()
        }}>Logout</button>
        </div>
            
        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, { logoutUser, loginUser })(withRouter(Header))
import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { logoutUser, loginUser } from '../ducks/reducer'
import { connect } from 'react-redux'
import cart from '../cartlogo.svg'
import wheel from '../wheel.svg'
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
      
          <Link className='header_link' to='/dashboard'>
          <img src={wheel} className='logo_img'/>
          <h1 className="logo_text">7AM Skate Shop</h1>
          </Link>
          </div>

        <div className="logout_cart">
            <Link className="cart_button" to="/cart"> <img src={ cart } className='cart_button'/> </Link>

            
            <button className="logout_button" onClick={() => {
        logout()
        }}>Logout</button>
        </div>
            
        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, { logoutUser, loginUser })(withRouter(Header))
import React from 'react';
import './App.css';
import Routes from './routes'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Reviews from './components/Reviews'
import { withRouter } from 'react-router-dom'

function App(props) {
  function conditional(){
    if (props.location.pathname === '/' || props.location.pathname === '/register'){
      return null
    } else {
      return <Header/>
    }
  }

  function sideBar(){
    if(props.location.pathname === '/' || props.location.pathname === '/register' || props.location.pathname === '/dashboard'){
      return null
    } else {
      return <SideBar/>
      
      
    }
  }

  function reviews(){
    if(props.location.pathname === '/' || props.location.pathname === '/register'){
      return null
    } else {
      return <Reviews/>
      
      
    }
  }

  return (
    <div>
      {conditional()}
      {sideBar()}
      {Routes}
      {reviews()}
    </div>
  );
}

export default withRouter (App);

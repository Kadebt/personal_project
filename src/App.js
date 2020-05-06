import React from 'react';
import './App.css';
import Routes from './routes'
import Header from './components/Header'
import { withRouter } from 'react-router-dom'

function App(props) {
  function conditional(){
    if (props.location.pathname === '/' || props.location.pathname === '/register'){
      return null
    } else {
      return <Header/>
    }
  }

  return (
    <div>
      {conditional()}
      {Routes}
    </div>
  );
}

export default withRouter (App);

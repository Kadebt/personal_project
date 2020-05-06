import React from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import Shop from './components/Shop'
import FullItem from './components/Fullitem'
import Cart from './components/Cart'
import Register from './components/Register'


export default <Switch>
    <Route exact path="/" component={Auth}/>
    <Route path='/dashboard' component={Dashboard}/>
    <Route path='/shop/:id' component={Shop}/>
    <Route path='/fullitem/:id' component={FullItem}/>
    <Route path='/cart' component={Cart}/>
    <Route path='/register' component={Register}/>

</Switch>
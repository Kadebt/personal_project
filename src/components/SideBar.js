import React from 'react';
import {Link, withRouter} from 'react-router-dom'

import '../sidebar.css'

const SideBar = (props) => {
    return(
        <div className="sidebar_div">
            <h1 className="sidebar_h1">Shop</h1>
            <Link className='sidebar_link' to="/shop/1">Decks</Link>
            <Link className='sidebar_link' to="/shop/2">Trucks</Link>
            <Link className='sidebar_link' to="/shop/3">Wheels</Link>
            <Link className='sidebar_link' to="/shop/4">Bearings</Link>
            <Link className='sidebar_link' to="/shop/5">Hardware</Link>


        </div>
    )
}

export default withRouter(SideBar)
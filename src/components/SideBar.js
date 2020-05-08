import React from 'react';
import {Link} from 'react-router-dom'

const SideBar = (props) => {
    return(
        <div>
            <h1>Shop</h1>
            <Link to="/shop/1">Decks</Link>
            <Link to="/shop/2">Trucks</Link>
            <Link to="/shop/3">Wheels</Link>
            <Link to="/shop/4">Bearings</Link>
            <Link to="/shop/5">Hardware</Link>


        </div>
    )
}

export default SideBar
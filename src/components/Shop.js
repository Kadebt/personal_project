import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { addToCart } from '../ducks/cartreducer'
import { connect } from 'react-redux'
import '../shop.css'
// import { Link } from 'react-router-dom'

const Shop = (props) => {
    const  [inventory, setInventory] = useState([])

    useEffect(() => {
        const id = props.match.params.id
        console.log(id)
        axios.get(`/api/inventory/${id}`).then((res) => {
            setInventory(res.data)
    })
},[props.match.params.id])

const addToCart = (id) => {

    axios.put(`api/cart/${id}`).then((res) =>{
        console.log(res.data)
    })
}

const handleimgClick = (id) => {
    props.history.push(`/fullitem/${id}`)
}
const mappedProducts = inventory.map((e) => {
    return(
        <div className="product">
            <img className="shop_img" onClick={() => {
                handleimgClick(e.id)
            }} src={e.img} alt="img"/>
            <p className='product-info'>{e.name}</p>
            <p className='product-info'>{e.content}</p>
            <p className='product-info'>${e.price}</p>
            <button className='shop_button' onClick={() => {
                addToCart(e.id)
            }}>Add to cart</button>

        </div>
    )
})
    return(
        
        <div className="mapped_products">
            {mappedProducts}
        </div>
    )
}


const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, { addToCart })(Shop)
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { addToCart } from '../ducks/cartreducer'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

const Shop = (props) => {
    const  [inventory, setInventory] = useState([])

    useEffect(() => {
        const id = props.match.params.id
        
        axios.get(`/api/inventory/${id}`).then((res) => {
            setInventory(res.data)
    })
},[])

console.log(inventory)
const addToCart = (id) => {

    axios.put(`api/cart/${id}`).then((res) =>{
        props.addToCart(res.data)
    })
}

const handleimgClick = (id) => {
    props.history.push(`/fullitem/${id}`)
}
const mappedProducts = inventory.map((e) => {
    return(
        <div>
            <img onClick={() => {
                handleimgClick(e.id)
            }} src={e.img} alt="img"/>
            <p>{e.name}</p>
            <p>{e.content}</p>
            <p>${e.price}</p>
            <button onClick={() => {
                addToCart(e.id)
            }}>Add to cart</button>

        </div>
    )
})
    return(
        
        <div>
            {mappedProducts}
        </div>
    )
}


const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, { addToCart })(Shop)
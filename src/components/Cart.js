import React, { useEffect } from 'react';
import { addToCart } from '../ducks/cartreducer'
import { connect } from 'react-redux'
import axios from 'axios'
// import axios from 'axios'

const Cart = (props) => {
    
    // useEffect(() => {
    //     axios.get('/api/checkcart').then((res) => {
    //         props.addToCart(res.data)
    //     })
    // },[])

    const cartMapped = props.cart.cart.map((e) => {
        return(
            <div>
            <img src={e.img}/>
            <p>{e.price}</p>
            <p>{e.name}</p>
            </div>
        )
    })

    return(
        <div>{cartMapped}</div>
        
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, {addToCart})(Cart)
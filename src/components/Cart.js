import React, { useEffect } from 'react';
import { addToCart, deleteFromCart } from '../ducks/cartreducer'
import { connect } from 'react-redux'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import { toast } from 'react-toastify'
// import axios from 'axios'

const Cart = (props) => {
    
    useEffect(() => {
        axios.get('/api/checkcart').then((res) => {
            props.addToCart(res.data)
        })
    },[])

    // const handleAdd = (id) => {
    //     axios.put(`/api/quantity/${id}`).then((res) => {
    //         props.cart.cart.price = res.data
    //     })
     
    // }

    const cartMapped = props.cart.cart.map((e) => {
        return(
            <div>
            <img src={e.img}/>
            <p>{e.price}</p>
            <p>{e.name}</p>
            {/* <button>
                <img src="https://img.icons8.com/pastel-glyph/64/000000/minus.png"/> */}
            {/* </button>
            <button onClick={() => {
                handleAdd(e.id)
            }}>
                <img src="https://img.icons8.com/pastel-glyph/64/000000/plus.png"/>
            </button> */}
            {/* <button>Delete</button> */}
            </div>
        )
    })

    const clearCart = () => {
        axios.delete('/api/deletecart').then((res) => {
            props.deleteFromCart(res.data)
        })
    }


    const totalPrice = () => {
    let total = 0
        for (let i = 0; i < props.cart.cart.length; i++){
            total = total + props.cart.cart[i].price
        }
        return(
            <div>{total}</div>
        )
    }

    toast.configure()
    
    async function handleToken(token){
       const body = {
           token,
           product: props.cart.cart
       }
      const res = await axios.post('/stripe/checkout', body)
      const { status } = res.data
      if (status === 'success') {
          toast('Success!', {type: 'success'})
      } else {
          toast('Something went wrong', {type: "error"})
      }
    }



    return(
        <div>
            <h1>Your Cart</h1>
            {cartMapped}
            {totalPrice(props.cart.cart)}
            <button onClick={() => {
                clearCart()
            }}>Clear Cart</button>
            <StripeCheckout
                stripeKey='pk_test_GxDPnMdvGuy27Ag4bWyuFTQm00NgQGG4IY'
                token={handleToken}
                amount={totalPrice(props.cart.cart) * 100}
                billingAddress
                shippingAddress
                name='CheckOut'
            />
        
        
        </div>
        
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, {addToCart, deleteFromCart})(Cart)
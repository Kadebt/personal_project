import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { addToCart } from '../ducks/cartreducer'
import { connect } from 'react-redux'


const FullItem = (props) => {
    const [item, setItem] = useState([])

    useEffect(() => {
        const id = props.match.params.id


        axios.get(`/api/item/${id}`).then((res) => {
            setItem(res.data)
        })
    },[])



        const mappedItem = item.map((e) => {
            return(
                <div>
                    <img src={e.img}/>
                    <h1>{e.name}</h1>
                    <h1>{e.content}</h1>
                    <h1>{e.price}</h1>
                    <button onClick={() => {
                        props.addToCart()
                    }}>Add to cart</button>
                </div>
            )
        })
    return(
        <div>
            {mappedItem}
        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(FullItem)
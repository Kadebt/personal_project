import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { addToCart } from '../ducks/cartreducer'
import { connect } from 'react-redux'
import '../fullitem.css'


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
                <div className='fullitemdiv'> 
                    <img className='fullitemimg' src={e.img}/>
                    <h1 className='fullitemname'>{e.name}</h1>
                    <h1 className='fullitemcontent'>{e.content}</h1>
                    <h1 className='fullitemprice'>{e.price}</h1>
                    <button className='fullitembutton' onClick={() => {
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
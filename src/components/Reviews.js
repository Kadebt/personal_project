import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {loginUser} from '../ducks/reducer'
import { connect } from 'react-redux'
import UserReview from './UserReview'
// import { withRouter } from 'react-router-dom'

const Reviews = (props) => {
    const [userInput, setUserInput] = useState('')
    const [reviews, setReviews] = useState([])

        useEffect(() => {
        axios.get('/auth/check').then((res) => {
            props.loginUser(res.data)
        })

            axios.get('/api/reviews').then((res) => {
                  setReviews(res.data)
      },[])
    })
    
    const handleClick = () => {
        const body = {
            email: props.user.user.email,
            content: userInput,
        }

        if (body.content) {
            axios.post('/api/postreview', body).then((res) => {
                setReviews(res.data)
                setUserInput('')
            })
        }
    }

    const handleEdit = (id, content) => {
        axios.put(`/axios/editreview/${id}`, { content }).then((res) => {
            setReviews(res.data)
        })
    }

    


    


    const mappedReviews = reviews.map((e) => {
        return(
            <UserReview
            key={e.id}
            id={e.id}
            handleEdit={handleEdit}
            email={e.email}
            content={e.content}
            />
        )
    })

    return(
        <div>
            <h1>Tell Us What You Think</h1>
            <input onChange={e => setUserInput(e.target.value)} value={userInput}/>
            <button onClick={() => {handleClick()
            }}>Add Review</button>

            <div>{mappedReviews}</div>
        </div>
    )
}


const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, { loginUser })(Reviews)
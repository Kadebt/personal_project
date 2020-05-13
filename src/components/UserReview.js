import React, {useState} from 'react'
import '../reviews.css'

const UserReview = (props) => {
    const [editing, setEditing] = useState(false)
    const [editInput, setEditInput] = useState('')


    return(
        <div>
            <h3>{props.email}</h3>
            {editing ? 
            <div>
                <input onChange={e => setEditInput(e.target.value)} value={editInput}/>
                <button onClick={() => {props.handleEdit(props.id)
                setEditing(false)}
            }>Save</button>
            </div>
            :
            <div>
            <p onClick={() =>{
                setEditing(true)
            }}>{props.content}</p>
            <button className='deletebutton' onClick={() => {
                props.handleDelete(props.id)
            }}>Delete</button>
            </div>}
        </div>
    )

}

export default UserReview
import React from 'react'
//destructuring
export const TodoItem = ({todo , onDelete}) => {
    return (
        <>
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
        <hr/>
        </>
    )
//function onDelete(todo) is passed so that it executes on click
//in case of function call it was executing automatically
}

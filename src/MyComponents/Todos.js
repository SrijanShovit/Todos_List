import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem"
//no destructuring
export const Todos = (props) => {
    let myStyle1 = {
        paddingLeft: "5vh",
        paddingRight: "5vh",
        paddingBottom: "3vh",
        minHeight: "70vh"
        
    }
    return (
        <div className="Container" style={myStyle1}>
            <h3 >Todos List</h3>
            
            {props.todos.length===0 ? "No Todos to display":
            props.todos.map((todo) =>{
                return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
            })
            }
            
        </div>
    )
}

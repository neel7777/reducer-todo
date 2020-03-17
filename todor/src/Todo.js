import React from 'react';


export const Todo = props => {
    console.log(props)
    return (
        <div className={`todo${props.completed ? " completed" : ""}`} 
        onClick={() => {props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.id})}}
        >            
        <h1>{props.todo}</h1>
        </div>
    )
}
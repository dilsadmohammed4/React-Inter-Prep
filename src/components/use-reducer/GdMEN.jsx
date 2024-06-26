import React, { useReducer } from 'react'

const initialState = "Good Night";
const reducer = (state, action) => {
    switch (action) {
        case "MORNING":
            return "Good Morning"
        case "EVENING":
            return "Good Evening";
        case "NIGHT":
            return "Good Night";
        default:
            return state;
    }
}
export const GdMEN = () => {
    const [msg, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h1>{msg} John!</h1>
            <button onClick={() => dispatch("MORNING")}>Good Morning</button>
            <button onClick={() => dispatch("EVENING")}>Good Evening</button>
            <button onClick={() => dispatch("NIGHT")}>Good Night</button>
        </>
    )
}

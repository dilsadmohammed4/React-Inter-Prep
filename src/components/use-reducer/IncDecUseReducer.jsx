import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "INCREMENT":
            return state+1
        case "DECREMENT":
            return state-1;
        default:
            return state;
    }
}
export const IncDecUseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch("INCREMENT")}>Increment</button>
        </>
    )
}

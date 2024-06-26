import React, { useRef } from 'react'

export const UseRef = () => {
    const inputRef = useRef();
    const handleInput = () => {
        console.log("In HandleInput Fn.");
        inputRef.current.value = 1000;
        inputRef.current.focus();
        //inputRef.current.style.display = 'none';
        console.log(inputRef);
    }
    return (
        <>
            <h1>useRef : Example </h1>
            <input type='text' ref={inputRef} />
            <button onClick={handleInput}>Handle Input</button>
        </>
    )
}

import React, { useState } from 'react'

export const UseState = () => {
    const [value, setValue] = useState(0);
    const updateValue = () => {
        setValue(value + 1)
    }
    return (
        <>
            <h1 onMouseOver={updateValue}>{value}</h1>
        </>
    )
}

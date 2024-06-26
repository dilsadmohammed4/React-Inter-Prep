import React, { useCallback, useState } from 'react'
import Child from './Child';

export const WithoutUseCallback = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState([]);

    const increment = () => {
        setCounterOne(counterOne + 1);
    }

    const fun = useCallback(() => {
        console.log("Hello Dilsad");
    }, counterTwo);

    return (
        <>
            <Child counterTwo={counterTwo} fun={fun} />
            <button onClick={increment}>counterOne + {counterOne}</button>
        </>
    )
}

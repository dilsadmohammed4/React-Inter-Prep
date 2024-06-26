import { React, useState, useMemo } from 'react'

export const WithUseMemo = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    }

    const isEven = useMemo(() => {
        console.warn("........");
        let i = 0;
        while (i < 200000000) i++;
        return counterOne % 2 === 0;
    }, [counterOne])


    return (
        <>
            <button onClick={incrementOne}>CounterOne + {counterOne}</button>
            <h1>{isEven ? "Even" : "Odd"}</h1>
            <button onClick={incrementTwo}>CounterTwo + {counterTwo}</button>
        </>
    )
}

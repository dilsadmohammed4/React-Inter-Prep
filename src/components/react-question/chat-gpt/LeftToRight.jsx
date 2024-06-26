import React, { useState } from 'react'

export const LeftToRight = () => {
    const [leftList, setLeftList] = useState(['Dilsad', 'Rihan', 'Tarif']);
    const [rightList, setRightList] = useState([]);

    const moveRight = (index) => {
        const itemToMove = leftList[index];
        setLeftList((prevLeftList) => prevLeftList.filter((_, i) => i !== index));
        setRightList((prevRightList) => [...prevRightList, itemToMove]);
    };

    const moveLeft = (index) => {
        const itemToMove = rightList[index];
        setRightList((prevRightList) => prevRightList.filter((_, i) => i !== index));
        setLeftList((prevLeftList) => [...prevLeftList, itemToMove]);
    };

    return (
        <div>
            <div>
                <h3>Left List</h3>
                <ul>
                    {leftList.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => moveRight(index)}>Move Right</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Right List</h3>
                <ul>
                    {rightList.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => moveLeft(index)}>Move Left</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
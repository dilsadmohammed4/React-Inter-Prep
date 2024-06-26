import React, { } from 'react'
import { memo } from 'react';

const Child = () => {
    console.log("Child Component");
    return (
        <>
            <h1>Child Component</h1>
        </>
    );
};
export default memo(Child);
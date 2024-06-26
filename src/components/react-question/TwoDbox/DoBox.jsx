import React, { useState } from 'react'

export const DoBox = () => {
    const [leftList, setLeftList] = useState([
        { id: 1, text: 'Dilsad' },
        { id: 2, text: 'Tarif' },
        { id: 3, text: 'Azam' },
        { id: 4, text: 'Soheib' },
        { id: 5, text: 'Atif' }
    ]);

    const [rightList, setRightList] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (id) => {
        console.log("In handle change");
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter((item) => item !== id));
            
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };


    const moveRight = () => {
        const updatedLeftList = leftList.filter((item) => !selectedItems.includes(item.id));
        const selectedItemsData = leftList.filter((item) => selectedItems.includes(item.id));
        setLeftList(updatedLeftList);
        setRightList([...rightList, ...selectedItemsData]);
        setSelectedItems([]);
    };

    const moveLeft = () => {
        const updatedRightList = rightList.filter((item) => !selectedItems.includes(item.id));
        const selectedItemsData = rightList.filter((item) => selectedItems.includes(item.id));
        setRightList(updatedRightList);
        setLeftList([...leftList, ...selectedItemsData]);
        setSelectedItems([]);
    };

    return (
        <>

            <div className="container mt-3 ">
                <div className="row mt-3">
                    <div className="col-5 shadow-lg bg-warning" style={{ height: "400px", width: "400px" }}>
                        <h1 className='text-center  mt-1'>LEFT LIST</h1>
                        {
                            leftList.map((item) =>
                                <div className="form-check mt-2" key={item.id}>
                                    <input
                                        onChange={() => handleCheckboxChange(item.id)
                                        }
                                        checked={selectedItems.includes(item.id)}
                                        className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label fw-bold">
                                        {item.text.toUpperCase()}
                                    </label>
                                </div>
                            )
                        }
                    </div>
                    <div className="ms-5 col-1 shadow-lg bg-light">
                        <div className='d-flex justify-content-center mt-5'>
                            <button onClick={moveRight}><i className='bi-box-arrow-in-right'></i></button>
                        </div>
                        <div className='d-flex justify-content-center mt-5'>
                            <button onClick={moveLeft}><i className='bi-box-arrow-in-left'></i></button>
                        </div>
                    </div>
                    <div className="ms-5 col-5 shadow-lg bg-warning" style={{ height: "400px", width: "400px" }}>
                        <h1 className='text-center mt-1'>RIGHT LIST</h1>
                        {
                            rightList.map((item) =>
                                <div className="form-check mt-2" key={item.id}>
                                    <input
                                        onChange={() => handleCheckboxChange(item.id)
                                        }
                                        checked={selectedItems.includes(item.id)}
                                        className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label fw-bold">
                                        {item.text.toUpperCase()}
                                    </label>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

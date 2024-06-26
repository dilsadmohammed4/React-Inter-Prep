import React,{useState} from 'react'

export const MoveItems = () => {
    const [leftList, setLeftList] = useState([
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
    ]);
    const [rightList, setRightList] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (id) => {
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
        <div>
            <div>
                <h3>Left List</h3>
                <ul>
                    {leftList.map((item) => (
                        <li key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheckboxChange(item.id)}
                                checked={selectedItems.includes(item.id)}
                            />
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <button onClick={moveRight}>Move Right</button>
                <button onClick={moveLeft}>Move Left</button>
            </div>
            <div>
                <h3>Right List</h3>
                <ul>
                    {rightList.map((item) => (
                        <li key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheckboxChange(item.id)}
                                checked={selectedItems.includes(item.id)}
                            />
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

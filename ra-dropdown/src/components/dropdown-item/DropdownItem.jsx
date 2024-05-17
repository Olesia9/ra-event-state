import React, {useState} from "react";
import './DropdownItem.css'

function DropdownItem({list}) {
    const [activeItem, setActiveItem] = useState(null);

    const handleActiveItem = (index) => {
        setActiveItem(index)
    }

    return (
        <>
            <ul>
                {list.map((item, i) =>
                    <li key={i}
                        onClick={() => handleActiveItem(i)}
                        className={activeItem === i ? "active" : ""}
                    >
                        {item.item}
                    </li>
                )}
            </ul>
        </>
    )
}

export default DropdownItem

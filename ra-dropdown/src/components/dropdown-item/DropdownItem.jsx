import React, {useState} from "react";
import './DropdownItem.css'

function DropdownItem({list}) {
    const [activeItem, setActiveItem] = useState(null);

    const handleActiveItem = (index) => {
        setActiveItem(index)
    }

    return (
        <ul>
            {list.map((item, i) =>
                <React.Fragment key={i}>
                    <li onClick={() => handleActiveItem(i)}
                        className={activeItem === i ? "active" : ""}
                    >
                        {item.item}
                    </li>
                </React.Fragment>
            )}
        </ul>
    )
}

export default DropdownItem

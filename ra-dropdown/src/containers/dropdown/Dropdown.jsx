import React, {useEffect, useState} from "react";
import DropdownList from "../../components/dropdown-list/DropdownList.jsx";

function Dropdown() {
    const [showList, setShowList] = useState(false)

    const handleDropdown = (showList) => {
        showList ? setShowList(false) : setShowList(true)
        console.log('showList', showList)
    }

    return (
        <>
            <button onClick={() => handleDropdown(showList)}>ACCOUNT SETTINGS</button>
            <DropdownList state={showList}/>
        </>
    )
}

export default Dropdown

import React from "react";
import DropdownItem from "../dropdown-item/DropdownItem.jsx";
import list from '../../constans/list.json'

function DropdownList({state}) {
    return (
        <React.Fragment>
            {state ?
                <DropdownItem list={list}/> :
                <></>
            }
        </React.Fragment>
    )
}

export default DropdownList

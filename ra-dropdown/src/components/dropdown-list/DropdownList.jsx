import React from "react";
import DropdownItem from "../dropdown-item/DropdownItem.jsx";
import list from '../../constans/list.json'

function DropdownList({state}) {
    return (
        <>
            {state ?
                <DropdownItem list={list}/> :
                <></>
            }
        </>
    )
}

export default DropdownList

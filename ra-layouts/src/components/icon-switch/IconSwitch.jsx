import React from 'react'
import './IconSwitch.css'

class IconSwitch extends (React.Component) {
    render() {
        const {icon, onSwitch} = this.props
        return <>
            <span className="material-icons" onClick={() => onSwitch(icon)}>{icon}</span>
        </>
    }
}

export default IconSwitch

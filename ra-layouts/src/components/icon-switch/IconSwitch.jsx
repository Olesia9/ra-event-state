import React from 'react'
import './IconSwitch.css'

class IconSwitch extends React.Component {
    render() {
        const {icon, onSwitch} = this.props
        return (
            <React.Fragment>
                <span className="material-icons"
                      onClick={() => onSwitch(icon)}
                >
                    {icon}
                </span>
            </React.Fragment>
        )
    }
}

export default IconSwitch

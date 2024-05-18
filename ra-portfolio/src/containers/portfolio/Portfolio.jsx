import React from 'react'
import './Portfolio.css'
import Toolbar from "../../components/toolbar/Toolbar.jsx";
import ProjectList from "../../components/project-list/ProjectList.jsx";
import image from '../../constans/images.json'

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: 'All'}
    }

    handleFilterSelect = (filter) => {
        this.setState({selected: filter})
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar filters={["All", "Websites", "Flayers", "Business Cards"]}
                         selected={this.state.selected}
                         onSelectFilter={(filter) => {
                             this.handleFilterSelect(filter)
                         }}
                />
                <ProjectList image={image}
                             select={this.state.selected}
                />
            </React.Fragment>
        )
    }
}

export default Portfolio

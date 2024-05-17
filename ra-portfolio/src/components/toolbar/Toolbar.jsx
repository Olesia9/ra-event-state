import React from 'react'
import './Toolbar.css'

class Toolbar extends (React.Component) {
    constructor(
        filters
    ) {
        super();
        this.filters = filters.filters;
        this.selected = filters.selected;
        this.onSelectFilter = filters.onSelectFilter;
    }

    render() {
        return <>
            <div>
                {this.filters.map(filter =>
                    <button key={filter} onClick={() => this.onSelectFilter(filter)}>{filter}</button>
                )}
            </div>
        </>
    }
}

export default Toolbar

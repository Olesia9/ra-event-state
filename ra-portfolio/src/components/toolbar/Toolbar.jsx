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
        this.state = {index: null}
    }

    handleIndexChange = (i) => {
        this.setState({index: i})
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    {this.filters.map((filter, i) =>
                        <button key={i}
                                className={this.state.index === i ? 'active' : ''}
                                onClick={() => {
                                    this.onSelectFilter(filter);
                                    this.handleIndexChange(i)
                                }}
                        >
                            {filter}
                        </button>
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default Toolbar

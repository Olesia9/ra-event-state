import React from 'react'
import IconSwitch from "../../components/icon-switch/IconSwitch.jsx";
import CardsView from "../cards-view/CardsView.jsx";
import ListView from "../list-view/ListView.jsx";
import products from "../../constans/products.json"

class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {icon: 'view_list'};
    }

    handleChangeIcon = (icon) => {
        this.setState({icon: icon})
    }

    render() {
        return (
            <React.Fragment>
                <IconSwitch icon={this.state.icon}
                            onSwitch={(icon) => {
                                this.handleChangeIcon(icon === 'view_list' ? 'view_module' : 'view_list')
                            }}
                />
                {
                    this.state.icon === 'view_list' ?
                        <CardsView cards={products}/>
                        :
                        <ListView items={products}/>
                }
            </React.Fragment>
        )
    }

}

export default Store

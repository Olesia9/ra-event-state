import React from "react";
import ShopCard from "../../components/shop-card/ShopCard.jsx";
import './CardsView.css'

class CardsView extends React.Component {
    render() {
        const {cards} = this.props
        return (
            <React.Fragment>
                <div className="container-cards">
                    {cards.map((item, i) =>
                        <ShopCard key={i}
                                  img={item.img}
                                  name={item.name}
                                  color={item.color}
                                  price={item.price}
                        />
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default CardsView

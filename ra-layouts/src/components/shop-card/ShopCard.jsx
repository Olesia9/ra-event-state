import React from "react"
import './ShopCard.css'

class ShopCard extends React.Component {
    render() {
        const {img, name, color, price} = this.props
        return (
            <React.Fragment>
                <article>
                    <h2>{name}</h2>
                    <span>{color}</span>
                    <img src={img} alt={'img'}/>
                    <div className='price'>
                        <span>${price}</span>
                        <button>Add to cart</button>
                    </div>
                </article>
            </React.Fragment>
        )
    }
}

export default ShopCard

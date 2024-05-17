import React from "react";
import './ShopItem.css'

class ShopItem extends (React.Component) {
    render() {
        const {img, name, color, price} = this.props
        return <>
            <article className='item__card'>
                <img src={img} alt={'img'}/>
                <h2>{name}</h2>
                <span>{color}</span>
                <span className='price'>${price}</span>
                <button>Add to cart</button>
            </article>
        </>
    }
}

export default ShopItem

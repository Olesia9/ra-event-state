import React from "react"
import ShopItem from "../../components/shop-item/ShopItem.jsx";
import './ListView.css'

class ListView extends (React.Component) {
    render() {
        const { items } = this.props
        return <>
            <div className='container-list'>
            {items.map((item, i) =>
                <ShopItem key={i}
                          img={item.img}
                          name={item.name}
                          color={item.color}
                          price={item.price}
                />
            )}
            </div>
        </>
    }
}
export default ListView

import React, {useContext} from "react";
import "./CSS/About.css";
import { shopContext } from "../Context/ShopContext"
import Item from "../Components/Item/Item";

const About = () => {
    const {all_product} = useContext(shopContext);
    return (
        <>
        <header>
            <h1>SHOPPER</h1>
            <p>We sell products of the finest quality</p>
        </header>
        <div className="about">
            <div className="relatedproducts-item">
                {all_product.map((item, i)=>{                  
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />                   
                })}
            </div>
        </div>
        </>
    )
}

export default About;
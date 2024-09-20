import React, {useContext} from "react";
import './RelatedProducts.css'
import Item from '../Item/Item'
import { shopContext } from "../../Context/ShopContext"

const RelatedProducts = (props) => {
  const {all_product} = useContext(shopContext);
  let cnt = 0;
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {
          all_product.map((item, i)=>{
            while(cnt < 4){
            if(props.productcategory === item.category){
                cnt++;
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }else{
                return null;
            }
          }
          })}
      </div>
    </div>
  )
}

export default RelatedProducts;
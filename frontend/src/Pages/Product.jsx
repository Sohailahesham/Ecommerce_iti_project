import React, {useContext} from "react";
import { shopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay"
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'; 


const Product = () => {
    const {all_product} = useContext(shopContext);
    const {productId} = useParams();
    const product = all_product.find((e) => 
        e.id === Number(productId)
    )
    return (
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelatedProducts productcategory={product.category}/>
        </div>
    )
}

export default Product;
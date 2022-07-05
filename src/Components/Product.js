import React from 'react';

// helper Function
import { shorten } from '../helpers/functions';

const Product = ({productData}) => {
    return ( 
        <div>
            <img src={productData.image} alt="productImage" style={{width: "200px"}} />
            <h1>{shorten(productData.title)}</h1>
            <p>{productData.price}</p>
            <div>
                <a href="#z">details</a>
                <div>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
     );
}
 
export default Product;
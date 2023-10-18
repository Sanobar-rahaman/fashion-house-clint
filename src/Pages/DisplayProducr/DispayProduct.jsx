import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";



const DispayProduct = () => {
    const products = useLoaderData()
    const[fashion,setFashion] = useState(products)
   
   
    return (
        <div>
            <h2>Hello from display</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                {
                    fashion.map(product=><ProductCard 
                        key={product._id}
                         product={product}
                         fashion={fashion}
                         setFashion={setFashion}
                          ></ProductCard> )
                }
            </div>
        </div>
    );
};

export default DispayProduct;
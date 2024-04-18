import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";



const DispayProduct = () => {
    const products = useLoaderData()
    console.log(products);
    const[fashion,setFashion] = useState(products)
    console.log(fashion);
   
   
    return (
        <div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
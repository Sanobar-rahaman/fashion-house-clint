
import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const AddToCart = () => {
    
    const fashion = useLoaderData()
    console.log(fashion);
    const[cart,seCart] = useState(fashion)

    const handleDelete =(id) =>{
        fetch(`https://fashion-server-five.vercel.app/cart/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const reaming = cart.filter(car=>car._id!==id)
            seCart(reaming)
        })

    }
    return (
        <div>
            <div>
                {
                    cart.map(fas=><div key={fas._id} className="card w-96 bg-base-100 shadow-xl">


                    <figure><img src={fas.photo} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{fas.description}</h2>
                      <p>{fas.name}</p>
                      <div className="card-actions justify-end">
                        <button onClick={()=>handleDelete(fas._id)} className="btn btn-primary">delete</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default AddToCart;
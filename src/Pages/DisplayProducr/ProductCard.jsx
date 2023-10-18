import swal from "sweetalert";


const ProductCard = ({ product,fashion,setFashion }) => {
    const { _id, name, type, price, photo, description, rating } = product
    // console.log(product);

    const hsndleDelete =_id=>{
        console.log(_id);
       
        fetch(`http://localhost:5001/fashion/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                swal("Are you sure you want to delete this?", {
                    buttons: ["Oh noez!", "Aww yiss!"],
                  });
                  const reaming = fashion.filter(fa=>fa._id!== _id)
                  setFashion(reaming)
            }
            
        })

    } 

    return (
        <div>
            <div className="card w-96  bg-base-100 shadow-xl max-w-2xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <div>
                            <h2 className=" text-2xl font-bold">Brand Name:{name}</h2>
                            <h3 className=" text-xl font-semibold">Type:{type}</h3>
                            <h2> price:{price}</h2>
                        </div>
                        <div className="btn-group btn-group-vertical">
                            <button className="btn btn-active">Details</button>
                            <button className="btn">Edit</button>
                            <button onClick={()=>hsndleDelete(_id)} className="btn">Delete</button>
                        </div>
                    </div>
                    
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">add to curt</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
import { useLoaderData } from "react-router-dom";



const UpdateProduct = () => {
    const fashion = useLoaderData()
    const{_id,name,type,price,photo,description,rating} = fashion
    console.log(fashion);
   

    const handleUpdate = e =>{
        e.preventDefault()
        const form =  e.target
        const name = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
        const  description= form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const newData = {name,type,price,photo,description,rating}
        console.log(newData);
        fetch(`http://localhost:5001/fashion/${_id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newData)
        })
        .then(res=>res.json)
        .then(data=>{
            console.log(data);
        })

        

    }
    return (
        <div>
            <h2 className=" text-5xl text-center"> Update Product</h2>
            <form onSubmit={handleUpdate}>
            <div className="flex">
                    <div className="form-control md: w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="name" defaultValue={name} placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-3">
                        <label className="label">
                            <span className="label-text">type</span>
                        </label>
                        <label className="input-group">
                            <span>type</span>
                            <input type="text" name="type" defaultValue={type} placeholder="Brand type" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex">
                    <div className="form-control md: w-1/2">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <label className="input-group">
                            <span>price</span>
                            <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-3">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <span>description</span>
                            <input type="text" name="description" defaultValue={description} placeholder="description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control md:w-1/2 ml-3">
                        <label className="label">
                            <span className="label-text">rating</span>
                        </label>
                        <label className="input-group">
                            <span>rating</span>
                            <input type="text" name="rating" defaultValue={rating} placeholder="description" className="input input-bordered w-full" />
                        </label>
                    </div>
                {/* for photo */}
                <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <span>Photo</span>
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="flex justify-center">
                    <input className="btn btn-secondary w-2/3 mt-5"  type="submit" value="Submit" />
                    </div>
            </form>
        </div>
    );
};

export default UpdateProduct;
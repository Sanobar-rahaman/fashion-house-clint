import swal from 'sweetalert';

const AddProduct = () => {
    const handdleSubmit = e =>{
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

        fetch('http://localhost:5001/fashion',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                swal("Data SuccessFully Send to dataBase");
            }
        })


    }
    return (
        <div>
            <h2 className=" text-5xl text-center"> Add Product</h2>
            <form onSubmit={handdleSubmit}>
            <div className="flex">
                    <div className="form-control md: w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="name" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-3">
                        <label className="label">
                            <span className="label-text">type</span>
                        </label>
                        <label className="input-group">
                            <span>type</span>
                            <input type="text" name="type" placeholder="Brand type" className="input input-bordered w-full" />
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
                            <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-3">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <span>description</span>
                            <input type="text" name="description" placeholder="description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control md:w-1/2 ml-3">
                        <label className="label">
                            <span className="label-text">rating</span>
                        </label>
                        <label className="input-group">
                            <span>rating</span>
                            <input type="text" name="rating" placeholder="description" className="input input-bordered w-full" />
                        </label>
                    </div>
                {/* for photo */}
                <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <span>Photo</span>
                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="flex justify-center">
                    <input className="btn btn-secondary w-2/3 mt-5" type="submit" value="Submit" />
                    </div>
            </form>
        </div>
    );
};

export default AddProduct;
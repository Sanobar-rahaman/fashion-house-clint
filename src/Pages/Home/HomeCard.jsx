import { Link } from "react-router-dom";


const HomeCard = ({ fashion }) => {
    const { brandName, image } = fashion
    return (
        <div>
            <Link to={`/displayproduct/${brandName}`}>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className=" h-24" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{brandName}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">{brandName}</button>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default HomeCard;
import { useLoaderData } from "react-router-dom";


const Card = () => {
    const fashion = useLoaderData()
    console.log(fashion);
    return (
        <div>
            <h2> hello</h2>
        </div>
    );
};

export default Card;
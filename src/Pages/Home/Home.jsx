import { useLoaderData } from "react-router-dom";
import HomeCard from "./HomeCard";




const Home = () => {
    const fashion = useLoaderData()
    
    
    return (
        <div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    fashion.map(fa=><HomeCard key={fa.id} fashion ={fa} ></HomeCard>)
                }
            </div>
            
        </div>
    );
};

export default Home;
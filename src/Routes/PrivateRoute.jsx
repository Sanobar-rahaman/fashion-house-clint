import { useContext } from "react";
import { AuthContex } from "../ContexApiAuth/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const{user} = useContext(AuthContex)
    if(user){
        return children
    }
    
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;
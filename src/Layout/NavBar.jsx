import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../ContexApiAuth/AuthProvider";


const NavBar = () => {
    const{user,logOut} = useContext(AuthContex)
    const Links = <>

            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/addproduct">Add Product</NavLink></li>
            <li><NavLink to="/mycurt">My Curt</NavLink></li>
            <li><NavLink to="/login">LogIn</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/displayproduct">DisplayProduct</NavLink></li>
    
    </>
    const handlogout =()=>{
        logOut()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {Links}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        Links
      }
    </ul>
  </div>
  <div className="navbar-end">
    <span>
    {
        user && <span>{user.email}</span>
        }
    </span>
  {
        user ?<button className="btn btn-secondary ml-3" onClick={handlogout} type="button">Logout</button>:
        <Link to='login'><button className="btn btn-primary">LogIn</button></Link>
    }
  </div>
</div>
        </div>
    );
};

export default NavBar;
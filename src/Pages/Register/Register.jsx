import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../ContexApiAuth/AuthProvider";
import swal from "sweetalert";


const Register = () => {
    const{createUser} = useContext(AuthContex)
    const[error,setError]=useState('')
    const[success,setSuccess] = useState('')
    const handleRegister = e =>{
        e.preventDefault()
        const email =e.target.email.value;
        const password = e.target.password.value
        console.log(email,password);
        setError('')
        setSuccess('')
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            setSuccess('User SuccessFully Register' )
            swal("Good job!", "SuccessFully Register", "success");

        })
        .catch(error=>{
            console.log(error);
            setError(error.message)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleRegister}>

        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
          <p>Already Have a account please <Link className="text-green-500" to='/login'>logIn</Link></p>
        </div>
        </form>
        {
            error && <p className=" text-red-600">{error}</p>
        }
         {
             success && <p className=" text-green-500">{success}</p>
        }
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider/Authprovider";
import { useContext, useState } from "react";
import swal from "sweetalert";

const Adminlogin = () => {
    const { signIn } = useContext(AuthContext);
    const [ragsuss, setragsuss] = useState('')
    const [logerr, setlogerr] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const From = location.state?.from?.pathname || "/";
    
    const loginHolder = event => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        const loginData = { email, password };
        signIn(email, password)
            .then(result => {
                const user = result.user;
                setragsuss(swal('Good job', 'For your Log In'));
                navigate(From, { replace: true });

            })
            .catch((error) => {
                console.log(error)
                setlogerr(error.message);
            })
            
       
        
            

        setragsuss('')
        setlogerr('')

    }
    return (
        <div className="  h-[80vh] m-8 bg-cover  "style={{ backgroundImage: 'url(https://i.ibb.co/QXrmfP8/pexels-pixabay-47319.jpg)', }}>
        <div className="flex flex-col w-full mx-auto  pt-24 lg:flex-row">
            <div className="grid flex-grow  card  rounded-box place-items-center">
                <div className='max-w-2xl mx-auto'>

                    <h3 className='text-2xl text-center font-bold text-lime-400'>Log In Your Account</h3>
                    <form onSubmit={loginHolder}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text  text-lime-400 ">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lime-400 ">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />



                        </div>
                        <div className="form-control mt-6">
                            <button className="btn order-blue-400 rounded-lg bg-blue-800 hover:bg-lime-400  text-black hover:text-white">Login</button>
                            {/* <button onClick={logingwithGoogle} className="btn order-blue-400 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500  text-white hover:text-black mt-4"><BsGoogle></BsGoogle>Google login</button> */}

                            {/* <div className='flex items-center gap-4'>
                                <p className='text-xl font-semibold text-blue-800 '>Don't have an account? </p>
                                <Link to={'/singup'} className="label-text-alt link link-hover text-lime-400  text-xl ">Register</Link>
                            </div> */}
                        </div>

                    </form>
                    {logerr && <p className="text-center text-red-500 p-6">{logerr}</p>}

                    




                </div>
            </div>
            <div className="divider lg:divider-horizontal"></div>
            
        </div>
    
        
    </div>
    );
};

export default Adminlogin;
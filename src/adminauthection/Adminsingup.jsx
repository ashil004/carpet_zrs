import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../provider/Authprovider/Authprovider';
import axios from 'axios';

const img_hosting_api = 'https://api.imgbb.com/1/upload?key=aaa1fc88f9dc76fba16d815c4d3977df'



const Adminsingup = () => {
    const { createUser, updatePhoto } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const From = location.state?.from?.pathname || "/";
    const [registerError, setregisterError] = useState('')
    const [ragsuss, setragsuss] = useState('')
    const singUpholder = async event => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const photo = from.photo.files[0];
        const fromData = new FormData()
        fromData.append('image', photo)
        const { data } = await axios.post(img_hosting_api, fromData)
        const email = from.email.value;
        const password = from.password.value;
        const r = { email, password };
        console.log(r);
        fetch('https://test.zrsflooring.com/user', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(r)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    swal(" Make Admin  Successfully ")

                }
            })
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // setragsuss(swal('Good job', 'Make a new user'));

                updatePhoto(data.data.display_url)
                    .then(() => {
                        console.log(result);
                    })
                    .catch((error) => {
                        console.log(error)
                    });

            })
            .catch((error) => {
                console.log(error)
                setregisterError(error.message);  
            })
           navigate(From, { replace: true })

           

        // if (password.length < 6) {
        //     swal("password must be at least 6 characters");
        //     return
        // } else if (!/[A-Z]/.test(password)) {
        //     swal("password must be at least  uppercase letter");
        //     return

        // } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
        //     swal("password must be at least a special character");
        //     return
        // } else {
        //     swal("Good job!", "You are successfully registered", "success");
        // }
        setregisterError('')
        setragsuss('')


    }

    return (
        <div className="  h-[90vh] xl:m-8 lg:m-8    md:m-8 m-0 bg-cover  " style={{ backgroundImage: 'url(https://i.ibb.co/QXrmfP8/pexels-pixabay-47319.jpg)', }}>
            <div className="flex flex-col w-full pt-32 lg:flex-row">
                <div className="grid flex-grow  card  rounded-box place-items-center">
                    <div className='max-w-2xl mx-auto'>

                        <h3 className='text-2xl text-center font-bold text-lime-400 '>Register your account</h3>
                        <form onSubmit={singUpholder}>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lime-400">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lime-500">Photo Url:</span>
                                </label>
                                <input type="file" name='photo' id="image" accept="image/*" placeholder="Enter Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lime-400 ">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />



                            </div>
                            <div className="form-control mt-6">
                                <button className="btn order-blue-400 rounded-lg  bg-blue-800 hover:bg-lime-400  text-black hover:text-white">Register</button>

                                <div className='flex items-center gap-4'>
                                    <p className='text-xl text-blue-800 '>Already You have an Account? </p>
                                    <Link to={'/login'} className="label-text-alt link link-hover  text-lime-400  text-xl">Login</Link>
                                </div>
                            </div>

                        </form>
                        {registerError && <p className="text-center text-red-500 p-6">{registerError}</p>}




                    </div>
                </div>

            </div>

        </div>
    );
};

export default Adminsingup;
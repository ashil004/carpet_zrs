import React from 'react';
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Contactfollow = () => {
    return (
        <div className="mt-16">
            <div className="text-center">
                <p className="text-sm text-blue-800 font-semibold">Join To Us</p>
                <h1 className="font-bold text-3xl ">Follow us on social media for exclusive offers</h1>
            </div>
            <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col justify-around mt-16">
                <div className="xl:max-w-[35%] lg:max-w-[35%]">
                    <p className="text-zinc-400 text-lg text-justify">
                        ZRS Carpets started as a small shop in 2010 and quickly expanded to offer customers easy access to their multiple stores in the UAE, providing them with a wide range of floorings, including our in-house brand for the entire market retail of the United Arab Emirates. We import high-quality products from countries such as India, Turkey, China, and Europe which follow strict international quality protocols. In addition to the wholesale and retail vertical, we have even started exporting our products to countries like Oman, Saudi Arabia, Africa, and the rest of the GCC. Thus, making us known all over the world!
                    </p>
                    <div className="flex gap-4 xl:justify-normal lg:justify-normal my-6 mx-6 xl:mx-0 lg:mx-0 md:justify-around ">
                        <Link className='bg-blue-800 rounded-full p-6 text-white' to="https://www.instagram.com/zrsflooring/"><h3 className="text-xl hover:text-lime-400"><FaInstagram /></h3></Link>
                        <Link className='bg-blue-800 rounded-full p-6 text-white'  to='http://facebook.com/zrsflooring/'><h3 className="text-xl hover:text-lime-400"><AiOutlineFacebook /></h3></Link>
                        <Link className='bg-blue-800 rounded-full p-6 text-white'  to="https://x.com/zrsflooring"><h3 className="text-lg hover:text-lime-400"><BsTwitterX /></h3></Link>
                        <Link className='bg-blue-800 rounded-full p-6 text-white' to='https://linkedin.com/company/zrsflooring/'><h3 className="text-xl hover:text-lime-400"><FaLinkedinIn /></h3></Link>


                    </div>
                </div>
                <div className="xl:w-[35%] lg:w-[35%] ">
                    <img src="https://i.ibb.co.com/jR51JJG/pexels-pixabay-533446.jpg"></img>
                </div>

            </div>

        </div>
    );
};

export default Contactfollow;

import axios from 'axios';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();
    const [logos, setLogos] = useState([])
    useEffect(() => {
        axios.get('https://test.zrsflooring.com/icon')
            .then((res) => setLogos(res.data))
            .catch((err) => console.log(err))


    }, [])

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    const Links = <>
        <NavLink to='/'><li className="group flex  cursor-pointer flex-col md:text-sm">
            Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-lime-400 transition-all duration-300 group-hover:w-full "></span>
        </li></NavLink>
        <NavLink to='/about'><li className="group flex  cursor-pointer flex-col md:text-sm">
            About<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-lime-400 transition-all duration-300 group-hover:w-full "></span>
        </li></NavLink>
        <NavLink to='/product'><li className="group flex  cursor-pointer flex-col md:text-sm">
            Product <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-lime-400 transition-all duration-300 group-hover:w-full "></span>
        </li></NavLink>
        <NavLink to='/services'><li className="group flex  cursor-pointer flex-col md:text-sm">
            Services<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-lime-400 transition-all duration-300 group-hover:w-full "></span>
        </li></NavLink>
        <NavLink to='/our-works'><li className="group flex  cursor-pointer flex-col md:text-sm">
            Works<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-lime-400 transition-all duration-300 group-hover:w-full "></span>
        </li></NavLink>
        <NavLink to='/contact-us'><li className="group flex  cursor-pointer flex-col md:text-sm">
            Contact<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-lime-400 transition-all duration-300 group-hover:w-full "></span>
        </li></NavLink>
        <NavLink to='/blog'><li className="group flex  cursor-pointer flex-col md:text-sm">
            Blogs<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-lime-400 transition-all duration-300 group-hover:w-full "></span>
        </li></NavLink>
        <NavLink to='/download'><li className="group flex  cursor-pointer flex-col md:text-sm">
            Download <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-lime-400 transition-all duration-300 group-hover:w-full "></span>
        </li></NavLink>
        <NavLink to='/free-sample'><li className="group flex  cursor-pointer flex-col border-2  border-lime-400 px-4 py-2 hover:bg-blue-900 hover:text-white md:text-sm">
            FREE SAMPLE
        </li></NavLink>
        <NavLink to='/enquiry'><li className="group flex  cursor-pointer flex-col
        bg-lime-400 hover:bg-blue-900 hover:text-white  px-4 py-2 md:text-sm">
            ENQUIRY
        </li></NavLink>



    </>
    return (
        <nav className="flex items-center justify-between bg-white px-4 py-2  mb-24 ">
            <Link to='/'>
                <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 ">
                    {
                        logos.map(logo => <h2 key={logo._id} logo={logo}>
                            <img className=' xl:w-56 lg:w-56 md:w-48 w-36' src={logo.pic} />
                        </h2> )
                    }
                   
                </div>
            </Link>
            <ul className="hidden items-center justify-evenly xl:gap-6 lg:gap-5 md:gap-2  md:flex ">
                {Links}

            </ul>
            <div>

            </div>

            <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                {dropDownState && (
                    <ul className=" z-10  gap-2  bg-white  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                        {
                            Links
                        }


                    </ul>
                )}



            </div>


        </nav>
    );
};

export default Navbar;
import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider/Authprovider";
import { FaHome } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { CiSquareQuestion } from "react-icons/ci";
import { TfiWrite } from "react-icons/tfi";
import { GrWorkshop } from "react-icons/gr";
import { FaUserCheck } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoLogoChrome } from "react-icons/io";
const Dashbordnavbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const clickOnLogout = () => {

        logOut()

    }
    const products = <>
        <li className="font-semibold mx-auto "><Link to='/admin/grass-upload-product'>Grass Upload </Link></li>
        <li className="font-semibold mx-auto"><NavLink to='/admin/vinyl-upload-product'>Vinyl Upload </NavLink></li>
        <li className="font-semibold mx-auto "> <NavLink to='/admin/gym-upload-product'>Gym Upload </NavLink></li>
        <li className="font-semibold mx-auto "> <NavLink to='/admin/deck-upload-product'>Deck Upload </NavLink></li>
        <li className="font-semibold mx-auto "><NavLink to='/admin/spc-upload-product'>Spc Upload </NavLink></li>
        <li className="font-semibold mx-auto "><NavLink to='/admin/lvt-upload-product'>Lvt Upload </NavLink></li>
        <li className="font-semibold mx-auto "><NavLink to='/admin/laminate-upload-product'>Laminate Upload </NavLink></li>
        <li className="font-semibold mx-auto"> <NavLink to='/admin/carpet-upload-product'>Carpet Upload </NavLink></li>
        <li className="font-semibold mx-auto"> <NavLink to='/admin/wood-upload-product'>Wood Upload </NavLink></li>
        <li className="font-semibold mx-auto"><NavLink to='/admin/rubber-upload-product'>Rubber Upload </NavLink></li>
        <li className="font-semibold mx-auto"><NavLink to='/admin/wall-upload-product'>Wall Upload </NavLink></li>
        <li className="font-semibold mx-auto"><NavLink to='/admin/pvc-upload-product'>Pvc Upload </NavLink></li>
    </>
    const Links = <>
        <NavLink to='/admin/home'><li className="pt-4 transition hover:-translate-y-1 hover:scale-110"><span className="text-4xl"><FaHome /></span></li></NavLink>
        <NavLink to='/admin/users-massage'><li className="pt-4 transition hover:-translate-y-1 hover:scale-110 "><span className="text-4xl "><TiMessages /></span></li></NavLink>
        <NavLink to='/admin/sample-request'><li className="pt-4 transition hover:-translate-y-1 hover:scale-110"> <span className="text-4xl"><CiSquareQuestion /></span></li></NavLink>
        <NavLink to='/admin/blog-publish'><li className="pt-4 transition hover:-translate-y-1 hover:scale-110"><span className="text-4xl"><TfiWrite /></span></li></NavLink>
        <NavLink to='/admin/our-work-publish'><li className="pt-4 transition hover:-translate-y-1 hover:scale-110"><span className="text-4xl"><GrWorkshop /></span></li></NavLink>
        <NavLink to='/admin/users'><li className="pt-4 transition hover:-translate-y-1 hover:scale-110"><span className="text-4xl"><FaUserCheck /></span></li></NavLink>
        <NavLink to='/admin/logo'><li className="pt-4 transition hover:-translate-y-1 hover:scale-110"><span className="text-4xl"><IoLogoChrome /></span></li></NavLink>
        



    </>
    return (
        <div >
            <div className="navbar bg-blue-800 text-white ">
                <div className="flex-1">
                    <h2 className="text-xl font-semibold mt-6">ZRS Flooring Collections</h2>
                </div>
                <div className="flex-none">

                    <div className="dropdown dropdown-end">

                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-16 rounded-full">
                                
                                     {
                                        user ? <img src={user.photoURL}/>:<img className="rounded-full" src="https://i.ibb.co/r7TLzBS/pexels-jopwell-2422287.jpg" />
                                     }
                                
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-800 text-white rounded-box w-52">
                            <li><Link to='/'>Go to Home</Link></li>
                            <li>

                                <span>
                                    {
                                        user ? <span>{user.email} </span> : <span>N/A</span>
                                    }

                                </span>
                            </li>
                            <li><Link to='/singup'>Make Admin</Link></li>

                            <li>
                                {
                                    user ? <Link onClick={clickOnLogout}  > Log Out</Link> : <Link to={'/login'} >Login</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex" >
                <div className= "xl:w-16  lg:w-16 md:w-16  w-16 h-[600px]  bg-blue-800 text-white">
                    <ul className="xl:mt-8 lg:mt-12 lg:p-4   md:p-4 md:mt-12 md:text-xl xl:p-4  mt-8 p-4  text-base ">
                        {
                            Links
                        }

                        <div className="dropdown dropdown-right dropdown-end ">
                            <div tabIndex={0} role="button" className="text-4xl pt-4 transition hover:-translate-y-1 hover:scale-110"><span ><MdProductionQuantityLimits /></span></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">

                                {
                                    products
                                }

                            </ul>
                        </div>

                    </ul>



                </div>

                <Outlet></Outlet>
                

            </div>






        </div>
    );
};

export default Dashbordnavbar;
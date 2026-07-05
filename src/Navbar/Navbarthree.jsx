import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Navbarthree = () => {


    return (
        <div>
            <div className="flex justify-evenly items-center pt-2  xl:mx-32 md:mx-32 lg:mx-32    xl:ml-96  lg:ml-96 md:ml-64 ml-2  gap-4 md:gap-2 ">

                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="m-0"><Link to="/grass"><h2 className=" font-semibold md:text-lg text-sm  hover:border-b-2 hover:border-black ">Artificial <span className="hidden xl:inline ">Grass</span></h2></Link></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">
                        <li><Link to="/football">Football Grass</Link></li>
                        <li><Link to="/landscaping">Landscaping Grass</Link></li>
                        <li><Link to="/playground">Playground Grass</Link></li>
                        <li><Link to="/colorfull">Colorful Grass</Link></li>
                        <li><Link to="/exhibition">Exhibition Grass</Link></li>
                        <li><Link to="/grass-accessories">Grass Accessories</Link></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="m-0"><Link to='/vinyl'><h2 className="font-semibold md:text-lg text-sm hover:border-b-2 hover:border-black">Vinyl <span className="hidden xl:inline ">Flooring</span></h2></Link></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">
                        <li><Link to="/granite">Granite Vinyl</Link></li>
                        <li><Link to="/wood-pattern">Wood Pattern Vinyl </Link></li>
                        <li><Link to="/coin-vinyl">Coin Vinyl Flooring</Link></li>
                        <li><Link to="/linoleum-vinyl">Linoleum Vinyl Flooring</Link></li>
                        <li><Link to="/homogeneous-medical-vinyl">Homogeneous Medical Vinyl Flooring</Link></li>
                        <li><Link to="/sigma-medical-vinyl">Sigma Medical Vinyl Flooring</Link></li>
                        <li><Link to="/heterogeneous-vinyl">Heterogeneous Vinyl Flooring</Link></li>
                        <li><Link to="/plain-color-vinyl">Plain Color Vinyl Flooring</Link></li>
                        <li><Link to="/cresto-vinyl">Cresto Vinyl Flooring</Link></li>
                        <li><Link to="/vinyl-accerssories">Vinyl Flooring Accessories</Link></li>
                    </ul>
                </div>

                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className=" m-0"><Link to='gym'><h2 className="font-semibold md:text-lg text-sm hover:border-b-2 hover:border-black">Gym <span className="hidden xl:inline ">Flooring</span></h2></Link></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">
                        <li><Link to="/epdm-gym-roll">EPDM Gym Flooring Roll</Link></li>
                        <li><Link to="/epdm-gym-tile">EPDM Gym Flooring Tile</Link></li>
                        <li><Link to="/sport-gym">Sports Flooring</Link></li>

                    </ul>
                </div>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className=" m-0"><div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className=" m-1"><Link to='/deck'><h2 className="font-semibold md:text-lg text-sm hover:border-b-2 hover:border-black">Deck <span className="hidden xl:inline">Flooring</span></h2></Link></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">
                            <li><Link to="/acaia">Acacia Deck Tiles</Link></li>
                            <li><Link to="/wpc-deck-tiles">Wpc Deck Tiles</Link></li>
                            <li><Link to="/wpc-co-extusion-deck-tiles">Wpc Co-Extrusion Deck Tiles</Link></li>
                            <li><Link to="/wpc-co-extusion-solid-Floring">Wpc Co-Extrusion Solid Deck Flooring</Link></li>
                            <li><Link to="/wpc-solid-Floring">Wpc Solid Deck Flooring</Link></li>
                            <li><Link to="/bamboo-solid">Bamboo Solid Deck Flooring</Link></li>
                            <li><Link to="/wpc-3d">Wpc 3D Hollow Round Deck Flooring</Link></li>
                            <li><Link to="/wpc-3d-square">Wpc 3D Hollow Square Deck Flooring</Link></li>
                            <li><Link to="/wpc-3d-square-line">Wpc Hollow Square Line Deck Flooring</Link></li>
                            <li><Link to="/wpc-square-wood">Wpc Hollow Square Ancient Wood Deck Flooring</Link></li>
                        </ul>
                    </div>
                    </div>

                </div>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className=" m-0"><div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className=" m-0"><Link to="/spc"><h2 className="font-semibold md:text-lg text-sm hover:border-b-2 hover:border-black">SPC <span className="hidden xl:inline">Eva Flooring</span></h2></Link></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">
                            <li><Link to="/falconeva">Falcon Eva Spc Flooring</Link></li>
                            <li><Link to="/camelspc">Camel Spc Flooring</Link></li>
                            <li><Link to="/higher-eva">Higher Eva Spc Flooring</Link></li>
                            <li><Link to="/higher-spc">Higher Spc Flooring</Link></li>
                            <li><Link to="/herring-spc">Herringbone Spc Flooring</Link></li>
                            <li><Link to="/herring-eva">Herringbone Eva Spc Flooring</Link></li>
                            <li><Link to="/stone-spc">Stone Spc Flooring</Link></li>
                            <li><Link to="/spc-accessories">Spc Flooring Accessories</Link></li>
                        </ul>
                    </div>
                    </div>

                </div>
                <div className="dropdown  dropdown-end dropdown-hover">
                    <div tabIndex={0} role="button" className=" m-0"><div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className=" m-0"><Link to="/ltv"><h2 className="font-semibold md:text-lg text-sm hover:border-b-2 hover:border-black">Ltv <span className="hidden xl:inline">Flooring</span></h2></Link></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">
                            <li><Link to="/timberland">Timberland Exotica Lvt Flooring</Link></li>
                            <li><Link to="/lvt-accessories">Lvt Flooring Accessories</Link></li>
                            
                        </ul>
                    </div>
                    </div>

                </div>
                <div className="dropdown dropdown-hover hidden md:inline lg:inline xl:inline">
                    <div tabIndex={0} role="button" className=" m-0"><div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className=" m-0"> <Link to="/laminate"><h2 className="font-semibold md:text-lg text-sm hover:border-b-2 hover:border-black">Laminate <span className="hidden xl:inline"> Flooring</span></h2></Link></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">
                            <li><Link to="/hdf">HDF (High Density Fiberboard Flooring)</Link></li>
                            <li><Link to="/mdf">MDF (Medium Density Fiberboard Flooring)</Link></li>
                            <li><Link to="/laminate-accessories">Laminate Flooring Accessories</Link></li>
                            
                        </ul>
                    </div>
                    </div>

                </div>

                <div className="dropdown dropdown-left ">
                    <div tabIndex={0} role="button" className=" font-semibold md:text-lg text-sm m-0 hover:border-b-2 hover:border-black flex items-end">More<span><IoIosArrowDown /></span></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">




                        <li><Link className="font-semibold md:text-lg text-sm hover:border-b-2 hover:border-black" to="/carpet">Carpet Flooring</Link></li>
                        <li><Link className="font-semibold md:text-lg text-sm hover:border-b-2 hover:border-black" to="/wood">Wood Flooring</Link></li>
                        <li><Link className="font-semibold md:text-lg text-sm hover:border-b-2 hover:border-black" to="/rubber">Rubber Flooring</Link></li>
                        <li><Link className="font-semibold md:text-lg text-sm hover:border-b-2 hover:border-black" to="/wall">Wall Flooring</Link></li>
                        <li><Link className="font-semibold md:text-lg text-sm hover:border-b-2 hover:border-black" to="/pvc">Pvc Flooring</Link></li>
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default Navbarthree;

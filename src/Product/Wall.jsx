import { useEffect, useState } from "react";
import Walldetils from "./Walldetils";
import { Link } from "react-router-dom";
import { MdOutlineDeck, MdOutlineGrass } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { PiLockLaminatedFill, PiVinylRecordDuotone } from "react-icons/pi";
import { BsPCircle } from "react-icons/bs";
import { GiBrickWall, GiDominoTiles, GiFloorPolisher, GiRedCarpet, GiWoodBeam } from "react-icons/gi";
import { TbRubberStamp } from "react-icons/tb";


const Wall = () => {
    const [awalls, setAwalls] = useState([]);
    useEffect(() => {
        fetch('https://test.zrsflooring.com/wall')
            .then(res => res.json())
            .then(data => setAwalls(data));

    }, [])
    return (
        <div>
            <div className="-mt-24">
                <div className="h-[60vh] mt-24 bg-cover " style={{ backgroundImage: 'url(https://i.ibb.co/x6FQKnS/Wall-Flooring-2.jpg)', }}>
                    <div className="hero-overlay "></div>
                    <div className="  text-white -mt-56 ml-12 ">
                        <h1 className="text-3xl font-bold" >Wall Cladding</h1>
                        <p>We Are The Wall Cladding suppliers in UAE</p>
                    </div>
                </div>

            </div>
            <div className="flex  mt-10  space-x-6 m-6">
            <div className=" xl:w-80 xl:h-[800px] lg:w-64 lg:h-[520px] md:w-64 md:h-[520px] w-20 h-[520px] bg-white shadow-xl border border-black text-black  rounded-lg bg-fixed ">
                        <h3 className="font-bold xl:text-5xl lg:text-3xl md:text-3xl text-sm text-center p-2   ">All Product</h3>


                        <div className="xl:space-y-4 xl:pt-12">
                        <div className="dropdown dropdown-hover dropdown-right ">
                            <div tabIndex={0} role="button" className="m-0"><Link to="/grass"><div className=" font-semibold md:text-xl text-sm text-black gap-2 xl:pl-10 lg:pl-6 md:pl-2 pl-6 flex items-center hover:text-lime-400"><h1 > <MdOutlineGrass className="text-3xl " /></h1><h1 className="hidden md:inline">Artificial</h1> <h1 className="hidden xl:inline md:inline "> Grass</h1></div></Link></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">
                                <li><Link to="/football">Football Grass</Link></li>
                                <li><Link to="/landscaping">Landscaping Grass</Link></li>
                                <li><Link to="/playground">Playground Grass</Link></li>
                                <li><Link to="/colorfull">Colorful Grass</Link></li>
                                <li><Link to="/exhibition">Exhibition Grass</Link></li>
                                <li><Link to="/grass-accessories">Grass Accessories</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover dropdown-right">
                            <div tabIndex={0} role="button" className="m-0"><Link to="/vinyl"><h2 className=" font-semibold md:text-lg text-sm text-black   gap-2 xl:pl-10 lg:pl-6 md:pl-2 pl-6 flex items-center hover:text-lime-400  "> <span><PiVinylRecordDuotone className="text-3xl " /></span><span className="hidden md:inline">Vinyl</span> <span className="hidden xl:inline lg:inline md:inline ">Flooring</span></h2></Link></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">
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
                        <div className="dropdown dropdown-hover dropdown-right">
                            <div tabIndex={0} role="button" className="m-0"><Link to="/gym"><h2 className=" font-semibold md:text-lg text-sm text-black   gap-2 xl:pl-10 lg:pl-6 md:pl-2 pl-6 flex items-center hover:text-lime-400  "><span><CgGym className="text-3xl " /></span><span className="hidden md:inline">Gym</span> <span className="hidden xl:inline lg:inline md:inline "> Flooring</span></h2></Link></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">

                                <li><Link to="/epdm-gym-roll">EPDM Gym Flooring Roll</Link></li>
                                <li><Link to="/epdm-gym-tile">EPDM Gym Flooring Tile</Link></li>
                                <li><Link to="/sport-gym">Sports Flooring</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover dropdown-right">
                            <div tabIndex={0} role="button" className="m-0"><Link to="/deck"><h2 className=" font-semibold md:text-lg text-sm text-black  text-center gap-2 xl:pl-10 lg:pl-6 md:pl-2 pl-6 flex items-center hover:text-lime-400"><span><MdOutlineDeck className="text-3xl " /></span><span className="hidden md:inline">Deck</span> <span className="hidden xl:inline lg:inline md:inline">Flooring</span></h2></Link></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">
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
                        <div className="dropdown dropdown-hover dropdown-right">
                            <div tabIndex={0} role="button" className="m-0"><Link to="/spc"><h2 className=" font-semibold md:text-lg text-sm text-black  text-center gap-2 xl:pl-10 lg:pl-6 md:pl-2 pl-6 flex items-center hover:text-lime-400"><span><BsPCircle className="text-3xl " /></span><span className="hidden md:inline">SPC </span><span className="hidden xl:inline lg:inline md:inline">Eva Flooring</span></h2></Link></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">
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
                        <div className="dropdown dropdown-hover dropdown-right">
                            <div tabIndex={0} role="button" className="m-0"><Link to="/ltv"><h2 className=" font-semibold md:text-lg text-sm text-black  text-center gap-2 xl:pl-10 lg:pl-6 md:pl-2 pl-6 flex items-center hover:text-lime-400"><span><GiFloorPolisher className="text-3xl " /></span><span className="hidden md:inline">Ltv</span> <span className="hidden xl:inline lg:inline md:inline">Flooring</span></h2></Link></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">
                            <li><Link to="/timberland">Timberland Exotica Lvt Flooring</Link></li>
                            <li><Link to="/lvt-accessories">Lvt Flooring Accessories</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover dropdown-right">
                            <div tabIndex={0} role="button" className="m-0"><Link to="/laminate"><h2 className=" font-semibold md:text-lg text-sm text-black  text-center gap-2 xl:pl-10 lg:pl-6 md:pl-2 pl-6 flex items-center hover:text-lime-400  "><span><PiLockLaminatedFill className="text-3xl" /></span><span className="hidden md:inline">Laminate</span> <span className="hidden xl:inline lg:inline  md:inline ">Flooring</span></h2></Link></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">
                            <li><Link to="/hdf">HDF (High Density Fiberboard Flooring)</Link></li>
                            <li><Link to="/mdf">MDF (Medium Density Fiberboard Flooring)</Link></li>
                            <li><Link to="/laminate-accessories">Laminate Flooring Accessories</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover dropdown-right">
                            <div tabIndex={0} role="button" className="m-0"><Link to="/carpet"><h2 className=" font-semibold md:text-lg text-sm text-black  text-center gap-2 xl:pl-10 lg:pl-6 md:pl-2 pl-6  flex items-center hover:text-lime-400 "><span><GiRedCarpet className="text-3xl " /></span><span className="hidden md:inline">Carpet</span> <span className="hidden xl:inline lg:inline md:inline">Flooring</span></h2></Link></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">
                                <li><Link to="/luxuria">Luxuria Carpet Tiles</Link></li>
                                <li><Link to="/platium">Platinum Carpet Tiles</Link></li>
                                <li><Link to="/carpet-accessries">Exhibition Carpet</Link></li>
                                
                            </ul>
                        </div>

                        <div className="dropdown dropdown-hover dropdown-right">
                            <div tabIndex={0} role="button" className="m-0"><Link to="/wood"><h2 className=" font-semibold md:text-lg text-sm text-black  text-center gap-2 xl:pl-10 lg:pl-6 md:pl-2 pl-6 flex items-center hover:text-lime-400 "><span><GiWoodBeam className="text-3xl " /></span><span className="hidden md:inline">Wood</span> <span className="hidden xl:inline lg:inline md:inline">Flooring</span></h2></Link></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">
                                <li><Link to="/european">European Engineered Wood Flooring</Link></li>
                                <li><Link to="/bamboo-wood">Bamboo Flooring</Link></li>
                                <li><Link to="/accessries-wood">Wooden Flooring Accessories</Link></li>
                                
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover dropdown-right">
                            <div tabIndex={0} role="button" className="m-0"><Link to="/rubber"><h2 className=" font-semibold md:text-lg text-sm text-black  text-center gap-2 xl:pl-10 lg:pl-6 md:pl-2 pl-6  flex items-center hover:text-lime-400   "><span><TbRubberStamp className="text-3xl " /></span><span className="hidden md:inline">Rubber</span> <span className="hidden xl:inline lg:inline md:inline">Flooring</span></h2></Link></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">
                                <li><Link to="/rubber-tiles">Rubber Tile Flooring</Link></li>
                                <li><Link to="/coin-tiles">Coin Tile Flooring</Link></li>
                                <li><Link to="/coin-rubber">Coin Rubber Flooring</Link></li>
                                <li><Link to="/checker-rubber">Checker Rubber Flooring</Link></li>
                                <li><Link to="/dimond-rubber">Diamond Rubber Flooring</Link></li>
                                <li><Link to="/line-rubber">Line Rubber Flooring</Link></li>
                                <li><Link to="/eva-mat">EVA Mat</Link></li>
                                <li><Link to="/hollow-mat">Hollow Mat</Link></li>
                                <li><Link to="/horse-mat">Horse mat</Link></li>
                                <li><Link to="/bubble-mat">Bubble Mat</Link></li>
                                <li><Link to="/Sound-poroft">Sound Proof Mat</Link></li>
                                <li><Link to="/rubber-accessries">Rubber Flooring Accessories</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover dropdown-right">
                            <div tabIndex={0} role="button" className="m-0"><Link to="/wall"><h2 className=" font-semibold md:text-lg text-sm text-black  text-center gap-2 xl:pl-10 lg:pl-6 md:pl-2 pl-6  flex items-center hover:text-lime-400  "><span><GiBrickWall className="text-3xl " /></span><span className="hidden md:inline">Wall</span> <span className="hidden xl:inline lg:inline md:inline">Flooring</span></h2></Link></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">
                            <li><Link to="/wall-cladding">Wall Cladding</Link></li>
                                <li><Link to="/wpc-co">WPC Co Extrusion Wall cladding</Link></li>
                                <li><Link to="/wpc-od">WPC OD Wall Cladding</Link></li>
                                <li><Link to="/pvc-square">PVC Square Hollow Wall Cladding</Link></li>
                                <li><Link to="/pvc-round">PVC Round Hollow Wall Cladding</Link></li>
                                <li><Link to="/pvc-solid">PVC Solid Wall Cladding</Link></li>
                                <li><Link to="/wall-sheet">Wall Acrylic Sheet</Link></li>
                                <li><Link to="/pu">PU STONE</Link></li>
                                <li><Link to="/wall-accessries">Wall Cladding Accessories</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover dropdown-right">
                            <div tabIndex={0} role="button" className="m-0"><Link to="/pvc"><h2 className=" font-semibold md:text-lg text-sm text-black  text-center gap-2 xl:pl-10 lg:pl-6 md:pl-2 pl-6 flex items-center hover:text-lime-400 "><span ><GiDominoTiles className="text-3xl " /></span><span className="hidden md:inline">Pvc</span> <span className="hidden xl:inline lg:inline md:inline">Flooring</span></h2></Link></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">
                                <li><Link to="/wet-mat">Wet Mat Flooring</Link></li>
                                <li><Link to="/coil-mat">SPVC / Coil Mat</Link></li>
                                <li><Link to="/pvc-mat">PVC Mat</Link></li>
                                <li><Link to="/clear-pvc">Clear PVC</Link></li>
                                
                            </ul>
                        </div>
                        </div>





                    </div>
                <div className="w-[95%] xl:w-[90%] lg:w-[90%] mx-auto xl:gap-8 lg:gap-6 md:gap-10 gap-2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 my-12  ">

                    {
                        awalls.map(awall => <Walldetils key={awall._id} awall={awall}></Walldetils>)

                    }

                </div>
            </div>


        </div>
    );
};

export default Wall;
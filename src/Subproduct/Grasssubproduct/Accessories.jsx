import { Link } from "react-router-dom";
import { MdOutlineDeck, MdOutlineGrass } from "react-icons/md";
import { PiVinylRecordDuotone, PiLockLaminatedFill } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import { BsPCircle } from "react-icons/bs";
import { GiBrickWall, GiFloorPolisher, GiRedCarpet, GiWoodBeam } from "react-icons/gi";
import { TbRubberStamp } from "react-icons/tb";
import { GiDominoTiles } from "react-icons/gi";

const Accessories = () => {
    return (
        <div>
            <div>
                <div className="-mt-24">
                    <div className="h-[60vh] mt-24 bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/Jkgp3Ys/Grass-Accessories.webp)', }}>
                        <div className="hero-overlay opacity-0"></div>
                        <div className="  text-white -mt-56 ml-12 ">
                            <h1 className="text-3xl font-bold" >Grass Accessories</h1>

                        </div>
                    </div>

                </div>
            </div>
            <div className="flex  mt-10  space-x-6 m-6">
            <div className=" xl:w-80 xl:h-[800px] lg:w-64 lg:h-[520px] md:w-64 md:h-[520px] w-20 h-[520px] bg-white shadow-xl border border-black text-black  rounded-lg bg-fixed  px-6">
                        <h3 className="font-bold xl:text-4xl lg:text-3xl md:text-3xl text-sm text-center xl:p-4 lg:p-4 md:p-4 p-0  ">All Product</h3>


                        <div className="xl:space-y-4 xl:pt-12">
                        <div className="dropdown dropdown-hover dropdown-right ">
                            <div tabIndex={0} role="button" className="m-0"><Link to="/grass"><div className=" font-semibold md:text-xl text-sm text-black gap-2  xl:pl-8 lg:pl-0 md:pl-2 pl-0  flex items-center hover:text-lime-400"><h1 > <MdOutlineGrass className="text-3xl " /></h1><h1 className="hidden md:inline">Artificial</h1> <h1 className="hidden xl:inline md:inline "> Grass</h1></div></Link></div>
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
                            <div tabIndex={0} role="button" className="m-0"><Link to="/vinyl"><h2 className=" font-semibold md:text-lg text-sm text-black   gap-2 xl:pl-8 lg:pl-0 md:pl-2 pl-0  flex items-center hover:text-lime-400  "> <span><PiVinylRecordDuotone className="text-3xl " /></span><span className="hidden md:inline">Vinyl</span> <span className="hidden xl:inline lg:inline md:inline ">Flooring</span></h2></Link></div>
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
                            <div tabIndex={0} role="button" className="m-0"><Link to="/gym"><h2 className=" font-semibold md:text-lg text-sm text-black   gap-2 xl:pl-8 lg:pl-0 md:pl-2 pl-0  flex items-center hover:text-lime-400  "><span><CgGym className="text-3xl " /></span><span className="hidden md:inline">Gym</span> <span className="hidden xl:inline lg:inline md:inline "> Flooring</span></h2></Link></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">

                                <li><Link to="/epdm-gym-roll">EPDM Gym Flooring Roll</Link></li>
                                <li><Link to="/epdm-gym-tile">EPDM Gym Flooring Tile</Link></li>
                                <li><Link to="/sport-gym">Sports Flooring</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover dropdown-right">
                            <div tabIndex={0} role="button" className="m-0"><Link to="/deck"><h2 className=" font-semibold md:text-lg text-sm text-black  text-center gap-2 xl:pl-8 lg:pl-0 md:pl-2 pl-0    flex items-center hover:text-lime-400"><span><MdOutlineDeck className="text-3xl " /></span><span className="hidden md:inline">Deck</span> <span className="hidden xl:inline lg:inline md:inline">Flooring</span></h2></Link></div>
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
                            <div tabIndex={0} role="button" className="m-0"><Link to="/spc"><h2 className=" font-semibold md:text-lg text-sm text-black  text-center gap-2 xl:pl-8 lg:pl-0 md:pl-2 pl-0  flex items-center hover:text-lime-400"><span><BsPCircle className="text-3xl " /></span><span className="hidden md:inline">SPC </span><span className="hidden xl:inline lg:inline md:inline">Eva Flooring</span></h2></Link></div>
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
                            <div tabIndex={0} role="button" className="m-0"><Link to="/ltv"><h2 className=" font-semibold md:text-lg text-sm text-black  text-center gap-2 xl:pl-8 lg:pl-0 md:pl-2 pl-0  flex items-center hover:text-lime-400"><span><GiFloorPolisher className="text-3xl " /></span><span className="hidden md:inline">Ltv</span> <span className="hidden xl:inline lg:inline md:inline">Flooring</span></h2></Link></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">
                            <li><Link to="/timberland">Timberland Exotica Lvt Flooring</Link></li>
                            <li><Link to="/lvt-accessories">Lvt Flooring Accessories</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover dropdown-right">
                            <div tabIndex={0} role="button" className="m-0"><Link to="/laminate"><h2 className=" font-semibold md:text-lg text-sm text-black  text-center gap-2 xl:pl-8 lg:pl-0 md:pl-2 pl-0   flex items-center hover:text-lime-400  "><span><PiLockLaminatedFill className="text-3xl" /></span><span className="hidden md:inline">Laminate</span> <span className="hidden xl:inline lg:inline  md:inline ">Flooring</span></h2></Link></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">
                            <li><Link to="/hdf">HDF (High Density Fiberboard Flooring)</Link></li>
                            <li><Link to="/mdf">MDF (Medium Density Fiberboard Flooring)</Link></li>
                            <li><Link to="/laminate-accessories">Laminate Flooring Accessories</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover dropdown-right">
                            <div tabIndex={0} role="button" className="m-0"><Link to="/carpet"><h2 className=" font-semibold md:text-lg text-sm text-black  text-center gap-2 xl:pl-8 lg:pl-0 md:pl-2 pl-0    flex items-center hover:text-lime-400 "><span><GiRedCarpet className="text-3xl " /></span><span className="hidden md:inline">Carpet</span> <span className="hidden xl:inline lg:inline md:inline">Flooring</span></h2></Link></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">
                                <li><Link to="/luxuria">Luxuria Carpet Tiles</Link></li>
                                <li><Link to="/platium">Platinum Carpet Tiles</Link></li>
                                <li><Link to="/carpet-accessries">Exhibition Carpet</Link></li>
                                
                            </ul>
                        </div>

                        <div className="dropdown dropdown-hover dropdown-right">
                            <div tabIndex={0} role="button" className="m-0"><Link to="/wood"><h2 className=" font-semibold md:text-lg text-sm text-black  text-center gap-2 xl:pl-8 lg:pl-0 md:pl-2 pl-0  flex items-center hover:text-lime-400 "><span><GiWoodBeam className="text-3xl " /></span><span className="hidden md:inline">Wood</span> <span className="hidden xl:inline lg:inline md:inline">Flooring</span></h2></Link></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">
                                <li><Link to="/european">European Engineered Wood Flooring</Link></li>
                                <li><Link to="/bamboo-wood">Bamboo Flooring</Link></li>
                                <li><Link to="/accessries-wood">Wooden Flooring Accessories</Link></li>
                                
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover dropdown-right">
                            <div tabIndex={0} role="button" className="m-0"><Link to="/rubber"><h2 className=" font-semibold md:text-lg text-sm text-black  text-center gap-2 xl:pl-8 lg:pl-0 md:pl-2 pl-0    flex items-center hover:text-lime-400   "><span><TbRubberStamp className="text-3xl " /></span><span className="hidden md:inline">Rubber</span> <span className="hidden xl:inline lg:inline md:inline">Flooring</span></h2></Link></div>
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
                            <div tabIndex={0} role="button" className="m-0"><Link to="/wall"><h2 className=" font-semibold md:text-lg text-sm text-black  text-center gap-2 xl:pl-8 lg:pl-0 md:pl-2 pl-0    flex items-center hover:text-lime-400  "><span><GiBrickWall className="text-3xl " /></span><span className="hidden md:inline">Wall</span> <span className="hidden xl:inline lg:inline md:inline">Flooring</span></h2></Link></div>
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
                            <div tabIndex={0} role="button" className="m-0"><Link to="/pvc"><h2 className=" font-semibold md:text-lg text-sm text-black  text-center gap-2 xl:pl-8 lg:pl-0 md:pl-2 pl-0  flex items-center hover:text-lime-400 "><span ><GiDominoTiles className="text-3xl " /></span><span className="hidden md:inline">Pvc</span> <span className="hidden xl:inline lg:inline md:inline">Flooring</span></h2></Link></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">
                                <li><Link to="/wet-mat">Wet Mat Flooring</Link></li>
                                <li><Link to="/coil-mat">SPVC / Coil Mat</Link></li>
                                <li><Link to="/pvc-mat">PVC Mat</Link></li>
                                <li><Link to="/clear-pvc">Clear PVC</Link></li>
                                
                            </ul>
                        </div>
                        </div>





                    </div>
                <div className="m-4 ">
                    <h3 className="text-3xl font-semibold ">Grass Accessories</h3>
                    <p className="text-lg " >Artificial grass, a putting green, or pet turf. Whatever you choose to call it, you must adorn it. These items made of synthetic grass are quite real. They significantly simplify the process of installing and caring for artificial turf. A motorized plate compactor is more of a need than an accessory when it comes to installation. Compress the soil and aggregate before unrolling the turf. It takes a lot of time and energy to do it by hand. Those lawn edges cannot be simply left naked. Edges of exposed turf will not last for very long. Before you know it, the entire installation is destroyed. You must begin edging. And Z&S Carpets are the only option for synthetic grass edging. Power makes everything better! even maintaining the synthetic grass To swiftly clear your turf of debris, use a motorized broom. Depending on how you intend to maintain the artificial grass, you might require additional accessories. This assortment of artificial grass accessories included turf rakes for all installations, odor-neutralizing spray for pet lawns, and cup flags for putting greens.</p>
                    <div>
                <div className="grid xl:grid-cols-3 xl:mx-6 lg:mx-4 md:mx-2 mx-0 gap-y-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-4">
                        <div className="card xl:w-80 lg:w-64 md:w-48 w-56 bg-white shadow-xl">
                            <figure><img src="https://i.ibb.co/XsrNs90/image-Q1lr-Yn-BIdzhu-N01vc-UFl-V1d0-OGNz-Zz09.webp"  /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Artificial Grass Joiner</h2>
                               
                               
                            </div>
                        </div>
                        <div className="card xl:w-80 lg:w-64 md:w-48 w-56  bg-white shadow-xl">
                            <figure><img src="https://i.ibb.co/x1gWB76/imageb-XJpa-EJza-Fd-Gamh3-REpza2-V4-Yjltdz09.webp"  /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Enfinix</h2>
                              
                               
                            </div>
                        </div>
                        
                        <div className="card xl:w-80 lg:w-64 md:w-48 w-56 bg-white shadow-xl">
                            <figure><img src="https://i.ibb.co/1MxtR08/image-UHFJMk9p-N0-JYMml-RRm-RFY2xu-VGN3dz09.jpg"  /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Favicol</h2>
                                
                            </div>
                        </div>
                    </div>

                </div>
                </div>
                

            </div>

            {/* <div className="mx-[22.55%] ">
                <div className=" border-2 border-zinc-300   ">
                    <div className="flex gap-1">
                        <button className="xl:p-24 xl:py-4 bg-blue-900 text-white    font-semibold ">Product Description</button>
                        <button className="xl:p-24 xl:py-4 bg-white text-black  border-zinc-300 border-x-2 border-b-2   font-semibold ">Data Sheet</button>
                    </div>

                    <div>
                        <ul className="flex flex-wrap gap-16 pl-10 py-4">
                            <li>
                                

                                <div className="card ">
                                <figure className="">
                                    <img
                                        src="https://i.ibb.co.com/vdV7Cyh/image-Rlgy-VGs0-Tn-Nt-Ynd-PRGVWSTlt-Rn-BYUT09-1.webp"
                                        
                                        className="" />
                                </figure>
                                <div className=" items-center text-center">
                                    <h2 className="text-sm ">Excellent Sports<br></br> Experience</h2>
                                    
                                    
                                </div>
                            </div>
                            </li>
                            <li>
                                

                                <div className="card ">
                                <figure className="">
                                    <img
                                        src="https://i.ibb.co.com/rpLFtK8/image-Q2h-KN0p-GSz-Vu-VWlzcn-NYc-EZOSn-Q5dz09-1.png"
                                        
                                        className="" />
                                </figure>
                                <div className=" items-center text-center">
                                    <h2 className="text-sm">Pet Friendly</h2>
                                    
                                    
                                </div>
                            </div>
                            </li>
                            <li>
                                

                                <div className="card ">
                                <figure className="">
                                    <img
                                        src="https://i.ibb.co.com/wzkBXkF/image-Kz-NSY0-RRUTh5bk-Rl-V2wx-Z3p-ISU52dz09.webp"
                                        
                                        className="" />
                                </figure>
                                <div className=" items-center text-center">
                                    <h2 className="text-sm">Eco Friendly</h2>
                                    
                                    
                                </div>
                            </div>
                            </li>
                            <li>

                                <div className="card ">
                                <figure className="">
                                    <img
                                        src="https://i.ibb.co.com/tcvMFSs/image-MEZYSXFHRz-J5-THFKUTZa-L1-BMSVFGUT09-1.png"
                                       
                                        className="" />
                                </figure>
                                <div className=" items-center text-center">
                                    <h2 className="text-sm ">UV Stability</h2>
                                    
                                    
                                </div>
                            </div>
                            </li>
                            <li>
                                <div className="card ">
                                    <figure className="">
                                        <img
                                            src="https://i.ibb.co.com/9v70Kfx/image-R1h-BYTJQL1c3-Zz-Y3emxu-V2pv-Mkxw-QT09-1.webp"
                                            
                                            className="" />
                                    </figure>
                                    <div className=" items-center text-center">
                                        <h2 className="text-sm ">Easy to Maintain</h2>


                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card ">
                                    <figure className="">
                                        <img
                                            src="https://i.ibb.co.com/ZYB6GBH/image-Zkxqcl-E3-Kz-Y5-UDZy-MTM5-Qk-FJWUd-NQT09-1.webp"
                                           
                                            className="" />
                                    </figure>
                                    <div className=" items-center text-center">
                                        <h2 className="text-sm ">Zero Water</h2>


                                    </div>
                                </div>

                            </li>


                        </ul>
                    </div>



                </div>
            </div> */}

            <div className="bg-white h-56 pt-20">
                <h3 className="text-center">WE ARE LOOKING FORWARD TO MEETING YOU
                </h3>
                <div className="flex justify-center items-center">
                    <Link to='/enquiry'><button className="btn bg-lime-400 hover:bg-blue-800 text-white rounded-none px-16"> Contact Now </button></Link>
                </div>

            </div>
            

        </div>
    );
};

export default Accessories;
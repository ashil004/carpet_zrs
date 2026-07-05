import { Link } from "react-router-dom";
import { MdOutlineDeck, MdOutlineGrass } from "react-icons/md";
import { PiVinylRecordDuotone, PiLockLaminatedFill } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import { BsPCircle } from "react-icons/bs";
import { GiBrickWall, GiFloorPolisher, GiRedCarpet, GiWoodBeam } from "react-icons/gi";
import { TbRubberStamp } from "react-icons/tb";
import { GiDominoTiles } from "react-icons/gi";

const Timberland = () => {
    return (
        <div>
             <div>
                <div className="-mt-24">
                    <div className="h-[60vh] mt-24 bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/GHDRy0n/banner-image-Nm9-Ud-Th-PZUJza-WZNTDZv-R0dj-ZXRwdz09-1.webp)', }}>
                        <div className="hero-overlay opacity-0"></div>
                        <div className="  text-white -mt-56 ml-12 ">
                            <h1 className="text-3xl font-bold" >Timberland Exotica Lvt Flooring</h1>

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
                    <h3 className="text-3xl font-semibold ">Timberland Exotica Lvt Flooring</h3>
                    <p className="text-lg" >Timberland Exotica Luxury Vinyl Planks include light-brown tones enhanced with darker brown and grey-blue graining for a trendy salvaged effect. This lovely 7x48 waterproof vinyl plank flooring with a wood-look is 100% waterproof, dent-, scratch-, and stain-resistant, and it comes with a lifetime residential warranty. This gray vinyl tile's novel pre-attached backing guarantees the utmost comfort underfoot, and its simple-to-install locking system makes it DIY-friendly. LVP Flooring is the simplest solution to make gorgeous, economical, low maintenance floors in the kitchen, living area, bathroom, basement, and elsewhere.</p>
                    <div>
                <div className="grid xl:grid-cols-3 xl:mx-6 lg:mx-4 md:mx-2 mx-0 gap-y-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-4">
                        <div className="card xl:w-80 lg:w-64 md:w-48 w-56  bg-white shadow-xl">
                            <figure><img src="https://i.ibb.co/NWwPs72/image-M0-FYTncycl-FGL0d-WK2-Fq-NFRKRz-JQUT09.jpg"  /></figure>
                            <div className="card-body">
                                <h2 className="card-title">991102</h2>
                                
                               
                            </div>
                        </div>
                        <div className="card xl:w-80 lg:w-64 md:w-48 w-56  bg-white shadow-xl">
                            <figure><img src="https://i.ibb.co/SmpNZJg/imaged-ERIU3d-Bck-Fk-VHh6a-DRPV1-Fx-Rjdrdz09.jpg"  /></figure>
                            <div className="card-body">
                                <h2 className="card-title">991901</h2>
                               
                               
                            </div>
                        </div>
                        <div className="card xl:w-80 lg:w-64 md:w-48 w-56  bg-white shadow-xl">
                            <figure><img src="https://i.ibb.co/xFJYRhr/imagec0-Ew-Zn-R2a0xw-VURQSFFv-K1-ZRej-J0-QT09.jpg"  /></figure>
                            <div className="card-body">
                                <h2 className="card-title">B-8</h2>
                               
                               
                            </div>
                        </div>
                        <div className="card xl:w-80 lg:w-64 md:w-48 w-56  bg-white shadow-xl">
                            <figure><img src="https://i.ibb.co/z7H4npN/image-ZGp-Ua-Ul-Lb-Vg5am9s-OHpqcl-Q1c0p3-QT09.jpg"  /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Classy-Dark</h2>
                                
                               
                            </div>
                        </div>
                        <div className="card xl:w-80 lg:w-64 md:w-48 w-56  bg-white shadow-xl">
                            <figure><img src="https://i.ibb.co/NyfLFKw/image-YWp-RM1hi-RXNMVWFPZj-Jka-TFSa-Upp-UT09.jpg"  /></figure>
                            <div className="card-body">
                                <h2 className="card-title">NB-2</h2>
                                
                               
                            </div>
                        </div>
                        <div className="card xl:w-80 lg:w-64 md:w-48 w-56  bg-white shadow-xl">
                            <figure><img src="https://i.ibb.co/W3YJTM0/imagedm5re-Vc1-K1-Ba-Yjlk-OVJmbito-UTJQZz09.jpg"  /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Vintage-Oak</h2>
                                
                               
                            </div>
                        </div>
                        <div className="card xl:w-80 lg:w-64 md:w-48 w-56  bg-white shadow-xl">
                            <figure><img src="https://i.ibb.co/b1q69wQ/image-SFZt-SVRQVUlj-OElp-Kz-Bq-Mi9-Ia0h-KQT09.jpg"  /></figure>
                            <div className="card-body">
                                <h2 className="card-title">White-oak</h2>
                                
                               
                            </div>
                        </div>
                        <div className="card xl:w-80 lg:w-64 md:w-48 w-56  bg-white shadow-xl">
                            <figure><img src="https://i.ibb.co/jJhncHX/image-Yj-RVdi9s-Yl-FPdis0-TFFKNUFWb-W1-KQT09.jpg"  /></figure>
                            <div className="card-body">
                                <h2 className="card-title">NB-4</h2>
                                
                               
                            </div>
                        </div>
                    </div>

                </div>
                </div>
                

            </div>


            <div className="mx-[22.55%] ">
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
                                        src="https://i.ibb.co.com/ZYB6GBH/image-Zkxqcl-E3-Kz-Y5-UDZy-MTM5-Qk-FJWUd-NQT09-1.webp"
                                        
                                        className="" />
                                </figure>
                                <div className=" items-center text-center">
                                    <h2 className="text-sm ">Water Proof</h2>
                                    
                                    
                                </div>
                            </div>
                            </li>
                            <li>
                                

                            <div className="card ">
                                    <figure className="">
                                        <img
                                            src="https://i.ibb.co.com/QPNm1NP/image-Wjdqd0-Y3-ZUVJRTll-Qm-Fm-TE1-MWVFydz09.png"
                                           
                                            className="" />
                                    </figure>
                                    <div className=" items-center text-center">
                                        <h2 className="text-sm ">Easy to Clean</h2>


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
                                        src="https://i.ibb.co.com/K96HnkN/image-Vzl-Ec-HVDe-XFm-MGdk-M252-T09-YVj-Fj-Zz09.webp"
                                       
                                        className="" />
                                </figure>
                                <div className=" items-center text-center">
                                    <h2 className="text-sm ">Anti-Slip</h2>
                                    
                                    
                                </div>
                            </div>
                            </li>
                            <li>
                                <div className="card ">
                                    <figure className="">
                                        <img
                                            src="https://i.ibb.co.com/D4m7JR3/image-Tm-Jr-SDFNVl-Uv-Zj-ZHMEgx-L3-Vy-WHExdz09.webp"
                                            
                                            className="" />
                                    </figure>
                                    <div className=" items-center text-center">
                                        <h2 className="text-sm ">Fire Retardant</h2>


                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card ">
                                    <figure className="">
                                        <img
                                            src="https://i.ibb.co.com/JzmMtS4/image-ZEZm-NFl-Nd01-RQnp-PVTBUVGt5-L1-M4-UT09.webp"
                                           
                                            className="" />
                                    </figure>
                                    <div className=" items-center text-center">
                                        <h2 className="text-sm ">Good Mute</h2>


                                    </div>
                                </div>

                            </li>


                        </ul>
                    </div>



                </div>
            </div>

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

export default Timberland;
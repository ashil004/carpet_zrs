import { Link } from "react-router-dom";


const Homel = () => {
    return (
        <div>
            <div className="text-center">
                <p className="text-sm text-blue-800 font-semibold">ZRS FLOORING COLLECTIONS</p>
                <h1 className="font-bold text-3xl ">Our Featured Product</h1>
            </div>
            <div className="grid xl:w-[100%] place-items-center  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4     xl:mt-12  lg:mt-12 md:mt-10 mt-4">

                <div className="card-one  ">
                    <div className="card card-compact w-80 h-80 bg-white shadow-xl ">
                        <figure><img src="https://i.ibb.co/sgTttRX/pexels-jonathan-petersson-399187.jpg" /></figure>
                        <div className="card-body   ">
                            <div className="flex items-center gap-4 justify-center">
                                <div>
                                    <h3 className="text-5xl font-bold text-gray-300 ">01</h3>
                                </div>
                                <div>
                                    <Link to="/grass"><h2 className="card-title">Artificial Grass</h2></Link>
                                    <p>ZRS Flooring Collections</p>
                                </div>

                            </div>
                            

                        </div>
                    </div>

                </div>
                <div className="card-tow">
                    <div className="card card-compact w-80 h-80 bg-white shadow-xl">
                        <figure><img src="https://i.ibb.co/pJ2Tgns/pexels-curtis-adams-11018290.jpg" /></figure>
                        <div className="card-body   ">
                            <div className="flex items-center gap-4 justify-center">
                                <div>
                                    <h3 className="text-5xl font-bold text-gray-300 ">02</h3>
                                </div>
                                <div>
                                    <Link to='/vinyl'><h2 className="card-title">Vinyl Flooring</h2></Link>
                                    <p>ZRS Flooring Collections</p>
                                </div>
                            </div>

                        </div>
                        
                    </div>

                </div>
                <div className="card-three">
                    <div className="card card-compact w-80 h-80 bg-white shadow-xl">
                        <figure><img src="https://i.ibb.co/t4DF156/pexels-max-vakhtbovycn-7031706.jpg" /></figure>
                        <div className="card-body   ">
                            <div className="flex items-center gap-4 justify-center">
                                <div>
                                    <h3 className="text-5xl font-bold text-gray-300 ">03</h3>
                                </div>
                                <div>
                                    <Link to='/gym'><h2 className="card-title">Gym Flooring</h2></Link>
                                    <p>ZRS Flooring Collections</p>
                                </div>
                            </div>

                        </div>
                        
                    </div>

                </div>
                <div className="card-four">
                    <div className="card card-compact w-80 h-80 bg-white shadow-xl">
                        <figure><img src="https://i.ibb.co/g41zvQ5/pexels-pixabay-275632.jpg" /></figure>
                        <div className="card-body   ">
                            <div className="flex items-center gap-4 justify-center">
                                <div>
                                    <h3 className="text-5xl font-bold text-gray-300 ">04</h3>
                                </div>
                                <div>
                                    <Link to='/deck'><h2 className="card-title">Deck Flooring</h2></Link>
                                    <p>ZRS Flooring Collections</p>
                                </div>
                            </div>

                        </div>
                        
                    </div>

                </div>
                <div className="card-five">
                    <div className="card card-compact w-80 h-80 bg-white shadow-xl">
                        <figure><img src="https://i.ibb.co/9v9BB0b/pexels-anna-tarazevich-5211557.jpg" /></figure>
                        <div className="card-body   ">
                            <div className="flex items-center gap-4 justify-center">
                                <div>
                                    <h3 className="text-5xl font-bold text-gray-300 ">05</h3>
                                </div>
                                <div>
                                    <Link to="/spc"><h2 className="card-title">SPC Eva Flooring</h2></Link>
                                    <p>ZRS Flooring Collections</p>
                                </div>
                            </div>

                        </div>
                        
                    </div>

                </div>
                <div className="card-six">
                    <div className="card card-compact w-80 h-80 bg-white shadow-xl">
                        <figure><img src="https://i.ibb.co/zRmQ6Wp/CF19-9032-Technical-v11-jpg-Tennessee-Oak-9032-1.jpg" /></figure>
                        <div className="card-body   ">
                            <div className="flex items-center gap-4 justify-center">
                                <div>
                                    <h3 className="text-5xl font-bold text-gray-300 ">06</h3>
                                </div>
                                <div>
                                    <Link to="/ltv"> <h2 className="card-title">Lvt Flooring</h2></Link>
                                    <p>ZRS Flooring Collections</p>
                                </div>
                            </div>

                        </div>
                        
                    </div>

                </div>
                <div className="card-seven">
                    <div className="card card-compact w-80 h-80 bg-white shadow-xl">
                        <figure><img src="https://i.ibb.co/DzSnrvg/pexels-max-vakhtbovycn-7031619.jpg" /></figure>
                        <div className="card-body   ">
                            <div className="flex items-center gap-4 justify-center">
                                <div>
                                    <h3 className="text-5xl font-bold text-gray-300 ">07</h3>
                                </div>
                                <div>
                                    <Link to="/laminate"><h2 className="card-title">Laminate Flooring</h2></Link>
                                    <p>ZRS Flooring Collections</p>
                                </div>
                            </div>

                        </div>
                       
                    </div>

                </div>
                <div className="card-eight">
                    <div className="card card-compact w-80 h-80 bg-white shadow-xl">
                        <figure><img src="https://i.ibb.co/pW1sNXs/pexels-curtis-adams-8031908.jpg" /></figure>
                        <div className="card-body   ">
                            <div className="flex items-center gap-4 justify-center">
                                <div>
                                    <h3 className="text-5xl font-bold text-gray-300 ">08</h3>
                                </div>
                                <div>
                                    <Link to='/carpet'><h2 className="card-title">Carpet Flooring</h2></Link>
                                    <p>ZRS Flooring Collections</p>
                                </div>
                            </div>

                        </div>
                        
                    </div>

                </div>
                <div className="card-nine">
                    <div className="card card-compact w-80 h-80 bg-white shadow-xl">
                        <figure><img src="https://i.ibb.co/VHgXvzg/pexels-fwstudio-164005.jpg" /></figure>
                        <div className="card-body   ">
                            <div className="flex items-center gap-4 justify-center">
                                <div>
                                    <h3 className="text-5xl font-bold text-gray-300 ">09</h3>
                                </div>
                                <div>
                                    <Link to="/wood"><h2 className="card-title">Wood Flooring</h2></Link>
                                    <p>ZRS Flooring Collections</p>
                                </div>
                            </div>

                        </div>
                        
                    </div>

                </div>
                <div className="card-ten">
                    <div className="card card-compact w-80 h-80 bg-white shadow-xl">
                        <figure><img src="https://i.ibb.co/dBVGmn3/pexels-allan-mas-5622359.jpg" /></figure>
                        <div className="card-body   ">
                            <div className="flex items-center gap-4 justify-center">
                                <div>
                                    <h3 className="text-5xl font-bold text-gray-300 ">10</h3>
                                </div>
                                <div>
                                    <Link to="/rubber"><h2 className="card-title">Rubber Flooring</h2></Link>
                                    <p>ZRS Flooring Collections</p>
                                </div>
                            </div>

                        </div>
                        
                    </div>

                </div>
                <div className="card-eleven">
                    <div className="card card-compact w-80 h-80 bg-white shadow-xl">
                        <figure><img src="https://i.ibb.co/T2WBHTg/pexels-brett-sayles-17756267.jpg" /></figure>
                        <div className="card-body   ">
                            <div className="flex items-center gap-4 justify-center">
                                <div>
                                    <h3 className="text-5xl font-bold text-gray-300 ">11</h3>
                                </div>
                                <div>
                                    <Link to="/wall"><h2 className="card-title">Wall Cladding</h2></Link>
                                    <p>ZRS Flooring Collections</p>
                                </div>
                            </div>

                        </div>
                        
                    </div>

                </div>
                <div className="card-tovel">
                    <div className="card card-compact w-80 h-80 bg-white shadow-xl">
                        <figure><img src="https://i.ibb.co/QKBVy4F/pexels-mark-1080719.jpg" /></figure>
                        <div className="card-body ">
                            <div className="flex items-center gap-4 justify-center">
                                <div>
                                    <h3 className="text-5xl font-bold text-gray-300 ">12</h3>
                                </div>
                                <div>
                                    <Link to="/pvc"><h2 className="card-title">PVC Flooring</h2></Link>
                                    <p>ZRS Flooring Collections</p>
                                </div>
                            </div>

                        </div>
                        
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Homel;

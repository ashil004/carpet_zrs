import { MdOutlineDesignServices } from "react-icons/md";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
const Acontentfour = () => {
    return (
        <div>
            <div>
             <div className="xl:ml-0 lg:ml-0 md:ml-0 ">
                <div className="h-[60vh] bg-cover bg-center  " style={{ backgroundImage: 'url(https://i.ibb.co/QpD8Jsg/background-image.webp)' }}>
                    <div className=" bg-opacity-60"></div>

                    <h3 className="text-3xl font-semibold text-center text-white pt-8 pr-6  border-b-2 mx-4">OUR PROCESS</h3>
                    <div className="xl:inline lg:inline hidden">
                    <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    
                    
                     
                       
                        centeredSlides={true}
                        pagination={{
                            clickable:false,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction:true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}

                    >

                        <SwiperSlide>
                            <div className="w-[350px] h-[200px]  mx-auto border/10 my-20 p-6 md:p-8 rounded-2xl shadow-lg ">
                                <div className="space-y-6 flex flex-col justify-center items-center">

                                    <div className="text-xl text-white">
                                        <MdOutlineDesignServices className="text-5xl " />

                                        <h2 className="text-2xl font-semibold">Design Process</h2>
                                        <p className="text-sm"> Our motivated staff explores diverse styles and ideas with zeal to generate designs that our clients desire.</p>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                        {/* card 2 */}

                        <SwiperSlide>
                            <div className="w-[350px] h-[200px]   mx-auto border/10 my-20 p-6 md:p-8 rounded-2xl shadow-lg ">
                                <div className="space-y-6 flex flex-col justify-center items-center">
                                    <div className="text-xl text-white">
                                        <LiaHandsHelpingSolid className="text-5xl " />

                                        <h2 className="text-2xl font-semibold">Supervision</h2>
                                        <p className="text-sm"> We will oversee each stage by our team of highly qualified installers. And you will be relieved to know that you have come to the right spot.</p>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                        {/* card 3 */}

                        <SwiperSlide>
                            <div className="w-[350px] h-[200px]    mx-auto border/10 my-20 p-6 md:p-8 rounded-2xl shadow-lg">
                                <div className="space-y-6 flex flex-col justify-center items-center">
                                    <div className="text-xl text-white">
                                        <FaHandHoldingDollar className="text-5xl " />

                                        <h2 className="text-2xl font-semibold">Budget Planning</h2>
                                        <p className="text-sm"> We will provide your desired flooring at a minimal cost and in an eco-friendly manner after measuring the area that has to be floored or carpeted.</p>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                        {/* card 4 */}
                        <SwiperSlide>
                            <div className="w-[350px] h-[200px]   mx-auto border/10 my-20 p-6 md:p-8 rounded-2xl shadow-lg">
                                <div className="space-y-6 flex flex-col justify-center items-center">
                                    <div className="text-xl text-white">
                                        <TbTruckDelivery className="text-5xl " />

                                        <h2 className="text-2xl font-semibold">Delivery And Installation</h2>
                                        <p className="text-sm"> Because we deliver and install the best, we aim to make your place spectacular by embracing the most recent flooring trends.</p>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                    <div className="xl:hidden lg:hidden md:inline inline">
                    <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    
                    
                     
                       
                        centeredSlides={true}
                        pagination={{
                            clickable:false,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction:true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}

                    >

                        <SwiperSlide>
                            <div className="w-[350px] h-[200px]  mx-auto border/10 my-20 p-6 md:p-8 rounded-2xl shadow-lg ">
                                <div className="space-y-6 flex flex-col justify-center items-center">

                                    <div className="text-xl text-white">
                                        <MdOutlineDesignServices className="text-5xl " />

                                        <h2 className="text-2xl font-semibold">Design Process</h2>
                                        <p className="text-sm"> Our motivated staff explores diverse styles and ideas with zeal to generate designs that our clients desire.</p>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                        {/* card 2 */}

                        <SwiperSlide>
                            <div className="w-[350px] h-[200px]   mx-auto border/10 my-20 p-6 md:p-8 rounded-2xl shadow-lg ">
                                <div className="space-y-6 flex flex-col justify-center items-center">
                                    <div className="text-xl text-white">
                                        <LiaHandsHelpingSolid className="text-5xl " />

                                        <h2 className="text-2xl font-semibold">Supervision</h2>
                                        <p className="text-sm"> We will oversee each stage by our team of highly qualified installers. And you will be relieved to know that you have come to the right spot.</p>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                        {/* card 3 */}

                        <SwiperSlide>
                            <div className="w-[350px] h-[200px]    mx-auto border/10 my-20 p-6 md:p-8 rounded-2xl shadow-lg">
                                <div className="space-y-6 flex flex-col justify-center items-center">
                                    <div className="text-xl text-white">
                                        <FaHandHoldingDollar className="text-5xl " />

                                        <h2 className="text-2xl font-semibold">Budget Planning</h2>
                                        <p className="text-sm"> We will provide your desired flooring at a minimal cost and in an eco-friendly manner after measuring the area that has to be floored or carpeted.</p>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                        {/* card 4 */}
                        <SwiperSlide>
                            <div className="w-[350px] h-[200px]   mx-auto border/10 my-20 p-6 md:p-8 rounded-2xl shadow-lg">
                                <div className="space-y-6 flex flex-col justify-center items-center">
                                    <div className="text-xl text-white">
                                        <TbTruckDelivery className="text-5xl " />

                                        <h2 className="text-2xl font-semibold">Delivery And Installation</h2>
                                        <p className="text-sm"> Because we deliver and install the best, we aim to make your place spectacular by embracing the most recent flooring trends.</p>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>

                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Acontentfour;
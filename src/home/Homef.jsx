import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Homef = () => {
    // // const [currentSlider, setCurrentSlider] = useState(0);
    // const sliders = [{ img: "https://i.ibb.co/NymdHs2/pexels-mikhail-nilov-6740754.jpg", title: "SPC Flooring", des: "SPC flooring offers swift installation through its click-style method, ideal for reducing labor costs in residential settings like villas in Abu Dhabi." }, { img: "https://i.ibb.co/DW42SPn/pexels-max-vakhtbovycn-7031618.jpg", title: "Laminate Flooring", des: "Transform your space with durable and elegant laminate flooring, expertly installed across the UAE for easy maintenance and lasting beauty." }, { img: "https://i.ibb.co/d7B61dC/pexels-joan-costa-17211673.jpg", title: "WPC Decking", des: "Experience unmatched elegance and durability with Z&S WPC outdoor decking, combining beauty and low maintenance for lasting appeal in various settings." }, { img: "https://i.ibb.co/G9CXWfF/pexels-mike-bird-106839.jpg", title: "Artificial Grass", des: "Z&S Artificial grass in Umm Al Quain offers durability, low maintenance, and water conservation, providing a lush green lawn with professional installation and lasting appeal." },
    // { img: "https://i.ibb.co/sH9Qz9W/pexels-anete-lusina-16513597.jpg", title: "Gym Flooring", des: "Z&S offers a variety of gym flooring options tailored to specific workouts for safety and functionality, ensuring the perfect choice for your home or health club gym." },
    // { img: "https://i.ibb.co/5kJGkrG/pexels-cottonbro-studio-7988828.jpg", title: "Sports Flooring", des: "Discover top-notch indoor and outdoor sports flooring solutions, expertly installed for durability and performance, with tailored advice from our experienced team for lasting satisfaction." },
    // { img: "https://i.ibb.co/55dPwnH/pexels-ron-lach-10120261.jpg", title: "Vinyl Flooring", des: "Z&S provides durable and pet-friendly vinyl flooring solutions in the UAE, with easy installation and minimal maintenance, exemplified in our recent project for a duplex apartment in Dubai." },
    // { img: "https://i.ibb.co/JFXm5dx/pexels-marko-stojkovic-17264275.jpg", title: "Wall Cladding", des: "Z&S wall cladding in Dubai offers customizable solutions for both internal and external walls, combining protection and aesthetics for enhanced durability and style." },
    // { img: "https://i.ibb.co/VWjSsNW/pexels-wilson-vitorino-2191606.jpg", title: "SPC Eva Flooring", des: "Z&S Carpets' SPC Eva flooring offers waterproof, elastic, and cushioned surfaces, ideal for cozy homes in RAK, providing both comfort and durability." },
    // ];
    // // const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
    // // const nextSlider = () => setCurrentSlider((currentSlider) => currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);
    // // const isSmallScreen = window.innerWidth <= 768;
    return (
        <div className="mt-12">
            <Swiper
            slidesPerView={1}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                modules={[Navigation,Pagination,Autoplay]}
            >
                <SwiperSlide>
                    <div className="xl:h-[80vh] lg:h-[70vh] md:h-[70vh] h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/NymdHs2/pexels-mikhail-nilov-6740754.jpg)' }}>
                        <div className=" bg-opacity-60"></div>
                        <div className="absolute xl:top-96 xl:left-4 lg:tp-96 lg:left-4 md:top-80 md:left-3 top-64 left-2 text-black ">
                            <div className="xl:w-72 xl:h-32 bg-white">
                                <div className='p-3 pt-6'>
                                    <h3 className='flex justify-start items-start font-semibold md:text-3xl text-[16px]'>SPC Flooring</h3>
                                    <h4 className='md:text-lg text-[12px] '>ZRS FLOORING COLLECTIONS</h4>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="xl:h-[80vh] lg:h-[70vh] md:h-[70vh] h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/DW42SPn/pexels-max-vakhtbovycn-7031618.jpg)' }}>
                        <div className=" bg-opacity-60"></div>
                        <div className="absolute xl:top-96 xl:left-4 lg:tp-96 lg:left-4 md:top-80 md:left-3 top-64 left-2 text-black ">
                            <div className="xl:w-72 xl:h-32 bg-white">
                                <div className='p-3 pt-6'>
                                    <h3 className='flex justify-start items-start font-semibold md:text-3xl text-[16px]'>Laminate Flooring</h3>
                                    <h4 className='md:text-lg text-[12px] '>ZRS FLOORING COLLECTIONS</h4>
                                </div>

                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="xl:h-[80vh] lg:h-[70vh] md:h-[70vh] h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/d7B61dC/pexels-joan-costa-17211673.jpg)' }}>
                        <div className=" bg-opacity-60"></div>
                        <div className="absolute xl:top-96 xl:left-4 lg:tp-96 lg:left-4 md:top-80 md:left-3 top-64 left-2 text-black ">
                            <div className="xl:w-72 xl:h-32 bg-white">
                                <div className='p-3 pt-6'>
                                    <h3 className='flex justify-start items-start font-semibold md:text-3xl text-[16px]'>WPC Decking</h3>
                                    <h4 className='md:text-lg text-[12px] '>ZRS FLOORING COLLECTIONS</h4>
                                </div>

                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="xl:h-[80vh] lg:h-[70vh] md:h-[70vh] h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/G9CXWfF/pexels-mike-bird-106839.jpg)' }}>
                        <div className=" bg-opacity-60"></div>
                        <div className="absolute xl:top-96 xl:left-4 lg:tp-96 lg:left-4 md:top-80 md:left-3 top-64 left-2 text-black ">
                            <div className="xl:w-72 xl:h-32 bg-white">
                                <div className='p-3 pt-6'>
                                    <h3 className='flex justify-start items-start font-semibold md:text-3xl text-[16px]'>Artificial Grass</h3>
                                    <h4 className='md:text-lg text-[12px] '>ZRS FLOORING COLLECTIONS</h4>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="xl:h-[80vh] lg:h-[70vh] md:h-[70vh] h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/sH9Qz9W/pexels-anete-lusina-16513597.jpg)' }}>
                        <div className=" bg-opacity-60"></div>
                        <div className="absolute xl:top-96 xl:left-4 lg:tp-96 lg:left-4 md:top-80 md:left-3 top-64 left-2 text-black ">
                            <div className="xl:w-72 xl:h-32 bg-white">
                                <div className='p-3 pt-6'>
                                    <h3 className='flex justify-start items-start font-semibold md:text-3xl text-[16px]'>Gym Flooring</h3>
                                    <h4 className='md:text-lg text-[12px] '>ZRS FLOORING COLLECTIONS</h4>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="xl:h-[80vh] lg:h-[70vh] md:h-[70vh] h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/5kJGkrG/pexels-cottonbro-studio-7988828.jpg)' }}>
                    <div className=" bg-opacity-60"></div>
                    <div className="absolute xl:top-96 xl:left-4 lg:tp-96 lg:left-4 md:top-80 md:left-3 top-64 left-2 text-black ">
                        <div className="xl:w-72 xl:h-32 bg-white">
                            <div className='p-3 pt-6'>
                                <h3 className='flex justify-start items-start font-semibold md:text-3xl text-[16px]'>Sports Flooring</h3>
                                <h4 className='md:text-lg text-[12px] '>ZRS FLOORING COLLECTIONS</h4>
                            </div>

                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide><div className="xl:h-[80vh] lg:h-[70vh] md:h-[70vh] h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/55dPwnH/pexels-ron-lach-10120261.jpg)' }}>
                    <div className=" bg-opacity-60"></div>
                    <div className="absolute xl:top-96 xl:left-4 lg:tp-96 lg:left-4 md:top-80 md:left-3 top-64 left-2 text-black ">
                        <div className="xl:w-72 xl:h-32 bg-white">
                            <div className='p-3 pt-6'>
                                <h3 className='flex justify-start items-start font-semibold md:text-3xl text-[16px]'>Vinyl Flooring</h3>
                                <h4 className='md:text-lg text-[12px] '>ZRS FLOORING COLLECTIONS</h4>
                            </div>

                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide><div className="xl:h-[80vh] lg:h-[70vh] md:h-[70vh] h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/JFXm5dx/pexels-marko-stojkovic-17264275.jpg)' }}>
                    <div className=" bg-opacity-60"></div>
                    <div className="absolute xl:top-96 xl:left-4 lg:tp-96 lg:left-4 md:top-80 md:left-3 top-64 left-2 text-black ">
                        <div className="xl:w-72 xl:h-32 bg-white">
                            <div className='p-3 pt-6'>
                                <h3 className='flex justify-start items-start font-semibold md:text-3xl text-[16px]'>Wall Cladding</h3>
                                <h4 className='md:text-lg text-[12px] '>ZRS FLOORING COLLECTIONS</h4>
                            </div>

                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="xl:h-[80vh] lg:h-[70vh] md:h-[70vh] h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/VWjSsNW/pexels-wilson-vitorino-2191606.jpg)' }}>
                        <div className=" bg-opacity-60"></div>
                        <div className="absolute xl:top-96 xl:left-4 lg:tp-96 lg:left-4 md:top-80 md:left-3 top-64 left-2 text-black ">
                            <div className="xl:w-72 xl:h-32 bg-white">
                                <div className='p-3 pt-6'>
                                    <h3 className='flex justify-start items-start font-semibold md:text-3xl text-[16px]'>SPC Eva Flooring</h3>
                                    <h4 className='md:text-lg text-[12px] '>ZRS FLOORING COLLECTIONS</h4>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>



    );
};

export default Homef;
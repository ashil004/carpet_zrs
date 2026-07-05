import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Homeh = () => {
    return (
        <div>
            <div className="xl:h-[70vh] lg:h-[70vh] md:h-[70vh] bg-fixed bg-cover " style={{ backgroundImage: 'url(https://i.ibb.co/BC9wFRq/testimonial-bg-image.webp)' }}>
                <div className=" bg-opacity-60"></div>
                <div className='xl:inline lg:inline hidden'>
                <Swiper
                    // install Swiper modules
                    slidesPerView={3}
                    spaceBetween={10}




                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    <SwiperSlide>
                    <div className='bg-white   xl:w-96 xl:h-96 md:w-96 md:h-96 lg:w-80 lg:h-80 w-96 h-96 mx-auto mt-12  '>
                            <div>
                                <div className="avatar xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[110px] lg:pt-8" >
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/q999f4n/pexels-danxavier-1239291.jpg" />
                                    </div>
                                </div>
                                <div className='xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[96px] lg:pt-2  '>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>


                            <div className='xl:pt-8 lg:pt-2 md:pt-8 pt-8 font-semibold  text-lg p-4'>

                                <p class="text-black ">
                                    "Customers appreciate the wide range of products and helpful customer service with strong return policies and educational resources​ "
                                </p>
                            </div>



                        </div>
                    </SwiperSlide>
                    <SwiperSlide> <div className='bg-white   xl:w-96 xl:h-96 md:w-96 md:h-96 lg:w-80 lg:h-80 w-96 h-96 mx-auto mt-12  '>
                            <div>
                                <div className="avatar xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[110px] lg:pt-8" >
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/Z1HG4tb/pexels-divinetechygirl-1181690.jpg" />
                                    </div>
                                </div>
                                <div className='xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[96px] lg:pt-2  '>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>


                            <div className='xl:pt-8 lg:pt-2 md:pt-8 pt-8 font-semibold  text-lg p-4'>

                                <p class="text-black ">
                                    "Thank you for reaching out! If you have any more questions, feel free to ask. Have a great day!"
                                </p>
                            </div>



                        </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                    <div className='bg-white  xl:w-96 xl:h-96 md:w-96 md:h-96 lg:w-80 lg:h-80 w-96 h-96 mx-auto mt-12  '>
                            <div>
                                <div className="avatar xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[110px] lg:pt-8" >
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/94fLqhP/pexels-olly-762020.jpg" />
                                    </div>
                                </div>
                                <div className='xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[96px] lg:pt-2 '>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>


                            <div className='xl:pt-8 lg:pt-2 md:pt-8 pt-8 font-semibold  text-lg p-4'>

                                <p class="text-black ">
                                    " Budget-friendly but often faces quality issues and inconsistent workmanship​ Top Consumer Reviews​."
                                </p>
                            </div>



                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white   xl:w-96 xl:h-96 md:w-96 md:h-96 lg:w-80 lg:h-80 w-96 h-96 mx-auto mt-12  '>
                            <div>
                                <div className="avatar xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[110px] lg:pt-8" >
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/J32RfvN/pexels-danxavier-1102341.jpg" />
                                    </div>
                                </div>
                                <div className='xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[96px] lg:pt-2  '>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>


                            <div className='xl:pt-8 lg:pt-2 md:pt-8 pt-8 font-semibold  text-lg p-4'>

                                <p class="text-black ">
                                    "Efficient service with convenient in-home consultations, but installation quality can vary​ Today's Homeowner​."
                                </p>
                            </div>



                        </div>
                    </SwiperSlide>
                    <SwiperSlide> <div className='bg-white   xl:w-96 xl:h-96 md:w-96 md:h-96 lg:w-80 lg:h-80 w-96 h-96 mx-auto mt-12  '>
                            <div>
                                <div className="avatar xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[110px] lg:pt-8" >
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/NxNy0TH/pexels-omarlopezphil-1182825.jpg" />
                                    </div>
                                </div>
                                <div className='xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[96px] lg:pt-2  '>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>


                            <div className='xl:pt-8 lg:pt-2 md:pt-8 pt-8 font-semibold  text-lg p-4'>

                                <p class="text-black ">
                                    "Wide product range and helpful customer service, with strong return policies​ Flooring America​."
                                </p>
                            </div>



                        </div>
                    </SwiperSlide>
                    <SwiperSlide> <div className='bg-white   xl:w-96 xl:h-96 md:w-96 md:h-96 lg:w-80 lg:h-80 w-96 h-96 mx-auto mt-12  '>
                            <div>
                                <div className="avatar xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[110px] lg:pt-8" >
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/L8Vz3C7/pexels-danxavier-1212984.jpg" />
                                    </div>
                                </div>
                                <div className='xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[96px] lg:pt-2 '>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>


                            <div className='xl:pt-8 lg:pt-2 md:pt-8 pt-8 font-semibold  text-lg p-4'>

                                <p class="text-black ">
                                    "High-quality craftsmanship and eco-friendly practices, well-regarded for premium hardwood​ Vermont Plank Flooring"
                                </p>
                            </div>



                        </div>
                    </SwiperSlide>
                    <SwiperSlide> <div className='bg-white  xl:w-96 xl:h-96 md:w-96 md:h-96 lg:w-80 lg:h-80 w-96 h-96 mx-auto mt-12  '>
                            <div>
                                <div className="avatar xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[110px] lg:pt-8" >
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/jr8pMvB/pexels-planeteelevene-2290856.jpg" />
                                    </div>
                                </div>
                                <div className='xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[96px] lg:pt-2 '>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>


                            <div className='xl:pt-8 lg:pt-2 md:pt-8 pt-8 font-semibold  text-lg p-4'>

                                <p class="text-black ">
                                    "Thank you for reaching out! If you have any more questions, feel free to ask. Have a great day!"
                                </p>
                            </div>



                        </div>
                    </SwiperSlide>
                    <SwiperSlide> <div className='bg-white  xl:w-96 xl:h-96 md:w-96 md:h-96 lg:w-80 lg:h-80 w-96 h-96 mx-auto mt-12  '>
                            <div>
                                <div className="avatar xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[110px] lg:pt-8" >
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/mNhkMxL/pexels-tkirkgoz-5329058.jpg" />
                                    </div>
                                </div>
                                <div className='xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[96px] lg:pt-2  '>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>


                            <div className='xl:pt-8 lg:pt-2 md:pt-8 pt-8 font-semibold  text-lg p-4'>

                                <p class="text-black ">
                                    "Thank you for reaching out! If you have any more questions, feel free to ask. Have a great day!"
                                </p>
                            </div>



                        </div>
                    </SwiperSlide>
                    ...
                </Swiper>
                </div>
                <div className='xl:hidden lg:hidden md:inline inline'>
                <Swiper
                    // install Swiper modules
                    slidesPerView={1}
                    spaceBetween={10}




                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    <SwiperSlide>
                    <div className='bg-white  xl:w-96 xl:h-96 md:w-96 md:h-96 lg:w-80 lg:h-80 w-96 h-96 mx-auto mt-12  '>
                            <div>
                                <div className="avatar xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[110px] lg:pt-8" >
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/q999f4n/pexels-danxavier-1239291.jpg" />
                                    </div>
                                </div>
                                <div className='xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[96px] lg:pt-2  '>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>


                            <div className='xl:pt-8 lg:pt-2 md:pt-8 pt-8 font-semibold  text-lg p-4'>

                                <p class="text-black ">
                                    "Customers appreciate the wide range of products and helpful customer service with strong return policies and educational resources​ "
                                </p>
                            </div>



                        </div>
                    </SwiperSlide>
                    <SwiperSlide> <div className='bg-white  xl:w-96 xl:h-96 md:w-96 md:h-96 lg:w-80 lg:h-80 w-96 h-96 mx-auto mt-12  '>
                            <div>
                                <div className="avatar xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[110px] lg:pt-8" >
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/Z1HG4tb/pexels-divinetechygirl-1181690.jpg" />
                                    </div>
                                </div>
                                <div className='xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[96px] lg:pt-2 '>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>


                            <div className='xl:pt-8 lg:pt-2 md:pt-8 pt-8 font-semibold  text-lg p-4'>

                                <p class="text-black ">
                                    "Thank you for reaching out! If you have any more questions, feel free to ask. Have a great day!"
                                </p>
                            </div>



                        </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                    <div className='bg-white  xl:w-96 xl:h-96 md:w-96 md:h-96 lg:w-80 lg:h-80 w-96 h-96  mx-auto mt-12  '>
                            <div>
                                <div className="avatar xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[110px] lg:pt-8" >
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/94fLqhP/pexels-olly-762020.jpg" />
                                    </div>
                                </div>
                                <div className='xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[96px] lg:pt-2 '>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>


                            <div className='xl:pt-8 lg:pt-2 md:pt-8 pt-8 font-semibold  text-lg p-4'>

                                <p class="text-black ">
                                    " Budget-friendly but often faces quality issues and inconsistent workmanship​ Top Consumer Reviews​."
                                </p>
                            </div>



                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white  xl:w-96 xl:h-96 md:w-96 md:h-96 lg:w-80 lg:h-80 w-96 h-96 mx-auto mt-12  '>
                            <div>
                                <div className="avatar xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[110px] lg:pt-8" >
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/J32RfvN/pexels-danxavier-1102341.jpg" />
                                    </div>
                                </div>
                                <div className='xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[96px] lg:pt-2 '>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>


                            <div className='xl:pt-8 lg:pt-2 md:pt-8 pt-8 font-semibold  text-lg p-4'>

                                <p class="text-black ">
                                    "Efficient service with convenient in-home consultations, but installation quality can vary​ Today's Homeowner​."
                                </p>
                            </div>



                        </div>
                    </SwiperSlide>
                    <SwiperSlide> <div className='bg-white  xl:w-96 xl:h-96 md:w-96 md:h-96 lg:w-80 lg:h-80 w-96 h-96 mx-auto mt-12  '>
                            <div>
                                <div className="xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[110px] lg:pt-8" >
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/NxNy0TH/pexels-omarlopezphil-1182825.jpg" />
                                    </div>
                                </div>
                                <div className='xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[96px] lg:pt-2  '>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>


                            <div className='xl:pt-8 lg:pt-2 md:pt-8 pt-8 font-semibold  text-lg p-4'>

                                <p class="text-black ">
                                    "Wide product range and helpful customer service, with strong return policies​ Flooring America​."
                                </p>
                            </div>



                        </div>
                    </SwiperSlide>
                    <SwiperSlide> <div className='bg-white  xl:w-96 xl:h-96 md:w-96 md:h-96 lg:w-80 lg:h-80 w-96 h-96 mx-auto mt-12  '>
                            <div>
                                <div className="avatar xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[110px] lg:pt-8" >
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/L8Vz3C7/pexels-danxavier-1212984.jpg" />
                                    </div>
                                </div>
                                <div className='xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[96px] lg:pt-2  '>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>


                            <div className='xl:pt-8 lg:pt-2 md:pt-8 pt-8 font-semibold  text-lg p-4'>

                                <p class="text-black ">
                                    "High-quality craftsmanship and eco-friendly practices, well-regarded for premium hardwood​ Vermont Plank Flooring"
                                </p>
                            </div>



                        </div>
                    </SwiperSlide>
                    <SwiperSlide> <div className='bg-white  xl:w-96 xl:h-96 md:w-96 md:h-96 lg:w-80 lg:h-80 w-96 h-96 mx-auto mt-12  '>
                            <div>
                                <div className="avatar xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[110px] lg:pt-8" >
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/jr8pMvB/pexels-planeteelevene-2290856.jpg" />
                                    </div>
                                </div>
                                <div className='xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[96px] lg:pt-2  '>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>


                            <div className='xl:pt-8 lg:pt-2 md:pt-8 pt-8 font-semibold  text-lg p-4'>

                                <p class="text-black ">
                                    "Thank you for reaching out! If you have any more questions, feel free to ask. Have a great day!"
                                </p>
                            </div>



                        </div>
                    </SwiperSlide>
                    <SwiperSlide> <div className='bg-white  xl:w-96 xl:h-96 md:w-96 md:h-96 lg:w-80 lg:h-80 w-96 h-96 mx-auto mt-12  '>
                            <div>
                                <div className="avatar xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[110px] lg:pt-8" >
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/mNhkMxL/pexels-tkirkgoz-5329058.jpg" />
                                    </div>
                                </div>
                                <div className='xl:pl-36 xl:pt-8 md:pl-36 md:pt-8 pl-36 pt-8 lg:pl-[96px] lg:pt-2  '>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>


                            <div className='xl:pt-8 lg:pt-2 md:pt-8 pt-8 font-semibold  text-lg p-4'>

                                <p class="text-black ">
                                    "Thank you for reaching out! If you have any more questions, feel free to ask. Have a great day!"
                                </p>
                            </div>



                        </div>
                    </SwiperSlide>
                    ...
                </Swiper>

                </div>
            </div>


        </div >
    );
};

export default Homeh;
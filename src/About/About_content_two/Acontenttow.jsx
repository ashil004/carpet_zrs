
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination , Autoplay,Navigation} from 'swiper/modules';

const Acontenttow = () => {
    return (
        <div>
            <div className=" xl:inline lg:inline hidden " >

             <Swiper
                    slidesPerView={5}
                    spaceBetween={10}




                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}

                >
                    <SwiperSlide>
                        <img src="https://i.ibb.co/Nn2YSK6/file.png"></img>

                    </SwiperSlide>

                    <SwiperSlide><img src="https://i.ibb.co/8zkX7vr/Screenshot-52-removebg-preview.png"></img></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/5rsR5NL/Screenshot-53-removebg-preview.png"></img></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/B4wPNKf/Screenshot-54-removebg-preview.png"></img></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/M7TbPj7/Screenshot-56-removebg-preview.png"></img></SwiperSlide>
                </Swiper>

                

            </div>
            <div className='md:inline inline xl:hidden lg:hidden'>
            <Swiper
                    slidesPerView={3}
                    spaceBetween={10}




                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}

                >
                    <SwiperSlide>
                        <img src="https://i.ibb.co/Nn2YSK6/file.png"></img>

                    </SwiperSlide>

                    <SwiperSlide><img src="https://i.ibb.co/8zkX7vr/Screenshot-52-removebg-preview.png"></img></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/5rsR5NL/Screenshot-53-removebg-preview.png"></img></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/B4wPNKf/Screenshot-54-removebg-preview.png"></img></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/M7TbPj7/Screenshot-56-removebg-preview.png"></img></SwiperSlide>
                </Swiper>

            </div>


        </div>
    );
};

export default Acontenttow;

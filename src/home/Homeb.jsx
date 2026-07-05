import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { Link } from "react-router-dom";

const Homeb = () => {
    return (
        <div>
            <div className="text-center">
                <p className="text-sm text-blue-800 font-semibold">ABOUT Z&S FLOORING</p>
                <h1 className="font-bold text-3xl ">We are the top rated flooring company in Dubai</h1>
            </div>
            <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col md:ml-[25%] justify-around mt-12 xl:ml-0 lg:ml-0  ">
                <div className="max-w-96 text-justify">
                    ZRS Carpets began as a tiny shop in 2010 and quickly developed to provide clients with easy access to their many stores throughout the UAE, offering them a comprehensive selection of flooring, including our in-house brand for the full retail market of the United Arab Emirates. We import high-quality products from India, Turkey, China, and Europe, all of which adhere to strict international quality standards. We have begun exporting our products to nations such as Oman, Saudi Arabia, Africa, and the rest of the GCC, in addition to the wholesale and retail verticals. As a result, we are now known all over the world!

                    <div className="mt-4">
                        <button className="btn  bg-lime-500  hover:bg-blue-800  text-white "><Link to='/about'>Read Me More</Link></button>
                    </div>

                </div>
                <div>
                    <img className="w-96 h-96" src="https://i.ibb.co.com/rKF4Y0yg/Screenshot-2025-01-28-173057.jpg" />
                    <button className="btn w-[150px] text-4xl   relative xl: -top-56  xl:left-[170px] left-12 lg:left-[135px]  md:left-[115px]  bg-lime-400  ml-[50px] md:ml-[4px]  lg:ml-[-50px] " onClick={() => document.getElementById('my_modal_3').showModal()}><MdOutlineSlowMotionVideo /></button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div className="mt-4  lg:w-[90%] mx-auto  relative pb-[56.25%] h-0  overflow-hidden m-2 xl:w-[99%]">


                                <iframe
                                    height={900}
                                    width={900}
                                    src="https://www.youtube.com/embed/bRdYYwMPce4?si=LVZrtmHSo2AbRKyr"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen

                                    className=" absolute  top-0 left-0 w-full h-full"
                                >

                                </iframe>


                                


                            </div>
                        </div>
                    </dialog>
                </div>

                <div>
                    <div className="max-w-96">
                        <h3 className="text-2xl font-semibold">Our Mission</h3>
                        <p className="text-justify">Our mission is to put the consumer first, and we endeavour to improve ourselves regularly. Nothing motivates us to keep inventing and researching new flooring technology more than the delight of our clients. Their needs and expectations have always been and will continue to be at the core of everything Z&S Carpets does.</p>
                    </div>
                    <div className="border-b-2 border-blue-800 mt-6 md:w-[25%]"></div>
                    <div className="max-w-96 mt-12">
                        <h3 className="text-2xl font-semibold">Our Value</h3>
                        <p className="text-justify">As one of the best flooring companies in Dubai passionately believe in meaningful innovation, and we aim to provide our clients with the most incredible products possible, using cutting-edge technology and the best value options. Integrity in leadership is demonstrated by innovation, excellence, and service.</p>
                    </div>

                </div>
            </div>

            <h3 className="text-center font-semibold text-2xl pt-6">13 Years of successful work
                in the market</h3>


        </div>
    );
};

export default Homeb;
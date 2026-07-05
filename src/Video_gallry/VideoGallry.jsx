import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { Link } from "react-router-dom";


const VideoGallry = () => {
    return (
        <div>
            <div className="">
                <h3 className="text-3xl font-semibold text-center ">
                    <p className="text-blue-800 text-lg">Video Gallery Zrs Flooring</p>
                    Video Gallery
                </h3>
                <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-around py-4">

                    <div>
                        <img className="xl:w-96 xl:h-[172px] lg:w-80 lg:h-[162px] md:w-64 md:h-[142px] w-56 h-[122px]" src="https://i.ibb.co.com/gFWWLKj/Screenshot-2.png" />
                        <button className="btn rounded-full  text-2xl text-white   relative xl:-top-[48%]  xl:left-[55%] lg:-top-[48%] lg:left-[55%] left-8 bottom-20  md:left-24 md:bottom-24  bg-lime-400  ml-[50px] md:ml-[4px]  lg:ml-[-50px] " onClick={() => document.getElementById('my_modal_4').showModal()}><MdOutlineSlowMotionVideo /></button>
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div className="mt-4  lg:w-[90%] mx-auto  relative pb-[56.25%] h-0  overflow-hidden m-2 xl:w-[99%]">




                                    <iframe width={900} height={900} src="https://www.youtube.com/embed/T1V2vjTUYJ8?si=anTLkLBZFp7Bhhpi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                                        className=" absolute  top-0 left-0 w-full h-full"
                                    ></iframe>


                                </div>
                            </div>
                        </dialog>
                    </div>
                  

                    <div>
                        <img className="xl:w-96 xl:h-[172px] lg:w-80 lg:h-[162px] md:w-64 md:h-[142px] w-56 h-[122px]" src="https://i.ibb.co.com/dmrV08c/Screenshot-3.png" />
                        <button className="btn rounded-full  text-2xl text-white   relative xl:-top-[48%]  xl:left-[55%] lg:-top-[48%] lg:left-[55%] left-8 bottom-20  md:left-24 md:bottom-24  bg-lime-400  ml-[50px] md:ml-[4px]  lg:ml-[-50px] " onClick={() => document.getElementById('my_modal_5').showModal()}><MdOutlineSlowMotionVideo /></button>
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div className="mt-4  lg:w-[90%] mx-auto  relative pb-[56.25%] h-0  overflow-hidden m-2 xl:w-[99%]">




                                    <iframe width={900} height={900} src="https://www.youtube.com/embed/XbQlWVJ_3PA?si=TEV6TlnUQcsoJti8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                                        className=" absolute  top-0 left-0 w-full h-full"
                                    ></iframe>


                                </div>
                            </div>
                        </dialog>
                    </div>
                   

                    <div>
                        <img className="xl:w-96 xl:h-[172px] lg:w-80 lg:h-[162px] md:w-64 md:h-[142px] w-56 h-[122px]" src="https://i.ibb.co.com/rRbQvNfq/Whats-App-Image-2025-01-29-at-17-01-26-c14ce9db.jpg"/>
                        <button className="btn rounded-full  text-2xl text-white   relative xl:-top-[48%]  xl:left-[55%] lg:-top-[48%] lg:left-[55%] left-8 bottom-20  md:left-24 md:bottom-24  bg-lime-400  ml-[50px] md:ml-[4px]  lg:ml-[-50px] " onClick={() => document.getElementById('my_modal_6').showModal()}><MdOutlineSlowMotionVideo /></button>
                        <dialog id="my_modal_6" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div className="mt-4  lg:w-[90%] mx-auto  relative pb-[56.25%] h-0  overflow-hidden m-2 xl:w-[99%]">


                                

                                <iframe width={900} height={900} src="https://www.youtube.com/embed/0n52IE8C_uY?si=5W5u36yza3jBZVvQ"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                                className=" absolute  top-0 left-0 w-full h-full"
                                ></iframe>


                            </div>
                        </div>
                    </dialog>
                    </div>


                    <div>
                        <img className="xl:w-96 xl:h-[172px] lg:w-80 lg:h-[162px] md:w-64 md:h-[142px] w-56 h-[122px]" src="https://i.ibb.co.com/s9NnZTCW/Whats-App-Image-2025-01-29-at-17-01-26-1d29eafb.jpg" />
                        <button className="btn rounded-full  text-2xl text-white   relative xl:-top-[48%]  xl:left-[55%] lg:-top-[48%] lg:left-[55%] left-8 bottom-20  md:left-24 md:bottom-24  bg-lime-400  ml-[50px] md:ml-[4px]  lg:ml-[-50px] " onClick={() => document.getElementById('my_modal_7').showModal()}><MdOutlineSlowMotionVideo /></button>
                        <dialog id="my_modal_7" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div className="mt-4  lg:w-[90%] mx-auto  relative pb-[56.25%] h-0  overflow-hidden m-2 xl:w-[99%]">




                                    <iframe width={900} height={900} src="https://www.youtube.com/embed/flOSRZ5f9D4?si=Ua6pvKTPR1Jv0A5C" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                                        className=" absolute  top-0 left-0 w-full h-full"
                                    ></iframe>


                                </div>
                            </div>
                        </dialog>
                    </div>
                  

                    <div>
                        <img className="xl:w-96 xl:h-[172px] lg:w-80 lg:h-[162px] md:w-64 md:h-[142px] w-56 h-[122px]" src="https://i.ibb.co.com/GQ4gvWK/Screenshot-6.png" />
                        <button className="btn rounded-full  text-2xl text-white   relative xl:-top-[48%]  xl:left-[55%] lg:-top-[48%] lg:left-[55%] left-8 bottom-20  md:left-24 md:bottom-24  bg-lime-400  ml-[50px] md:ml-[4px]  lg:ml-[-50px] " onClick={() => document.getElementById('my_modal_8').showModal()}><MdOutlineSlowMotionVideo /></button>
                        <dialog id="my_modal_8" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div className="mt-4  lg:w-[90%] mx-auto  relative pb-[56.25%] h-0  overflow-hidden m-2 xl:w-[99%]">




                                    <iframe width={900} height={900} src="https://www.youtube.com/embed/-ZvrH9OOifM?si=0PPAoens8vcVLHlL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                                        className=" absolute  top-0 left-0 w-full h-full"
                                    ></iframe>


                                </div>
                            </div>
                        </dialog>
                    </div>
                   

                    <div>
                        <img className="xl:w-96 xl:h-[172px] lg:w-80 lg:h-[162px] md:w-64 md:h-[142px] w-56 h-[122px]" src="https://i.ibb.co.com/zxsDHwv/Screenshot-10.png"/>
                        <button className="btn rounded-full  text-2xl text-white   relative xl:-top-[48%]  xl:left-[55%] lg:-top-[48%] lg:left-[55%] left-8 bottom-20  md:left-24 md:bottom-24  bg-lime-400  ml-[50px] md:ml-[4px]  lg:ml-[-50px] " onClick={() => document.getElementById('my_modal_9').showModal()}><MdOutlineSlowMotionVideo /></button>
                        <dialog id="my_modal_9" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div className="mt-4  lg:w-[90%] mx-auto  relative pb-[56.25%] h-0  overflow-hidden m-2 xl:w-[99%]">


                                

                                <iframe width={900} height={900} src="https://www.youtube.com/embed/bRdYYwMPce4?si=I_uDxySo0q83ixrJ"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                                className=" absolute  top-0 left-0 w-full h-full"
                                ></iframe>


                            </div>
                        </div>
                    </dialog>
                    </div>

                   
                    

                </div>


            </div>

        </div>
    );
};

export default VideoGallry;
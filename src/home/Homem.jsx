import swal from "sweetalert";

const Homem = () => {
    const fromholder = event => {
        event.preventDefault();
        const from = event.target;
        const massage = from.massage.value;
        const name = from.name.value;
        const email = from.email.value;
        const a = { massage, name, email };
        console.log(a);
        fetch('https://test.zrsflooring.com/massage', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(a)


        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    swal(" Massage Post Successfully ")

                }




            });

    }
    return (
        <div>
            <div>
                <div>
                    <h3 className="text-3xl font-semibold text-center">We are looking forward to meeting you</h3>
                    <h4 className="text-lg text-center py-2 text-[#4a4949]">Expect a callback within an hour.</h4>
                </div>
                <div className="xl:h-[80vh]  bg-cover bg-center xl:pt-32 xl:pl-12 lg:pl-32 md:p-14 mt-12 " >
                    {/* <div className=" bg-opacity-60"></div> */}
                    <div >
                        <div className="flex flex-col xl:flex-row lg:flex-col md:flex-col justify-between ">

                            <div className="text-black font-semibold  max-w-[800px] lg:mx-auto md:mx-auto mx-auto">
                                <div >
                                    <div >
                                        <div className="flex gap-1">
                                            <img className="w-24" src="https://i.ibb.co/vQJ29Hz/imagec05-Wdzk5d-UZl-Sm0y-OUY1ckd-WT0-Z1dz09-1.webp" />
                                            <img className="w-24" src="https://i.ibb.co/P61bbYg/image-V2-Yv-Syt-FL0-Z1-WGJWRz-Bhaz-VYMVdu-QT09.webp" />

                                            <img className="w-24" src="https://i.ibb.co/bBmh6Ks/imagec-Gp-IVz-Rk-N3-Q1ekxp-V2x-GUisw-TC9j-QT09.webp" />
                                        </div>


                                        <div className="flex gap-1 py-2" >
                                            <img className="w-24" src="https://i.ibb.co/fSMyyTK/imagee-Uk0-Rn-M2c25p-Ry8w-RUp5dkpt-Q1ovdz09.webp" />
                                            <img className="w-24" src="https://i.ibb.co/Nt9Gm0V/image-V0k0e-St-Ld-Xpz-RTd-LWXp-DQn-Vq-UVBXUT09.webp" />
                                            <img className="w-24" src="https://i.ibb.co/0jFd9cw/image-ODNLNTIra-DF5-VWd-Ha-Ugw-YU4y-MGh-PQT09.webp" />
                                        </div>




                                    </div>
                                    <div>
                                        <ul className="xl:flex xl:gap-1 xl:text-3xl lg:flex lg:gap-1 lg:text-3xl md:flex md:gap-1 md:text-3xl text-[14px] flex gap-1 ">
                                            <li>UNITED ARAB EMIRATES|</li>
                                            <li> SAUDI ARABIA |</li>
                                        </ul>
                                        <ul className="xl:flex xl:gap-1 xl:text-3xl lg:flex lg:gap-1 lg:text-3xl md:flex md:gap-1 md:text-3xl text-[14px] flex gap-1">
                                            <li>QATAR |</li>
                                            <li> OMAN |</li>
                                            <li> KUWAIT |</li>
                                            <li>  BAHRAIN |</li>
                                        </ul>


                                    </div>
                                    <div className="border-b-2 border-blue-800 pt-12"></div>
                                    <div className="pt-12  ">
                                        <div className="xl:flex xl:gap-1 xl:text-3xl lg:flex lg:gap-1 lg:text-3xl md:flex md:gap-1 md:text-3xl text-[14px] flex gap-1 ">
                                            <h3 className="hover:text-lime-400">+971529487383</h3> /
                                            <h3 className="hover:text-lime-400">hfxzrbest@gmail.com,</h3>
                                        </div>
                                        <div className="xl:text-3xl lg:text-3xl md:text-3xl text-[14px] ">
                                            <h3>Al Safiya-Bldg , Plot NO.1974-0 , Hor al Anz,Dubai-UAE</h3>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="  xl:w-[45%] lg:w-[85%] md:w-[98%] mx-auto ">
                                <form onSubmit={fromholder} >
                                    <div className="border-black xl:mx-0 lg:mx-0 md:mx-0 mx-8">
                                        <label className="label">
                                            <span className="label-text text-black font-semibold">Message*</span>
                                        </label>
                                        <input type="text" name="massage" className=" input border-black border-2  xl:w-[650px] xl:h-24 lg:w-[650px] lg:h-24 md:w-[650px] md:h-24 w-80 xl:pl-0 lg:pl-0 md:pl-0 text-black  dark:bg-white  " required />
                                    </div>
                                    <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row items-center  xl:gap-[132px] lg:gap-[132px] md:gap-[132px]">
                                        <div>
                                            <label className="label">
                                                <span className="label-text text-black font-semibold">Name*</span>
                                            </label>
                                            <input type="text" name="name" className="border-black border-2  input xl:w-64 lg:w-64 md:w-64 w-80  text-black dark:bg-white"
                                            />

                                        </div>
                                        <div>
                                            <label className="label">
                                                <span className="label-text text-black font-semibold">Email*</span>
                                            </label>
                                            <input type="Email" name="email" className="border-black border-2  input xl:w-64 lg:w-64 md:w-64 w-80 text-black dark:bg-white "
                                            />

                                        </div>
                                    </div>
                                    <div className="xl:pt-6 xl:pl-32 lg:pt-6 lg:pl-32 md:pt-6 md:pl-32">
                                        <button className="xl:px-36 xl:py-2 lg:px-36 lg:py-2  md:px-36 md:py-2 px-12 xl:ml-0 lg:ml-0 md:ml-0 ml-20 m-4 btn bg-blue-800  hover:bg-blue-800  text-lime-400 hover:border-lime-500 border-2">SUBMIT MESSAGE</button>
                                    </div>

                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* next thing  */}

            {/* </div> */}


        </div >
    );
};

export default Homem;

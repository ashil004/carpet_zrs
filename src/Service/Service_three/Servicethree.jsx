import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const Servicethree = () => {
    return (
        <div>

            <div className="xl:h-[80vh] bg-fixed bg-cover bg-center xl:p-32 lg:p-32 md:p-32" style={{ backgroundImage: 'url(https://i.ibb.co/5Ls3VkZ/pexels-aphiwat-chuangchoem-359989.jpg)' }}>

                <div className="flex flex-col  xl:flex-row lg:flex-row md:flex-col xl:gap-24 lg:gap-20 md:gap-12">
                    <div className="flex items-center gap-3">

                        <div className="text-lime-500 text-6xl">
                            <MdLocationPin />

                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold  text-white">UAE</h3>
                            <p className="text-lime-500 text-xl">Delivery & Installation</p>
                        </div>
                    </div>

                    <div >
                        <p className="text-lg font-semibold text-white text-justify">AE Experts Provide Fast Installation Services and Give Quick Response According to the Customers Needs</p>
                    </div>

                    <div>
                        <Link to="/enquiry"><button className="btn px-16 py-2 bg-blue-800  hover:bg-blue-800  text-white hover:border-lime-500 border-2">Free Consultation</button></Link>
                    </div>
                </div>
                <div className="border-b-2 border-white pt-16"></div>

                <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col xl:gap-24 lg:gap-20 md:gap-12 pt-16 ">
                    <div className="flex items-center gap-3">

                        <div className="text-lime-500 text-6xl">
                            <MdLocationPin />

                        </div>
                        <div >
                            <h3 className="text-2xl font-semibold  text-white ">Saudi Arabira, Qatar,Oman, Bahrain, Kuwait</h3>
                            <p className="text-lime-500 text-xl">Delivery & Installation</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-lg font-semibold text-white text-justify">AE Experts Provide Fast Installation Services and Give Quick Response According to the Customers Needs</p>
                    </div>

                    <div>
                        <Link to="/enquiry"><button className="btn px-16 py-2 bg-blue-800  hover:bg-blue-800  text-white hover:border-lime-500 border-2">Free Consultation</button></Link>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Servicethree;
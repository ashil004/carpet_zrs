import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
const Homei = () => {
    return (
        <div className="fixed bottom-32 right-2 flex flex-col gap-2 z-10 ">
            <Link to='https://api.whatsapp.com/send?phone=971559004768' >

                <button className="btn text-white rounded-none hover:text-black text-xl font-semibold  bg-lime-400 hover:bg-blue-800  z-[1]"><BsWhatsapp></BsWhatsapp></button>


            </Link>
            <Link to="/free-sample" >
                <button className="btn rounded-none text-white hover:text-black text-xl font-semibold  bg-blue-800 hover:bg-blue-300 z-[1] "><IoMdCall /></button>
            </Link>
            <Link to="/enquiry" >
                <button className="btn text-black-500 rounded-none  hover:text-white text-xl font-semibold   bg-white hover:bg-black z-[1] "><CiMail /></button>
            </Link>
        </div>
    );
};

export default Homei;
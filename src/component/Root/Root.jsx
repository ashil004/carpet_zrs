import { Outlet } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Navbarthree from "../../Navbar/Navbarthree";




const Root = () => {
    return (
        <div className=" overflow-hidden"  >
            <div className="bg-blue-900">
            <Marquee pauseOnHover={true}>
                <p className="text-white p-2">
                    Largest Flooring Stock Keepers and No 1 Flooring Suppliers
                </p>
                
                </Marquee>
    
            </div>
            <Navbar></Navbar>
            

            <div className="bg-white text-black w-auto h-16 -mt-28 font-semibold" >
                <Navbarthree></Navbarthree>

                </div>
        
               <Outlet></Outlet>
            
           
            <Footer></Footer>
            
        </div>
    );
};

export default Root;
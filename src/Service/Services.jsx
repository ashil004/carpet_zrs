import Servicebanner from "./Service_banner/Servicebanner";
import Servicethree from "./Service_three/Servicethree";
import Servicesone from "./Services_one/Servicesone";
import Homei from '../home/Homei';

const Services = () => {
    return (
        <div>
            <div>
                <Servicebanner></Servicebanner>
            </div>
            <div className="mt-12">
                <Servicesone></Servicesone>
            </div>
            <div className="mt-12">
            <Homei></Homei>

            </div>
            <div className="mt-12">
                <Servicethree></Servicethree>

            </div>
            
        </div>
    );
};

export default Services;
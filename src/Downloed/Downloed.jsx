import Downlodebanner from "./Downloed_Banner/Downlodebanner";
import Downloedcontentow from "./Downloed_content_two/Downloedcontentow";
import Homei from '../home/Homei';
import Contactcontenthree from "../Contact/Contact_content_three/Contactcontenthree";

const Downloed = () => {
    return (
        <div>
            <div>
                <Downlodebanner></Downlodebanner>
            </div>
            <div className="mt-12">
                <Downloedcontentow></Downloedcontentow>
            </div>

            <div className="mt-12 mx-8">
                <Contactcontenthree></Contactcontenthree>

            </div>
            <div className="mt-12">
            <Homei></Homei>

            </div>
            
        </div>
    );
};

export default Downloed;
import Contactbanner from "./Contact_banner/Contactbanner";
import Contactcontentfour from "./Contact_content_four/Contactcontentfour";
import Contactcontenthree from "./Contact_content_three/Contactcontenthree";
import Contactcontentow from "./Contact_content_tow/Contactcontentow";
import Homei from '../home/Homei';
import Contactfollow from "./Comtanc_follow_option/Contactfollow";

const Contact = () => {
    return (
        <div>
            <div>
            <Contactbanner></Contactbanner>
            </div>
            <div className="mt-12">
                <Contactcontentow></Contactcontentow>
            </div>
            {/* <div className="mt-12">
                <Contactfollow></Contactfollow>

            </div> */}
            <div className="mt-12">
            <Homei></Homei>

            </div>
            <div className="mt-12">
                <Contactcontenthree></Contactcontenthree>

            </div>
            <div className="mt-12" >
                <Contactcontentfour></Contactcontentfour>

            </div>
        </div>
    );
};

export default Contact;
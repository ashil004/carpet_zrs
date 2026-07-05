import Workbanner from "./Work_Banner/Workbanner";
import Workcard from "./workcard/Workcard";
import Homei from '../home/Homei';

const Ourworks = () => {
    return (
        <div>
            <div>
            <Workbanner></Workbanner>
            </div>
            <div className="mt-12 ">
                <Workcard></Workcard>

            </div>
            <div className="mt-12">
            <Homei></Homei>

            </div>
        </div>
    );
};

export default Ourworks;
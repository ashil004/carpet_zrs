import Productbanner from "./Productbanner";
import Productcard from "./Productcard";
import Homei from '../home/Homei';

const Product = () => {
    return (
        <div>
           <div>
            <Productbanner></Productbanner>
           </div>
           <div className="mt-12">
            <Homei></Homei>

            </div>
           <div className="mt-12 w-[90%] mx-auto">
            <Productcard></Productcard>

           </div>
        </div>
    );
};

export default Product;
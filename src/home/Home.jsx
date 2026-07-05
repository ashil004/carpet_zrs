import VideoGallry from "../Video_gallry/VideoGallry";
import Appbanner from "./Appbanner";
import Homea from "./Homea";
import Homeb from "./Homeb";
import Homec from "./Homec";
import Homed from "./Homed";
import Homee from "./Homee";
import Homef from "./Homef";
import Homeg from "./Homeg";
import Homeh from "./Homeh";
import Homei from "./Homei";
import Homej from "./Homej";
import Homek from "./Homek";
import Homel from "./Homel";
import Homem from "./Homem";
import Homen from "./Homen";


const Home = () => {
    return (
        <div className="mt-24">
            <div>
                <Appbanner></Appbanner>
            </div>
            <div className="mt-12 xl:mx-32 xl:mr-24 lg:mx-32 lg:mr-24 md:mx-32 md:mr-24 mx-0 mr-0 ">
                <Homea></Homea>

            </div>
            <div className="mt-12 xl:mx-10 xl:ml-12 md:ml-5 mx-5">
                <Homel></Homel>
            </div>

            <div className="mt-12 ">
                <Homei></Homei>

            </div>
            <div className="fixed bottom-2 left-2  ">
                <Homen></Homen>
            </div>
            <div className="mt-12 ">
                <Homeb></Homeb>

            </div>


            <div className="mt-12 ">
                <Homec></Homec>

            </div>
            <div className="mt-12  ">
                <VideoGallry></VideoGallry>
                

            </div>

            <div className="mt-12 ">
                <Homed></Homed>

            </div>
            <div className="mt-12 ">
                <Homee></Homee>

            </div>
            <div className="mt-12 ">
                <Homef></Homef>

            </div>
            <div className="mt-12 ">
                <Homeg></Homeg>

            </div>
            <div className="mt-12 ">
                <Homeh></Homeh>

            </div>
            <div className="mt-12 ">
                <Homej></Homej>

            </div>
            <div className="mt-12 " >
                <Homem></Homem>

            </div>
            <div className="mt-12 ">
                <Homek></Homek>

            </div>
        </div>

    );
};

export default Home;
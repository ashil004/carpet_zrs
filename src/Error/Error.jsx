import Lottie from 'lottie-react';
import error from './error-grass.json'

const Error = () => {
    return (
        <div>
            <div>
                <Lottie animationData={error} className='w-[90%] h-[90%] ml-[6.5%] mt-[25%] xl:w-[50.5%] xl:h-[50.5%] xl:ml-[26%] xl:mt-[0%] lg:w-[50%] lg:h-[50%] lg:ml-[26%] lg:mt-[20%] md:w-[51%] md:h-[51%] md:ml-[26%] md:mt-[20%]'></Lottie>
            </div>
        </div>
    );
};

export default Error;
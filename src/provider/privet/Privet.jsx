import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider';
import Lottie from 'lottie-react';
import loa from './loading.json'
const Privet = ({children}) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location .pathname);
    if(loading) {
        return <div className='w-[90%] h-[90%] ml-[6.5%] mt-[25%] xl:w-[50.5%] xl:h-[50.5%] xl:ml-[26%] xl:mt-[0%] lg:w-[50%] lg:h-[50%] lg:ml-[26%] lg:mt-[20%] md:w-[51%] md:h-[51%] md:ml-[26%] md:mt-[20%]'><Lottie animationData={loa}></Lottie></div>;
    }
    if(user){
        return children ;
    }
    return <Navigate to = "/login" state={{from:location}}  replace  />
};

export default Privet;
import React from 'react';
import Abanner from './About_Banner/Abanner';
import Acontent from './About_content/Acontent';
import Acontenttow from './About_content_two/Acontenttow';
import Aboutthree from './About_content_three/Aboutthree';
import Acontentfour from './About_content_four/Acontentfour';
import Acontentfive from './About_content_five/Acontentfive';
import Acontentsix from './About_content_six/Acontentsix';
import Homei from '../home/Homei';

const About = () => {
    return (
        <div className='-mt-24'>
            <div>
                <Abanner></Abanner>
            </div>
            <div>
                <Acontent></Acontent>
            </div>
            <div className="mt-12">
            <Homei></Homei>

            </div>

            <div className='mt-12 xl:mx-32 xl:mr-24 lg:mx-32 lg:mr-24 md:mx-32 md:mr-24 mx-0 mr-0  border-b border-blue-400'>
                <Acontenttow></Acontenttow>
            </div>
            <div className='mt-12'>
                <Aboutthree></Aboutthree>
            </div>
            <div className='mt-16'>
                <Acontentfour></Acontentfour>
            </div>
            <div className='mt-16'>
                <Acontentfive></Acontentfive>

            </div>
            <div className='mt-16 bg-white text-black '>
                <Acontentsix></Acontentsix>
            </div>
            <div className='mt-16  border-b border-blue-800 '>

            </div>
            
        </div>
    );
};

export default About;
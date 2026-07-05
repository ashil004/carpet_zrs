import React from 'react';
import Blogbanner from './Blogbanner';
import Blogcard from './Blogcard';
import Homei from '../home/Homei';
const Blogs = () => {
    return (
        <div>
            <div>
                <Blogbanner>

                </Blogbanner>
            </div>
            <div className="mt-12">
            <Homei></Homei>

            </div>
            <div className='mt-12 xl:ml-20 lg:ml-2 md:ml-16'>
                <Blogcard></Blogcard>
            </div>
         
        </div>
    );
};

export default Blogs;
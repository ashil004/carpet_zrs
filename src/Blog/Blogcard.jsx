import { useEffect, useState } from "react";
import BlogViews from "./BlogViews";


const Blogcard = () => {
    const [blogs , SetBlogs] = useState([]);
    useEffect(()=>{
        fetch('https://test.zrsflooring.com/blogs')
        .then(res => res.json())
        .then(data =>SetBlogs(data));

    },[]);
    return (
        <div>
            <div className=" w-[95%] xl:w-[90%] lg:w-[90%]  mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 xl:gap-8 lg:gap-6 md:gap-10 gap-2 xl:ml-6 lg:ml-10 md:-ml-2">
                {
                blogs.map(blog =><BlogViews key={blog._id} blog={blog}></BlogViews>)
                }
            </div>
            
        </div>
    );
};

export default Blogcard;
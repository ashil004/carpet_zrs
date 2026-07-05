

const Blogbanner = () => {
    return (
        <div>
             <div className="mt-0">
                <div className="h-[60vh] bg-cover " style={{ backgroundImage: 'url(https://i.ibb.co/QXrmfP8/pexels-pixabay-47319.jpg)', }}>
                    <div className="hero-overlay "></div>
                    <div className="  text-white -mt-56 ml-12 ">
                        <h1 className="text-3xl font-bold" >Our Blog</h1>
                        <p>Read about the latest in the industry</p>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Blogbanner;
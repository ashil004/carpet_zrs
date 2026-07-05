
const BlogViews = ({ blog }) => {
    const { pic, date, title,description, } = blog;
    return (
        <div>
         
            <div className="card  lg:card-side bg-white shadow-xl">
                <figure><img className="xl:w-96 xl:h-96 lg:w-96 lg:h-96 md:w-[600px] md:h-96 w-96 h-96" src={pic}  /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h3 className="font-semibold text-lg gap-2 flex items-center ">{date}</h3>
                    <p className="xl:max-w-6xl lg:max-w-5xl text-justify">{description}</p>
                    
                </div>
            </div>

        </div>
    );
};

export default BlogViews;
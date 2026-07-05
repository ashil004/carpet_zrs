import { Link } from "react-router-dom";

const Carpetdetils = ({ acarpet }) => {
    const { pic, title,desception } = acarpet;
    return (
        <div className="xl:w-[1170px] mx-auto">
           <div className="card lg:card-compact  bg-white shadow-xl">
                <figure>
                    <img className="xl:w-full  lg:w-full  md:w-[600px] md:h-96 w-96 h-96" src={pic}  />
                    </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="xl:max-w-6xl lg:max-w-5xl">{desception}</p>
                    {/* <div className="card-actions justify-end">
                        <Link to="/enquiry"><button className="btn bg-blue-800 hover:bg-lime-400 text-white">Buy Now</button></Link>

                    </div> */}
                </div>
            </div>

        </div>
    );
};

export default Carpetdetils;
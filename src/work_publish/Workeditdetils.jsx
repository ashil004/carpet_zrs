import { BsCalendarDate } from "react-icons/bs";
import { GiExplosiveMaterials } from "react-icons/gi";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";


const Workeditdetils = ({ data,hendelDelete }) => {
    const { photo, title, subtitle, description,date,location,material,_id } = data;
    return (
        <div>
             <div className="card lg:card-side bg-white shadow-xl">
                <figure><img className="xl:w-96 xl:h-96 lg:w-96 lg:h-96 md:w-[600px] md:h-96 w-96 h-96" src={photo}  /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h3 className="xl:text-semibold xl:text-xl">{subtitle}</h3>
                    <div className="xl:flex xl:items-center  xl:gap-4" >
                        <h3 className="text-2xl font-bold flex items-center gap-2" ><BsCalendarDate /><span className="text-lg font-semibold">{date}</span></h3>
                        <h3 className="text-2xl font-bold flex items-center gap-2 xl:pl-4 " ><SlLocationPin /><span className="text-lg font-semibold">{location}</span></h3>

                    </div>
                    <h3 className="font-semibold text-lg gap-2 flex items-center "><GiExplosiveMaterials/><span>{material}</span></h3>
                    <div className="xl:max-w-6xl lg:max-w-5xl">
                    <p>{description}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/admin/our-work-publish`}><button className="btn btn-outline btn-accent">Edit</button></Link>
                        <button onClick={()=>hendelDelete(_id)} className="btn btn-outline btn-warning">Delate</button>
                    </div>

                    
                </div>
            </div>
            
        </div>
    );
};

export default Workeditdetils;
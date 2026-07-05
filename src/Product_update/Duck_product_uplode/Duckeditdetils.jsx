import React from 'react';
import { Link } from 'react-router-dom';

const Duckeditdetils = ({data , hendelDelete}) => {
    const { pic, title, desception ,_id} = data;
    return (
        <div>
             <div className="card lg:card-side bg-white shadow-xl">
                <figure><img className="xl:w-96 xl:h-96 lg:w-96 lg:h-96 md:w-[600px] md:h-96 w-96 h-96" src={pic}  /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="xl:max-w-6xl lg:max-w-5xl">{desception}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/admin/deck-upload-product`}><button className="btn btn-outline btn-accent">Edit</button></Link>
                        <button onClick={()=>hendelDelete(_id)} className="btn btn-outline btn-warning">Delate</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Duckeditdetils;
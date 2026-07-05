

const Sampledetils = ({ sample ,hendelDelete }) => {
    const { name, number, email, product,_id } = sample;
    return (
        <div>
            <div className="card card-side xl:bg-white lg:bg-white shadow-xl xl:w-[500px] lg:w-[400px] md:w-[350px] w-80 h-56">
                <div className="card-body">
                <div className="card-actions justify-end">
                        <button onClick={()=>hendelDelete(_id)} className="btn btn-square btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <h2 className="card-title">{name}</h2>
                    <p>Phone:{number}</p>
                    <p>Email:{email}</p>
                    <p>product:{product}</p>
                    
                </div>
                
            </div>


        </div>
    );
};

export default Sampledetils;


const Usermassagedetils = ({ usermassag ,hendelDelete }) => {
    const { massage, name, email,_id } = usermassag;
    return (
        <div>
            <div className="card w-72 xl:w-[98%] lg:w-[98%] md:w-96   xl:mx-[120px] lg:mx-2 md:mx-40 mx-[10px] bg-white shadow-xl">
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <button onClick={()=>hendelDelete(_id)} className="btn btn-square btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <h2 className="card-title">{name}</h2>
                    <h3>Email:{email}</h3>
                    <p>{massage}.</p>
                </div>
            </div>

        </div>
    );
};

export default Usermassagedetils;


const Logoeditviews = ({ logo ,hendelDelete}) => {
    const { pic , _id } = logo
    return (
        <div className='xl:ml-[550px] xl:mt-[230px] lg:ml-[300px] lg:mt-[180px] md:ml-[190px] mt-[150px] ml-3 '>
            <div className='  bg-red-400 md:w-80 w-72 h-32 '>
                <img className='' src={pic} />
                <div className='flex justify-end'><button onClick={()=>hendelDelete(_id)} className='btn '>Remove</button></div>
            </div>
        </div>
    );
};

export default Logoeditviews;
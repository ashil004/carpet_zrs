import swal from "sweetalert";


const Contactcontenthree = () => {
    const fromholder = event =>{
        event.preventDefault();
        const from = event.target;
        const massage =from.massage.value;
        const name = from.name.value;
        const email = from.email.value;
        const data = {massage,name,email};
        console.log(data);
        
        fetch('https://test.zrsflooring.com/massage',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
            

        })
        .then((res) => res.json())
        .then((data) =>{
            console.log(data);
            if(data.insertedId){
                swal(" Massage  Successfully ")
                
            }

           

        });

    }
    return (
        <div>
            <div className="xl:h-[80vh] bg-fixed bg-cover bg-center xl:p-32 lg:p-32 md:p-14" style={{ backgroundImage: 'url(https://i.ibb.co/5Ls3VkZ/pexels-aphiwat-chuangchoem-359989.jpg)' }}>
                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                <div >
                    <div className="flex flex-col xl:flex-row lg:flex-col md:flex-col justify-between lg:pl-16">

                        <div className="text-white font-semibold xl:max-w-64 ">
                            <h3 className="text-3xl">
                                We are
                                looking forward to  meeting you
                            </h3>
                            <p className="pt-6">Fill Up Form Below For Enquiry And Our  Expert Will Contact You</p>
                        </div>
                        <div className="">
                        <form onSubmit={fromholder} >
                        <div className="text-white xl:mx-0 lg:mx-0 md:mx-0 mx-8">
                                    <label className="label">
                                        <span className="label-text text-white font-semibold">Message*</span>
                                    </label>
                                    <input type="text" name="massage" className=" input border-white border-2 bg-transparent  xl:w-[650px] xl:h-24 lg:w-[650px] lg:h-24 md:w-[650px] md:h-24 w-80 xl:pl-0 lg:pl-0 md:pl-0  " required />
                                </div>
                                <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row items-center  xl:gap-[132px] lg:gap-[132px] md:gap-[132px]">
                                    <div>
                                        <label className="label">
                                            <span className="label-text text-white font-semibold">Name*</span>
                                        </label>
                                        <input type="text" name="name" className="border-white border-2 bg-transparent input text-white xl:w-64 lg:w-64 md:w-64 w-80 "
                                        />

                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text text-white font-semibold">Email*</span>
                                        </label>
                                        <input type="Email" name="email" className="border-white border-2 bg-transparent input text-white xl:w-64 lg:w-64 md:w-64 w-80 "
                                        />

                                    </div>
                                </div>
                                <div className="xl:pt-6 xl:pl-32 lg:pt-6 lg:pl-32 md:pt-6 md:pl-32">
                                    <button className="xl:px-36 xl:py-2 lg:px-36 lg:py-2  md:px-36 md:py-2 px-36 btn bg-blue-800  hover:bg-blue-800  text-white hover:border-lime-500 border-2">SUBMIT MESSAGE</button>
                                </div>
                        </form>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactcontenthree;
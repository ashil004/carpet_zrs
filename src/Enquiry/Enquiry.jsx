import swal from "sweetalert";


const Enquiry = () => {
    const fromholder = event =>{
        event.preventDefault();
        const from = event.target;
        const massage =from.massage.value;
        const name = from.name.value;
        const email = from.email.value;
        const a = {massage,name,email};
        console.log(a);
        fetch('https://test.zrsflooring.com/massage',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(a)
            

        })
        .then((res) => res.json())
        .then((data) =>{
            console.log(data);
            if(data.insertedId){
                swal(" Massage Post Successfully ")
                
            }
           

           

        });

    }
    return (
        <div>
            <div className="mt-0">
                <div className="h-[60vh]  bg-cover " style={{ backgroundImage: 'url(https://i.ibb.co/sPkLGrW/pexels-cottonbro-studio-5081403.jpg)', }}>
                    <div className="hero-overlay "></div>
                    <div className="  text-white -mt-56 ml-12 ">
                        <h1 className="text-3xl font-bold" >Enquiry Now</h1>
                        <p>Designed to inspire</p>
                    </div>
                </div>

            </div>

            <div className="xl:m-16 xl:border-2 xl:border-blue-800 xl:w-[92%] xl:h-[500px] bg-neutral-400 lg:-mt-12 md:-mt-12 -mt-12  " >
                <div className="mt-12  ">
                    <h3 className="mt-2 text-center font-bold text-3xl">Enquiry Now</h3>
                    </div>
                    <div className="  xl:w-[45%] lg:w-[63%] md:w-[84%] mx-auto ">
                    <form onSubmit={fromholder} >
                    <div className="text-blue-500 xl:mx-0 lg:mx-0 md:mx-0 mx-8">
                                    <label className="label">
                                        <span className="label-text text-blue-800 font-semibold">Message*</span>
                                    </label>
                                    <input type="text" name="massage" className=" input border-blue-800 border-2  xl:w-[650px] xl:h-24 lg:w-[650px] lg:h-24 md:w-[650px] md:h-24 w-80 xl:pl-0 lg:pl-0 md:pl-0 text-black  dark:bg-white " required />
                                </div>
                                <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row items-center  xl:gap-[132px] lg:gap-[132px] md:gap-[132px]">
                                    <div>
                                        <label className="label">
                                            <span className="label-text text-blue-800 font-semibold">Name*</span>
                                        </label>
                                        <input type="text" name="name" className="border-blue-800 border-2  input xl:w-64 lg:w-64 md:w-64 w-80 text-black dark:bg-white "
                                        />

                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text text-blue-800 font-semibold">Email*</span>
                                        </label>
                                        <input type="Email" name="email" className="border-blue-800 border-2  input xl:w-64 lg:w-64 md:w-64 w-80 text-black dark:bg-white "
                                        />

                                    </div>
                                </div>
                                <div className="xl:pt-6 xl:pl-32 lg:pt-6 lg:pl-32 md:pt-6 md:pl-32">
                                    <button className="xl:px-36 xl:py-2 lg:px-36 lg:py-2  md:px-36 md:py-2 px-12 xl:ml-0 lg:ml-0 md:ml-0 ml-20 m-4 btn bg-blue-800  hover:bg-blue-800  text-white hover:border-lime-500 border-2">SUBMIT MESSAGE</button>
                                </div>

                    </form>

                        </div>
               

            </div>

        </div>
    );
};

export default Enquiry;
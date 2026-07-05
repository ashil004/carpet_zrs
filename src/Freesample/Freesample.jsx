import swal from "sweetalert";


const Freesample = () => {
    const fromholder = event => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const number = from.number.value;
        const product = from.product.value;
        const datas = { name, email, number, product }
        console.log(datas);
        fetch('https://test.zrsflooring.com/user-sample',{
            method:'POST',
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(datas)
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            if(data.insertedId){
                swal(" Request  Successfully ")
                
            }
        })
    }
    return (
        <div>
            <div>
                <div className="mt-0">
                    <div className="h-[60vh] bg-cover " style={{ backgroundImage: 'url(https://i.ibb.co/sPkLGrW/pexels-cottonbro-studio-5081403.jpg)', }}>
                        <div className="hero-overlay "></div>
                        <div className="  text-white -mt-56 ml-12 ">
                            <h1 className="text-3xl font-bold" >Our Sample</h1>
                            <p>Designed to inspire</p>
                        </div>
                    </div>

                </div>
                <div className="xl:border-2 xl:border-lime-400 xl:w-[1100px] xl:h-[500px] xl:mx-auto xl:m-14 bg-neutral-400 ">
                    <div className="xl:mt-16">
                        <h3 className="font-semibold text-2xl text-center">Enter Your Details
                            to get a Sample </h3>
                    </div>
                    <div className="xl:my-16">
                        <form onSubmit={fromholder} >
                            <div className="flex flex-col xl:flex-row  lg:flex-row md:flex-col justify-around md:ml-32 xl:ml-0 lg:ml-0">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-blue-800 font-bold "> Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered w-[360px] md:w-[500px] text-black dark:bg-white" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-blue-800 font-bold "> Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered w-[360px] md:w-[500px] text-black dark:bg-white " required />
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row  lg:flex-row md:flex-col justify-around md:ml-32 xl:ml-0 lg:ml-0">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-blue-800 font-bold ">Mobile Number</span>
                                    </label>
                                    <input type="text" name='number' placeholder="Enter Your Mobile Number" className="input input-bordered w-[360px] md:w-[500px] text-black dark:bg-white" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-blue-800 font-bold "> Product Sample</span>
                                    </label>
                                    <select name="product" className="select select-bordered w-[360px] md:w-[500px] text-black dark:bg-white">
                                        <option disabled selected>choose to product</option>
                                        <option value='Artificial Grass '>Artificial Grass</option>
                                        <option value='Vinyl Flooring'>Vinyl Flooring</option>
                                        <option value='Gym Flooring'>
                                            Gym Flooring</option>
                                        <option value='Deck Flooring'>Deck Flooring</option>
                                        <option value='SPC Eva Flooring'>SPC Eva Flooring</option>
                                        <option value='Lvt Flooring'>Lvt Flooring</option>
                                        <option value='Carpet Flooring'>Carpet Flooring</option>
                                        <option value='Wood Flooring'>Wood Flooring</option>
                                        <option value='Rubber Flooring'>Rubber Flooring</option>
                                        <option value='Wall Cladding'>Wall Cladding</option>
                                        <option value='PVC Flooring'>PVC Flooring</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-control mx-32 mt-6 ">
                                <button className="btn hover:bg-blue-800 rounded-lg bg-lime-500  text-white hover:text-black ">Request Now!</button>


                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Freesample;
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const img_hosting_api = 'https://api.imgbb.com/1/upload?key=aaa1fc88f9dc76fba16d815c4d3977df'

const Grassproductuplode = () => {
    const grass = async event => {
        event.preventDefault();
        const from = event.target;
        const title = from.title.value;
        const photo = from.photo.files[0];
        const fromData = new FormData();
        fromData.append('image', photo);
        const { data } = await axios.post(img_hosting_api, fromData)
        const pic = data.data.display_url;
        const desception = from.desception.value;
        const gssp = { title, pic, desception };
        console.log(gssp);
        fetch('https://test.zrsflooring.com/grass', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(gssp)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    swal(" Product Post  Successfully ")

                }
            })
    }
    return (
        <div className="xl:ml-[32%] xl:mt-[4%] lg:ml-[22%] lg:mt-[4%] md:mt-6 md:ml-[13%] ml-[8%] mt-4">
            <h3 className="text-center text-2xl font-semibold text-lime-500">Grass Product</h3>
            <div >
                <div className="flex justify-between  items-center">
                    <div className="dropdown">
                        <div tabIndex={0}  className="btn m-1"><button className=" text-sm md:text-lg ">Grass Sub <span className="hidden md:inline">Product </span> </button></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">
                            <li><Link className="text-sm md:text-lg hover:text-lime-400" to="/admin/football-grass">Football Grass </Link></li>
                            <li><Link className="text-sm md:text-lg hover:text-lime-400" to="/admin/landscaping-grass">Landscaping Grass</Link></li>
                            <li><Link className="text-sm md:text-lg hover:text-lime-400" to="/admin/playground-grass">Playground Grass</Link></li>
                            <li><Link className="text-sm md:text-lg hover:text-lime-400" to="/admin/colorfull-grass">Colorful Grass</Link></li>
                            <li><Link className="text-sm md:text-lg hover:text-lime-400" to="/admin/exhibitionuplode-grass">Exhibition Grass</Link></li>
                            <li><Link className="text-sm md:text-lg hover:text-lime-400" to="/admin/golf-grass">Golf Grass</Link></li>
                            <li><Link className="text-sm md:text-lg hover:text-lime-400" to="/admin/assaccessories-grass">Grass Accessories</Link></li>
                        </ul>
                    </div>
                    <Link to='/admin/grass-edit'><button className="btn  text-sm md:text-lg ">Edit Product</button></Link>
                </div>

            </div>

            <form onSubmit={grass} >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-blue-800 font-bold ">Product Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Enter Your Product title" className="input input-bordered w-[250px] md:w-[500px] dark:bg-white" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-blue-800 font-bold ">Product Photo:</span>
                    </label>
                    <input type="file" name='photo' placeholder="Enter Product photo " className="input input-bordered w-[250px] md:w-[500px] dark:bg-white" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-blue-800 font-bold ">Product Description:</span>
                    </label>
                    <input type="text" name='desception' placeholder="Enter Product Description" className="input input-bordered w-[250px] md:w-[500px] dark:bg-white py-12 " required />
                </div>
                <div className="form-control mt-6 ">
                    <button className="btn order-blue-400 rounded-lg bg-blue-800  text-white hover:bg-lime-500">Product Upload!</button>


                </div>
            </form>

        </div>
    );
};

export default Grassproductuplode;
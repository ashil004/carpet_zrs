import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const img_hosting_api = 'https://api.imgbb.com/1/upload?key=aaa1fc88f9dc76fba16d815c4d3977df'

const Workpublish = () => {
    const work = async event => {
        event.preventDefault();
        const from = event.target;
        const title = from.title.value;
        const pic = from.photo.files[0];
        const fromData = new FormData();
        fromData.append('image', pic);
        const { data } = await axios.post(img_hosting_api, fromData)
        const photo = data.data.display_url;
        const subtitle = from.subtitle.value;
        const material = from.material.value;
        const location = from.location.value;
        const date = from.date.value;
        const description =from.description.value;
        const workData = { title, photo, subtitle,material,location ,date,description };
        console.log(workData);
        fetch('https://test.zrsflooring.com/work', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(workData)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    swal(" Work Post  Successfully ")

                }
            })
    }

    return (
        <div className="xl:ml-[32%] xl:mt-[0%] lg:ml-[22%] lg:mt-[4%] md:mt-6 md:ml-[13%] ml-[6%] mt-4 ">
            <h3 className="text-center text-2xl font-semibold text-lime-500">Work Publish</h3>
            <div>
                <div className="flex justify-end">
                    <Link to='/admin/our-work-edit'><button className="btn  ">Edit Product</button></Link>
                </div>
            </div>
            <form onSubmit={work} >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-blue-800 font-bold ">Work Name</span>
                    </label>
                    <input type="text" name='title' placeholder="Enter Your work title" className="input input-bordered w-[220px] md:w-[500px] dark:bg-white" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-blue-800 font-bold "> Works Photo:</span>
                    </label>
                    <input type="file" name='photo' placeholder="Enter Work photo " className="input input-bordered w-[220px] md:w-[500px] dark:bg-white" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-blue-800 font-bold ">Publish subtitle:</span>
                    </label>
                    <input type="text" name='subtitle' placeholder="Enter Your work subtitle" className="input input-bordered w-[220px] md:w-[500px] dark:bg-white" required />
                </div>

                <div className=" md:flex md:items-center   ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-800 font-bold ">Location:</span>
                        </label>
                        <input type="text" name='location' placeholder="Enter Working Location" className="input input-bordered w-[220px] md:w-[240px] dark:bg-white" required />
                    </div>
                    <div className="form-control md:pl-4">
                        <label className="label">
                            <span className="label-text text-blue-800 font-bold "> Using Material:</span>
                        </label>
                        <input type="text" name='material' placeholder="Enter Using Material" className="input input-bordered w-[220px] md:w-[240px] dark:bg-white" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-blue-800 font-bold "> Working Date:</span>
                    </label>
                    <input type="text" name='date' placeholder="Enter  working date " className="input input-bordered w-[220px] md:w-[500px] dark:bg-white" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-blue-800 font-bold ">Description:</span>
                    </label>
                    <input type="text" name='description' placeholder="Enter work Short Description" className="input input-bordered w-[220px] md:w-[500px] dark:bg-white py-12" required />
                </div>


                <div className="form-control mt-6 ">
                    <button className="btn order-blue-400 rounded-lg bg-blue-800  text-white hover:bg-lime-500">Work Publish!</button>


                </div>
            </form>

        </div>
    );
};

export default Workpublish;
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const img_hosting_api = 'https://api.imgbb.com/1/upload?key=aaa1fc88f9dc76fba16d815c4d3977df'
const Blogpublish = () => {
    const blog = async event => {
        event.preventDefault();
        const from = event.target;
        const title = from.title.value;
        const photo = from.photo.files[0];
        const fromData = new FormData();
        fromData.append('image', photo);
        const { data } = await axios.post(img_hosting_api, fromData)
        const pic = data.data.display_url;
        const date = from.date.value;
        const description = from.description.value;
        const max = { title, date, pic, description };
        console.log(max);
        fetch('https://test.zrsflooring.com/blogs', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(max)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    swal(" Blog Publish  Successfully ")

                }
            })

    }

    return (
        <div className="xl:ml-[32%] xl:mt-[2%] lg:ml-[22%] lg:mt-[5%] md:mt-6 md:ml-[13%] ml-[12%] mt-4  ">
            <h3 className="text-center text-2xl font-semibold text-lime-500">Blog Publish</h3>
            <div>
                <div className="flex justify-end">
                    <Link to='/admin/blog-edit'><button className="btn  ">Edit Product</button></Link>
                </div>
            </div>
            <form onSubmit={blog} >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-blue-800 font-bold ">Blog Name:</span>
                    </label>
                    <input type="text" name='title' placeholder="Enter Your blog title" className="input input-bordered w-[220px] md:w-[500px] dark:bg-white" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-blue-800 font-bold "> Blogs Photo:</span>
                    </label>
                    <input type="file" name='photo' placeholder="Enter Your blogs photo " className="input input-bordered w-[220px] md:w-[500px] dark:bg-white" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-blue-800 font-bold ">Publish Date:</span>
                    </label>
                    <input type="text" name='date' placeholder="Enter Publish date" className="input input-bordered w-[220px] md:w-[500px] dark:bg-white" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-blue-800 font-bold ">Publish Description:</span>
                    </label>
                    <input type="text" name='description' placeholder="Enter Blog Short description" className="input input-bordered w-[220px] md:w-[500px] dark:bg-white py-16" required />
                </div>
                <div className="form-control mt-6 ">
                    <button className="btn order-blue-400 rounded-lg bg-blue-800  text-white hover:bg-lime-500">Blog Publish!</button>


                </div>
            </form>

        </div>
    );
};

export default Blogpublish;
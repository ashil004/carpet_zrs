import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const img_hosting_api = 'https://api.imgbb.com/1/upload?key=aaa1fc88f9dc76fba16d815c4d3977df'

const Logouplode = () => {
    const grass = async event => {
        event.preventDefault();
        const from = event.target;
        const photo = from.photo.files[0];
        const fromData = new FormData();
        fromData.append('image', photo);
        const { data } = await axios.post(img_hosting_api, fromData)
        const pic = data.data.display_url;
        const gssp = { pic };
        console.log(gssp);

        fetch('https://test.zrsflooring.com/icon', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(gssp)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    swal("Logo Upload Successfully ")

                }
            })
            .catch((err) => {
                console.log(err);
            })


    }
    return (
        <div className="xl:ml-[32%] xl:mt-[4%] lg:ml-[22%] lg:mt-[4%] md:mt-6 md:ml-[13%] ml-[8%] mt-4">
            <form onSubmit={grass} >
                <div className="flex items-center justify-end">
                    <Link to='/admin/logo-edit'>
                        <button className="btn" >Logo Edit</button>
                    </Link>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-blue-800 font-bold ">Logo Upload:</span>
                    </label>
                    <input type="file" name='photo' placeholder="Using jpg and pang file " className="input input-bordered w-[250px] md:w-[500px] dark: bg-white" required />
                </div>


                <div className="form-control mt-6 ">
                    <button className="btn order-blue-400 rounded-lg bg-blue-800  text-white hover:bg-lime-500">Logo Upload!</button>


                </div>
            </form>

        </div>
    );
};

export default Logouplode;
import axios from "axios";
import swal from "sweetalert";
const img_hosting_api = 'https://api.imgbb.com/1/upload?key=aaa1fc88f9dc76fba16d815c4d3977df'

const Hdfuplode = () => {
    const subproduct = async event => {
        event.preventDefault();
        const from = event.target;
        const title = from.title.value;
        const photo = from.photo.files[0];
        const fromData = new FormData();
        fromData.append('image', photo);
        const { data } = await axios.post(img_hosting_api, fromData)
        const pic = data.data.display_url;
        const subProductdata = { title, pic }
        console.log(subProductdata)

        fetch('https://test.zrsflooring.com/carpet-sub-product', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(subProductdata)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    swal(" SubProduct Upload  Successfully ")

                }
            })
    }
    return (
        <div className="xl:ml-[32%] xl:mt-[4%] lg:ml-[22%] lg:mt-[4%] md:mt-6 md:ml-[13%] ml-[1%] mt-4">
            <h3 className="text-center text-xl font-semibold text-lime-500"> High Density Fiberboard </h3>
            <form onSubmit={subproduct} >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-blue-800 font-bold ">  Product Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Enter Your Product title" className="input input-bordered w-[250px] md:w-[500px] dark:bg-white" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-blue-800 font-bold ">  Product Photo:</span>
                    </label>
                    <input type="file" name='photo' placeholder="Enter Product photo " className="input input-bordered w-[250px] md:w-[500px] dark:bg-white" required />
                </div>
                <div className="form-control mt-6 ">
                    <button className="btn order-blue-400 rounded-lg bg-blue-800  text-white hover:bg-lime-500">Product Upload!</button>


                </div>
            </form>

        </div>
    );
};

export default Hdfuplode;
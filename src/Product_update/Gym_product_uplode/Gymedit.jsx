import { useEffect, useState } from "react";
import Gymeditdetils from "./Gymeditdetils";
import swal from "sweetalert";


const Gymedit = () => {
    const [datas, SetDatas] = useState([])
    useEffect(() => {
        fetch("https://test.zrsflooring.com/gym")
            .then(res => res.json())
            .then(data => SetDatas(data))

    }, [])
    const hendelDelete = id => {

        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to leave this page?",
            icon: "warning",
            dangerMode: true,
        })
            .then(willDelete => {
                if (willDelete) {
                    fetch(`https://test.zrsflooring.com/gym/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                swal("Deleted!", "Your imaginary file has been deleted!", "success");
                                const reamming = datas.filter(data => data._id !== id);
                                SetDatas(reamming);

                            }



                        })

                }
            });

    }
    return (
        <div>
             <div className="w-[95%] xl:w-[90%] lg:w-[90%] xl:mx-auto lg:mx-auto md:mx-auto mx-[2%] xl:gap-8 lg:gap-6 md:gap-10 gap-2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 my-12 ">
                {
                    datas.map(data => <Gymeditdetils key={data._id} data={data} hendelDelete={hendelDelete} ></Gymeditdetils>)
                }
            </div>

        </div>
    );
};

export default Gymedit;

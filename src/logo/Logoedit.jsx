import { useEffect, useState } from "react";
import Logoeditviews from "./Logoeditviews";
import axios from "axios";


const Logoedit = () => {
    const [logos, setLogos] = useState([])
    useEffect(() => {
        axios.get('https://test.zrsflooring.com/icon')
            .then((res) => setLogos(res.data))
            .catch((err) => console.log(err))


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
                    fetch(`https://test.zrsflooring.com/icon/${id}`, {
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
            <div>
                {
                    logos.map(logo =><Logoeditviews key={logo._id} logo = {logo} hendelDelete={hendelDelete}></Logoeditviews>)
                }
            </div>
            
        </div>
    );
};

export default Logoedit;

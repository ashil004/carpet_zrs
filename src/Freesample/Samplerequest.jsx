import { useEffect, useState } from "react";
import Sampledetils from "./Sampledetils";
import swal from "sweetalert";


const Samplerequest = () => {
    const [samples , Setsempls] = useState([]);
    useEffect(()=>{
        fetch('https://test.zrsflooring.com/user-sample')
        .then((res)=>res.json())
        .then((data)=>Setsempls(data))

    },[])
    const hendelDelete = id => {

        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to leave this page?",
            icon: "warning",
            dangerMode: true,
        })
            .then(willDelete => {
                if (willDelete) {
                    fetch(`https://test.zrsflooring.com/user-sample/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                swal("Deleted!", "Your imaginary file has been deleted!", "success");
                                const reamming = samples.filter(sample => sample._id !== id);
                                Setsempls(reamming);

                            }



                        })

                }
            });

    }

    return (
        <div>
            <div className="grid grid-cols-1 xl:mx-[500px] lg:mx-[300px] md:mx-[175px] mx-0 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
                {
                    samples.map(sample =><Sampledetils key={sample._id} sample={sample}hendelDelete={hendelDelete}></Sampledetils>)
                }
            </div>
            
        </div>
    );
};

export default Samplerequest;
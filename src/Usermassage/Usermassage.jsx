import { useEffect, useState } from "react";
import Usermassagedetils from "./Usermassagedetils";
import swal from "sweetalert";


const Usermassage = () => {
    const [Usermassages , SetUsermasssgs] = useState()
    useEffect(()=>{
        fetch('https://test.zrsflooring.com/massage')
        .then((res)=>res.json())
        .then((data)=>SetUsermasssgs(data))

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
                    fetch(`https://test.zrsflooring.com/massage/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                swal("Deleted!", "Your imaginary file has been deleted!", "success");
                                const reamming = Usermassages.filter(usermassag => usermassag._id !== id);
                                SetUsermasssgs(reamming);

                            }



                        })

                }
            });

    }
    return (
        <div>
            <div className="grid grid-col-1 gap-4 xl:grid-flow-row lg:grid-flow-row md:grid-flow-row">
                {
                    Usermassages && Usermassages.map(usermassag =><Usermassagedetils key={usermassag._id} usermassag={usermassag} hendelDelete={hendelDelete}></Usermassagedetils>)
                }
            
            </div>
            
           
        </div>
    );
};

export default Usermassage;
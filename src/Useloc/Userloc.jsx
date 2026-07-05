import { useLoaderData } from "react-router-dom";
import Userdetils from "./Userdetils";
import swal from "sweetalert";



const Userloc = () => {
     const usersData = useLoaderData();
     console.log(usersData)
     

    
    return (
        <div className=" ">
            <div className="xl:ml-[450px] xl:space-y-6 xl:mt-4 lg:ml-[180px] lg:space-y-4 lg:mt-4">
            {
               usersData && usersData.map(userData =><Userdetils key={userData._id} usersData={userData}></Userdetils>)
               }
               
            </div>


        </div>
    );
};

export default Userloc;
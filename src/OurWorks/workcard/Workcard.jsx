
import { useEffect, useState } from "react";
import Cardetels from "./Cardetels";
import axios from "axios";



const Workcard = () => {
    const [cards,setCards] = useState([]);
    useEffect(()=>{
        // fetch("https://test.zrsflooring.com/work")
        // .then(res => res.json())
        // .then(data =>setCards(data))
        // console.log(cards)
        axios.get("https://test.zrsflooring.com/work")
        .then((res)=> setCards(res.data))

    .catch((err)=> console.log(err))
        

    },[]);
   
    return (
        <div>
            <div className="w-[95%] xl:w-[90%] lg:w-[90%] mx-auto xl:gap-8 lg:gap-6 md:gap-10 gap-2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 xl:ml-[75px] lg:ml-12 md:ml-5 ">
                {
                   cards && cards.map(card =><Cardetels key={card._id} card={card}></Cardetels>)
                }
            </div>

            
        </div>
    );
};

export default Workcard;
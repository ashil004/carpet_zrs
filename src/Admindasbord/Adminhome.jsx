import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line } from 'recharts';
import { MdAssuredWorkload } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { FaMicroblog } from "react-icons/fa6";
import { CiSquareQuestion } from "react-icons/ci";
import { useEffect, useState } from "react";
const Adminhome = () => {
    const [das, Setdas] = useState([])
    useEffect(() => {
        fetch('https://test.zrsflooring.com/admin-stats')
            .then(res => res.json())
            .then(data => Setdas(data))

    }, [])
    // console.log(das)
    const data = [{ name: `Grass`, uv: `${das.totalGrass}`, pv: 100, amt: 100 },
    { name: `Vinyl `, uv: `${das.totalVinyl}`, pv: 100, amt: 100 },
    { name: `Deck `, uv: `${das.totalDeck}`, pv: 100, amt: 100 },
    { name: `Spc `, uv: `${das.totalSpc}`, pv: 100, amt: 100 },
    { name: `Ltv `, uv: `${das.totalLtv}`, pv: 100, amt: 100 },
    { name: `Laminate`, uv: `${das.totalLaminate}`, pv: 100, amt: 100 },
    { name: `Wood`, uv: `${das.totalWood}`, pv: 100, amt: 100 },
    { name: `Rabber`, uv: `${das.totalRabber}`, pv: 100, amt: 100 },
    { name: `Wall`, uv: `${das.totalWall}`, pv: 100, amt: 100 },
    { name: `Pvc`, uv: `${das.totalPvc}`, pv: 100, amt: 100 },

    ];

    return (
        <div className='xl:max-w-8xl  mx-auto '>
            <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 xl:gap-2 lg:gap-6 md:gap-6 gap-4 xl:w-[98%] lg:w-[95%] md:w-[97%] w-[100%] mx-auto ml-6 md:ml-0 mt-2 " >
                <div className="xl:w-72 xl:h-36 lg:w-80 lg:h-36 md:w-64 md:h-36 w-40 h-36  xl:m-2 lg:m-2  md:m-2  bg-orange-300 xl:ml-0 lg:ml-0 md:ml-0 ml-8">
                    <h3 className="text-3xl font-semibold text-center pt-4 text-white">Total Work</h3>

                    <div className=" md:pl-24 pl-16 pt-4 text-3xl  text-white ">
                        <div className="flex items-center gap-2">
                            <MdAssuredWorkload></MdAssuredWorkload>
                            <p>{das.totalWork}</p>
                        </div>
                    </div>


                </div>
                <div className="xl:w-72 xl:h-36 lg:w-80 lg:h-36 md:w-64 md:h-36 w-40 h-36  xl:m-2 lg:m-2  md:m-2 bg-indigo-400 xl:ml-0 lg:ml-0 md:ml-0 ml-8">
                    <h3 className="text-3xl font-semibold text-center pt-4 text-white">User Message</h3>

                    <div className=" md:pl-24 pl-16 pt-4 text-3xl  text-white ">
                        <div className="flex items-center gap-2">
                            <AiOutlineMessage></AiOutlineMessage>
                            <p>{das.totalMassage}</p>
                        </div>
                    </div>


                </div>
                <div className="xl:w-72 xl:h-36 lg:w-80 lg:h-36 md:w-64 md:h-36 w-40 h-36  xl:m-2 lg:m-2  md:m-2 bg-purple-400 xl:ml-0 lg:ml-0 md:ml-0 ml-8">
                    <h3 className="text-3xl font-semibold text-center pt-4 text-white">Total Blog</h3>

                    <div className=" md:pl-24 pl-16 pt-4 text-3xl  text-white ">
                        <div className="flex items-center gap-2">
                            <FaMicroblog></FaMicroblog>
                            <p>{das.totalBlog}</p>
                        </div>
                    </div>


                </div>
                <div className="xl:w-72 xl:h-36 lg:w-80 lg:h-36 md:w-64 md:h-36 w-40 h-36  xl:m-2 lg:m-2  md:m-2 bg-green-400 xl:ml-0 lg:ml-0 md:ml-0 ml-8">
                    <h3 className="text-3xl font-semibold text-center pt-4 text-white">Total Request</h3>

                    <div className=" md:pl-24 pl-16 pt-4 text-3xl  text-white ">
                        <div className="flex items-center gap-2">
                            <CiSquareQuestion></CiSquareQuestion>
                            <p>{das.totalrequest}</p>
                        </div>
                    </div>


                </div>
            </div>

            <div>
                <div className="xl:text-4xl lg:text-4xl md:text-4xl text-sm  font-bold text-center border-4 border-lime-300  bg-blue-800 text-white  xl:mx-56 lg:mx-32 md:mx-12  xl:mt-4 lg:mt-4 md:mt-4  md:p-6 p-4 m-2 ">Product Quantity</div>

                <div className='w-full -ml-[120px] mt-16 md:w-[98%] md:ml-12 lg:w-[95%] lg:ml-32 xl:w-1/2 xl:ml-96 mx-auto'>
                    <BarChart width={400} height={300} data={data}>
                        <XAxis dataKey="name" stroke="#e32320" />
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid stroke="#342b8a" strokeDasharray="5 5" />
                        <Bar dataKey="uv" fill="#091bde" barSize={30} />
                    </BarChart>
                    
                </div>

            </div>

        </div>
    );
};

export default Adminhome;
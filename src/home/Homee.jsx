import { Link } from "react-router-dom";


const Homee = () => {
    return (
        <div className="xl:mx-48 lg:mx-4 md:mx-56 ">

            <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col justify-around items-center">
                <div>
                    <img src="https://i.ibb.co/XkF7rPY/image-Q3-RGd-W1o-OFl5-NDhz-Q2t-HSk5z-VVhn-QT09.webp" />
                </div>

                <div className="xl:max-w-96 lg:max-w-96 md:max-w-96 ">
                    <h2 className="font-semibold text-3xl">
                        Want to Visualize it before finalising? We got you covered!
                    </h2>
                    <p className="max-w-96 text-zinc-500 text-base mt-4 text-justify">Let your creative juices flow and customize your space at the click of a button. Select from several varieties of tiles, planks and other flooring options to design a space that best resonates with your style. When showing off your design to your guests, you can take full credit for it as well.</p>
                    <div className="mt-4">
                    <button className="btn  bg-lime-500  hover:bg-blue-800  text-white "><Link to='/product'>Start Your Design</Link></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Homee;
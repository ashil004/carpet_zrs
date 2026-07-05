import { useState } from "react";


const Homed = () => {
    const [currentSlider, setCurrentSlider] = useState(1);
    const sliders = [{ img: "https://i.ibb.co/jMBPQC0/pexels-alan-fikz-3680660.jpg", }, { img: "https://i.ibb.co/sQfDvjH/pexels-kelly-4263067.jpg", }, { img: "https://i.ibb.co/ngXpCTj/pexels-max-vakhtbovycn-7045846.jpg", }, { img: "https://i.ibb.co/sgTttRX/pexels-jonathan-petersson-399187.jpg", }, { img: "https://i.ibb.co/t4DF156/pexels-max-vakhtbovycn-7031706.jpg", },{ img: "https://i.ibb.co/WkyHm3Y/pexels-bence-szemerey-7513413.jpg", },{ img: "https://i.ibb.co/pJ2Tgns/pexels-curtis-adams-11018290.jpg", },{ img: "https://i.ibb.co/0yC9vQr/pexels-axp-photography-16681677.jpg", },{ img: "https://i.ibb.co/T13jkNV/banner-image-Zmd-HYk-Iv-Wjd-Xe-EYv-TXNSSm-Zab-HF5-Zz09.jpg", },

];

    const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
    const nextSlider = () => setCurrentSlider((currentSlider) => currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);
    return (
        <div>
            <div className="text-center">
                <p className="text-sm text-blue-800 font-semibold">ZRS FLOORING COLLECTIONS</p>
                <h1 className="font-bold text-3xl ">Our New Arrivals</h1>
            </div>
            <div className="max-w-6xl mx-auto h-[360px] md:h-[670px] flex flex-col xl:flex-row items-center overflow-hidden gap-5 lg:gap-10 relative">
                <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
                    {/* arrow left */}
                    <button onClick={prevSlider} className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                        <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                    </button>
                    {/* arrow right */}
                    <button onClick={nextSlider} className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                        <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                    </button>
                </div>
                {/* slider container */}
                <div className="h-[540px] md:h-[670px] w-2/3 ml-auto relative ease-linear duration-300 flex items-center"
                    style={{ transform: `translateX(-${currentSlider * 50}%)` }}>
                    {/* sliders */}
                    {sliders.map((slide, inx) => (
                        <div key={inx}
                            className={`${currentSlider === inx ? "h-[180px] sm:h-[240px] md:h-[350px] lg:h-[450px]" : "h-[240px] sm:h-[280px] md:h-[420px] lg:h-[520px] scale-95 opacity-40"} min-w-[50%] relative duration-200`}
                            style={{ perspective: "200px" }}>
                            <img src={slide.img} className="w-full h-full bg-gray-900 rounded-none duration-300" alt={slide.tags} style={{ transform: `${currentSlider - 1 === inx ? "rotateY(4deg)" : currentSlider + 1 === inx ? "rotateY(-4deg)" : ""}`, transformStyle: "preserve-3d", }} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Homed;
import { useEffect, useState } from "react";


const Appbanner = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: "https://i.ibb.co/Yp32K9w/Artificial-Grass-Slider-Image-1.webp", title: "Best Flooring company in Dubai, UAE", des: "You name it, we got it!", }, { img: "https://i.ibb.co/jDHZ41y/Carpet-Flooring-Slider-1.webp", title: "Decorate your office, starting from the floor", des: "Traditional designs immersed in a sea of innovation.", },{ img: "https://i.ibb.co/MBN70CW/Deck-Flooring-Slider-Image.webp", title: "International standards at affordable prices", des: "The quality of your floor speaks volumes about your stature", }, { img: "https://i.ibb.co/jJq8CFv/Deck-Flooring-Slider-Image-1.webp", title: "Global Quality at Competitive Rates", des: "Your floor's elegance reflects your level of sophistication", }, { img: "https://i.ibb.co/Jc6rcYv/Gym-Flooring-Slider-1.webp", title: "Worldwide Excellence at Reasonable Costs", des: "The condition of your flooring showcases the prestige of your space", },{ img: "https://i.ibb.co/tHRpBD2/Wall-Flooring-Slider-2.webp", title: "Global Tile Excellence at Affordable Prices", des: "The quality of your tiles reflects the sophistication of your environment.", },{ img: "https://i.ibb.co.com/82FvYs9/Wood-Flooring2.webp", title: "Premium Wood Flooring at Affordable Prices", des: "Enhance your space with premium wood flooring that combines style, durability, and affordability.", },];
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);
    return (
        <div className="-mt-24">
            <div className="w-full xl:h-[80vh]  h-60 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/10 before:inset-0 transform duration-1000 ease-linear"
                style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}>
                {/* text container here */}
                <div className="drop-shadow-lg text-white text-center px-5">
                    <h1 className="text-xl lg:text-3xl font-semibold mb-3">{sliders[currentSlider].title}</h1>
                    <p className="text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
                </div>
            </div>
            {/* slider container */}
            <div className="flex justify-center items-center gap-3 p-2">
                {/* sliders */}
                {sliders.map((slide, inx) => (
                    <img onClick={() => setCurrentSlider(inx)} key={inx}
                        src={slide.img} className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                        alt={slide.title} />
                ))}
            </div>

        </div>
    );
};

export default Appbanner;


const Contactcontentfour = () => {
    return (
        <div className='pt-12'>
            <div className='text-center'>
                <p className="text-sm font-semibold text-blue-800">Z&S CARPETS</p>
                <h3 className="text-3xl font-semibold  ">Our Location Map</h3>
            </div>

            <div className="mt-[60px] w-[97%] mx-auto">
                <div className="pt-[56.25%]  relative h-[0px]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.792066233415!2d55.33599467489316!3d25.27757932844115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d79562efded%3A0x5c86fade4b1dddaa!2sAl%20Safiya%20Building%20EWIG!5e0!3m2!1sen!2sbd!4v1719422630861!5m2!1sen!2sbd"
                        width="600"
                        height="450"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute top-0 left-0 w-full h-[65vh]"></iframe>

                    
                </div>
                

            </div>
        </div>
    );
};

export default Contactcontentfour;
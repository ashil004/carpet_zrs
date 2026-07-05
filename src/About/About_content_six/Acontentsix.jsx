import Marquee from "react-fast-marquee";


const Acontentsix = () => {
    return (
        <div className="m-12  ">
            <div>
                <h3 className="font-semibold text-3xl">Happy Clients</h3>
                <p className="text-sm text-zinc-400">Our valuable customer in UAE</p>
            </div>
            <div>
                <Marquee>
                    <img src="https://i.ibb.co.com/5LXqvjr/final-1.png"/>
                    <img src="https://i.ibb.co.com/rM0Rz9Q/final-2.png"/>
                    <img src="https://i.ibb.co.com/6sR88GL/final-3.png"/>
                    <img src="https://i.ibb.co.com/zrMwwk0/final-4.png"/>
                    <img src="https://i.ibb.co.com/ZMm6CqQ/final-5.png"/>
                    <img src="https://i.ibb.co.com/F6bkQbg/final-6.png"/>
                    {/* <img src="https://i.ibb.co/sVw4VPw/Screenshot-63.png"/>
                    <img src="https://i.ibb.co/Qkw6JjL/Screenshot-64.png"/> */}
                </Marquee>
            </div>
        </div>
    );
};

export default Acontentsix;

import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {
  const [logos, setLogos] = useState([])
  useEffect(() => {
    axios.get('https://test.zrsflooring.com/icon')
      .then((res) => setLogos(res.data))
      .catch((err) => console.log(err))


  }, [])
  return (
    <div >
      <div className="bg-cover p-12 md:p-6 md:h-[340px] lg:h-[350px] xl:h-[380px]  bg-blue-950 " >

        <footer className="footer p-6  text-white  " >
          <nav className="lg:mt-6 xl:mt-10">

            <div>
              {/* <img src="https://i.ibb.co/bHs5Q1Y/1-removebg-preview.png" className="w-56" /> */}
              {
                logos.map(logo =><h2 key={logo._id} logo={logo} >
                  <img src={logo.pic}  className="w-56" />
                </h2>)
              }
            </div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex gap-2 ">
              <Link target="_blank" to="https://www.instagram.com/zrsdxb?igsh=Z2E0Nnl4enZlZmF1"><h3 className="text-xl hover:text-lime-400"><FaInstagram /></h3></Link>
              <Link target="_blank" to='https://www.facebook.com/share/18MTq2Kquu/?mibextid=wwXIfr'><h3 className="text-xl hover:text-lime-400"><AiOutlineFacebook /></h3></Link>
              <Link target="_blank" to="https://x.com/zrsflooring"><h3 className="text-lg hover:text-lime-400"><BsTwitterX /></h3></Link>
              <Link target="_blank" to='https://linkedin.com/company/zrsflooring/'><h3 className="text-xl hover:text-lime-400"><FaLinkedinIn /></h3></Link>


            </div>

          </nav>
          <nav className=" lg:mt-6 xl:mt-10  ">
            <header className="text-xl font-bold">Contact Us</header>
            <h3 className="text-lg font-semibold">
             Al Safiya-Bldg 
             <br/>
             Plot NO.1974-0 
             <br></br>
             Hor al Anz,Dubai-UAE
            </h3>
            <h3
              className="hover:text-lime-400">zrsdxb@gmail.com</h3>
            <h3 className="text-lg font-semibold hover:text-lime-400">+971559004768</h3>


          </nav>
          <nav className="lg:mt-6 xl:mt-10">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <div className="flex gap-4">
              <ul>
                <li><Link to='/' className="hover:text-lime-400 link link-hover">Home</Link></li>
                <li><Link to='/about' className="hover:text-lime-400 link link-hover">About</Link></li>
                <li> <Link to='/product' className="hover:text-lime-400 link link-hover">Product</Link></li>
                <li> <Link to='/contact-us' className="hover:text-lime-400 link link-hover">Contact</Link></li>

              </ul>
              <ul>
                <li><Link to='/services' className="hover:text-lime-400 link link-hover">Services</Link></li>
                <li><Link to='/our-works' className="hover:text-lime-400 link link-hover">Our Work</Link></li>
                <li><Link to='/blog' className="hover:text-lime-400 link link-hover">Blogs</Link></li>
                <li><Link to="/download">Download</Link></li>
              </ul>
            </div>

            {/* <Link to='/admin/home' className="link link-hover hover:text-lime-400">Admin </Link> */}



          </nav>
          <nav className="lg:mt-6 xl:mt-10">
            <h3 className="text-xl font-bold">Our Product </h3>
            <div className="flex gap-4">
              <ul>
                <li><Link to='/grass' className="link link-hover hover:text-lime-400">Grass <span className="md:hidden xl:inline lg:inline  inline">Flooring</span></Link></li>
                <li><Link to='/gym' className="link link-hover hover:text-lime-400">Gym <span className="md:hidden xl:inline lg:inline  inline ">Flooring</span></Link></li>
                <li><Link to='/spc' className="link link-hover hover:text-lime-400">Spc <span className="md:hidden xl:inline lg:inline  inline ">Flooring</span></Link></li>
                <li><Link to='/ltv' className="link link-hover hover:text-lime-400">Lvt <span className="md:hidden xl:inline lg:inline  inline ">Flooring</span></Link></li>
                <li><Link to='/carpet' className="link link-hover hover:text-lime-400">Carpet <span className="md:hidden xl:inline lg:inline  inline ">Flooring</span></Link></li>
                <li><Link to='/rubber' className="link link-hover hover:text-lime-400">Rubber <span className="md:hidden xl:inline lg:inline  inline ">Flooring</span></Link></li>


              </ul>
              <ul>
                <li><Link to='/vinyl' className="link link-hover hover:text-lime-400">Vinyl <span className="md:hidden xl:inline lg:inline  inline">Flooring</span></Link></li>
                <li><Link to='/deck' className="link link-hover hover:text-lime-400">Deck <span className="md:hidden xl:inline lg:inline  inline ">Flooring</span></Link></li>
                <li><Link to='/laminate' className="link link-hover hover:text-lime-400">Laminate <span className="md:hidden xl:inline lg:inline  inline ">Flooring</span></Link></li>
                <li><Link to='/wood' className="link link-hover hover:text-lime-400">Wood <span className="md:hidden xl:inline lg:inline  inline ">Flooring</span></Link></li>
                <li><Link to='/wall' className="link link-hover hover:text-lime-400">Wall <span className="md:hidden xl:inline lg:inline  inline ">Flooring</span></Link></li>
                <li><Link to='/pvc' className="link link-hover hover:text-lime-400">Pvc <span className="md:hidden xl:inline lg:inline  inline ">Flooring</span></Link></li>
              </ul>
            </div>

          </nav>
        </footer>
        <footer className="footer footer-center p-4 bg-blue-950  text-white mt-0">
          <aside>
            <p>Copyright © 2024 - All right reserved by ZRS Flooring Ltd</p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
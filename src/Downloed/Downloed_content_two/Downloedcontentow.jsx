
// const PDF_FILE_URL = 'download/pdf_one.pdf';
// const PDF_FILE_URL_TOW = './Downloed/Downloed_content_two/pdf_tow.pdf';

import { Link } from "react-router-dom";

const Downloedcontentow = () => {
    // const downlodeATUrl = (url) =>{
    //     const fileName = url.split('/').pop();
    //     const aTag = document.createElement('a')
    //     aTag.href = url;
    //     aTag.setAttribute('download',fileName);
    //     document.body.appendChild(aTag);
    //     aTag.click();
    //     aTag.remove();
    // }
    return (
        <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2   lg:grid-cols-2  lg:ml-20 xl:grid-cols-2 xl:ml-56">
                <div className="card w-96 bg-white shadow-xl">
                    <figure className="px-10 pt-10  ">
                        <img src="https://i.ibb.co/gmrjw2P/icons8-pdf-80.png" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Catalogue Products</h2>
                        <div className="card-actions">
                            <a href="https://drive.google.com/drive/folders/1lRlKnY1ypZTTOrrp9J-E0CXlKl6EPOyF?usp=drive_link " target="_blank" rel="noopener noreferrer"><button className="btn bg-blue-800  hover:bg-blue-800  text-white hover:border-lime-500 border-2">Download</button></a>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-white shadow-xl">
                    <figure className="px-10 pt-10  ">
                        <img src="https://i.ibb.co/gmrjw2P/icons8-pdf-80.png" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Catalogue Grass Products</h2>
                        <div className="card-actions">
                            <a href="https://drive.google.com/drive/folders/1S6T3qlSE4HYb6SW8C0ryJC3TcQnpFprs?usp=sharing " target="_blank" rel="noopener noreferrer"><button className="btn bg-blue-800  hover:bg-blue-800  text-white hover:border-lime-500 border-2">Download</button></a>

                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Downloedcontentow;
import React from 'react'
import featuredProjectImage_2 from "../asset/images/featuredProjectImage_2.png";
// import featuredProjectImage_1 from "../asset/images/banner1.png";

function Featured_Project_Card() {
    return (
        <>
            <div className='Featured_Project_Card'>
                <img src={featuredProjectImage_2} alt="" />

                <div className="content">
                    <p className='title'>
                        HZ33 22 Park Ave
                    </p>
                    <p className='location'>
                        New York – US
                    </p>
                    <p className='price'>
                        $2.500
                    </p>

                </div>

            </div>
        </>
    )
}

export default Featured_Project_Card
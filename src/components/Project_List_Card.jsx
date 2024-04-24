import React from 'react'
import banner1 from "../asset/images/banner1.png"
import { cardIcon, heart } from '../asset/staticData'

function Project_List_Card() {
    return (
        <>
            <div className="project-list-card">
                <div className="project-img">
                    <img src={banner1} alt="" />
                    <div className="status">
                        Under Contruction
                    </div>
                    <div className="watchList">
                        {heart}
                    </div>
                    <div className="is-verified">
                        Verified
                    </div>

                </div>
                <p className="project-name">
                    The Rockwall
                </p>
                <p className="price">
                    From 2500
                </p>
                <p className="builder-name">
                    raj industries
                </p>
                <p className="location">
                    2815 Broadway, New York, NY
                </p>
                <div className=" details-box">

                    <div className="details">
                        <div className="flex items-center ">
                            <span>
                                {cardIcon}
                            </span>
                            <p className='ml-1'>Bedrooms</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="flex items-center ">
                            <span>
                                {cardIcon}
                            </span>
                            <p className='ml-1'>Bedrooms</p>
                        </div>
                    </div>




                </div>
            </div>
        </>
    )
}

export default Project_List_Card
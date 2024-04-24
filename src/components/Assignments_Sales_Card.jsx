import React from 'react'
import { cardIcon, eye, heart, plusCircle, starFill } from '../asset/staticData'
import banner1 from "../asset/images/featuredProjectImage_2.png"

function Assignments_Sales_Card() {
    return (
        <div className='Assignments_Sales_Card' style={{
            backgroundImage: `url(${banner1})`
        }} >
            <div className="top">
                <button>
                    <span>
                        {heart}
                    </span>
                </button>
                <button>
                    <span>
                        {eye}
                    </span>
                </button>
                <button>
                    <span>
                        {plusCircle}
                    </span>
                </button>
            </div>
            <div className="bottom">
                <p className="title">
                    HZ33 22 Park Ave
                </p>
                <p className="location">
                    New York – US
                </p>
                <div className="flex justify-between items-center">
                    <div className=" details-box">
                        <div className="details">
                            <div className="flex items-center mb-2">
                                <p className='mr-1'>1</p>
                                <span>
                                    {cardIcon}
                                </span>
                            </div>
                            <p>
                                Bedrooms
                            </p>
                        </div>
                        <div className="details">
                            <div className="flex items-center mb-2">
                                <p className='mr-1'>1</p>
                                <span>
                                    {cardIcon}
                                </span>
                            </div>
                            <p>
                                Bedrooms
                            </p>
                        </div>
                        <div className="details">
                            <div className="flex items-center mb-2">
                                <p className='mr-1'>1</p>
                                <span>
                                    {cardIcon}
                                </span>
                            </div>
                            <p>
                                Bedrooms
                            </p>
                        </div>




                    </div>
                    <div className="ratting">
                        <span>
                            {starFill}
                        </span>
                        <p>4.5</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Assignments_Sales_Card
import React from 'react'
import { eye, heart, plusCircle, starFill } from '../asset/staticData'
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                                    </svg>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                                    </svg>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                                    </svg>
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
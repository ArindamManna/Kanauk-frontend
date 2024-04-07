import React from 'react'
import builder1 from '../asset/images/banner1.png'
import { starFill } from '../asset/staticData'

function PopularCities() {
    return (
        <div className='popularCities'
            style={{
                backgroundImage: `url(${builder1})`
            }}
        >
            <div className="bottom">
                <div className="left">
                    <p className="title">
                        HZ33 22 Park Ave
                    </p>
                    <p className="location">
                        New York – US
                    </p>
                </div>
                <div className="right">
                    <div className="ratting">
                        <span>
                            {starFill}
                        </span>
                        <p>4.5</p>
                    </div>
                </div>
            </div>

            <button className='detailsBtn'>
                See Details
            </button>
        </div>
    )
}

export default PopularCities
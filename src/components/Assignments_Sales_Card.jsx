import React from 'react'
import { eye, heart, plusCircle, starFill } from '../asset/staticData'

function Assignments_Sales_Card() {
    return (
        <div className='Assignments_Sales_Card' >
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
                <div className="flex justify-between">
                    <div className="flex">

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
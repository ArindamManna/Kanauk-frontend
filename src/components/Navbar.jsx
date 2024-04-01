import React from 'react'
import { downArrow } from '../asset/staticData'

function Navbar() {
    return (
        <>
            <header>
                <div className="logo">
                    <img src={require("../images/logo/kaunuck_logo_black.png")} alt="Kanuak Logo" srcset="" />
                </div>
                <nav>
                    <div className="navlinks">
                        Gallery
                        <span>
                            {downArrow}
                        </span>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
import React, { useEffect, useState } from 'react'
import { downArrow, hamburgerIcon, searchLogo } from '../asset/staticData';
import kaunuck_logo_black from "../asset/images/logo/kaunuck_logo_black.png";
import kaunuck_logo_white from "../asset/images/logo/kaunuck_logo_white.png";
import profilePic from "../asset/images/logo/profile.png";

function Navbar() {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState({
        gallaery: false,
        articles: false,
    })

    // useEffect(() => {
    //     document.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         let clickOutsideElem = [...document.querySelectorAll('.clickOutsideElem')];

    //         clickOutsideElem.forEach((elem) => {
    //             let clickOutsideFunc = elem.getAttribute("clickOutsideFunc");


    //             if (e.target !== elem && !elem.contains(e.target)) {
    //                 // clickOutsideFunc()
    //                 console.log(clickOutsideFunc);
    //             }
    //         })
    //     })
    // }, [])
    return (
        <>
            <header>
                <div className="left">

                    <div className="logo">
                        <img src={kaunuck_logo_black} alt="Kanuak Logo" srcset="" />
                        {/* <img src={kaunuck_logo_white} alt="Kanuak Logo" srcset="" /> */}
                    </div>
                    <div className="searchBox hidden">
                        <input type="text" placeholder='Find your new construction ' />
                        <button>
                            <span className='h-5 w-5'>

                                {searchLogo}
                            </span>
                        </button>
                    </div>
                </div>
                <nav>
                    <div className="navlinks clickOutsideElem"
                        // clickOutsideFunc={(e) => { console.log(e, "manna"); }}
                        onClick={() => { setIsSubMenuOpen((prev) => ({ ...prev, gallaery: !prev.gallaery })) }}>
                        Gallery
                        <span>
                            {downArrow}
                        </span>

                        <div className={`nav-submenu ${isSubMenuOpen.gallaery ? "" : "hidden"}`}>
                            <ul>
                                <li>
                                    Option 1
                                </li>
                                <li>
                                    Option 2
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navlinks clickOutsideElem"
                        // clickOutsideFunc={(e) => { console.log(e, "manna"); }}
                        onClick={() => { setIsSubMenuOpen((prev) => ({ ...prev, articles: !prev.articles })) }}>
                        Articles
                        <span>
                            {downArrow}
                        </span>

                        <div className={`nav-submenu ${isSubMenuOpen.articles ? "" : "hidden"}`}>
                            <ul>
                                <li>
                                    Option 1
                                </li>
                                <li>
                                    Option 2
                                </li>
                            </ul>
                        </div>
                    </div>
                    <label htmlFor="themeToggle" className='px-1 py-3 rounded-full toggle'>
                        <span className='px-3 text'>
                            Residential
                        </span>
                        <span className='px-3 text'>
                            Commercial
                        </span>
                        <input type="checkbox" name="toggle" className='hidden' id="themeToggle" />
                        <div className="toggleSlider">
                            <div className="bg"></div>
                        </div>
                    </label>
                    <button className='loginBtn'>
                        Log In
                    </button>
                    <button>
                        <img src={profilePic} alt="Profile_pic" />
                    </button>
                    <button className='hamburgerBtn'>
                        {hamburgerIcon}
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Navbar
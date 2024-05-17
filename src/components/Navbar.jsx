import React, { useEffect, useState } from "react";
import { downArrow, hamburgerIcon, homeIconSolid, imageIcon, loginIcon, logoutIcon, mapIcon, newsPaperIcon, phoneIcon, profileIcon, searchLogo } from "../asset/staticData";
import kaunuck_logo_black from "../asset/images/logo/kaunuck_logo_black.png";
import kaunuck_logo_white from "../asset/images/logo/kaunuck_logo_white.png";
import profilePic from "../asset/images/logo/profile.png";
import { Link, useLocation } from "react-router-dom";
import { ApiHelperFunction } from "../Api/ApiHelperfunction";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { updateGlobalState } from "../Redux/GlobalSlice";

function Navbar() {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState({
        gallaery: false,
        articles: false,
    });
    const location = useLocation();
    // const [userDetails, setUserDetails] = useState({})
    const [navBg, setNavBg] = useState(false);
    const [loader, setLoader] = useState(false)
    const Dispatch = useDispatch();

    const { userDetails } = useSelector((state) => {
        const { userDetails } = state?.GlobalSlice;
        return { userDetails }
    });


    async function verifyToken() {
        let res = await ApiHelperFunction({
            urlPath: "users/verifytoken",
            method: "post",

        })
        if (res.data) {
            Dispatch(
                updateGlobalState({
                    userDetails: res?.data
                })
            );
        } else {
            localStorage.removeItem("usertoken");
            Dispatch(
                updateGlobalState({
                    userDetails: {}
                })
            );
        }
        // console.log(res);
    }

    function logout() {
        localStorage.removeItem("usertoken");
        Dispatch(
            updateGlobalState({
                userDetails: {}
            })
        );
    }


    // const isHome = props.name === 'Homepage' ? true : false;

    const changeNav = () => {
        if (location.pathname == "/") {
            window.scrollY >= 400 ? setNavBg(true) : setNavBg(false);
        }
        // console.log(window.scrollY);
    };

    useEffect(() => {

        let usertoken = localStorage.getItem("usertoken")
        if (usertoken) {

            verifyToken()
        }
        window.addEventListener("scroll", changeNav);
        return () => {
            window.removeEventListener("scroll", changeNav);
        };
    }, []);

    useEffect(() => {
        if (location.pathname == "/") {
            setNavBg(false);
        } else {
            setNavBg(true);
        }
    }, [location]);

    // useEffect(() => {
    //     [...document.querySelectorAll('.has-submenu > a')].forEach((elem) => {
    //         elem.addEventListener('click', () => {
    //             elem.parentElement.classList.toggle('active');
    //         })
    //     })
    // })

    function submenuToggle(event) {
        event.target.closest(".has-submenu").classList.toggle("open");
    }
    return (
        <>
            {loader ? <Loader /> : ""}
            <header className={`${navBg ? "header-bg sticky" : "fixed"}`}>
                <div className="flex items-center justify-between">

                    <div className="left">
                        <Link to={"/"} className="logo">
                            <img src={navBg ? kaunuck_logo_white : kaunuck_logo_black} alt="Kanuak Logo" className="hidden xl:block" />
                            <img src={kaunuck_logo_white} alt="Kanuak Logo" className="block xl:hidden" />
                            {/* <img src={kaunuck_logo_white} alt="Kanuak Logo"  /> */}
                        </Link>
                        <div className={`searchBox  w-[20rem] ${navBg ? "" : "hide"} `}>
                            <input type="text" placeholder="Find your new construction " />
                            <button>
                                <span className="h-5 w-5">{searchLogo}</span>
                            </button>
                        </div>
                    </div>
                    <nav className="hidden md:flex">
                        <div
                            className="navlinks clickOutsideElem"
                        // clickOutsideFunc={(e) => { console.log(e, "manna"); }}
                        // onClick={() => {
                        //     setIsSubMenuOpen((prev) => ({ ...prev, gallaery: !prev.gallaery }));
                        // }}
                        >
                            Gallery
                            <span>{downArrow}</span>
                            <div
                                className={`nav-submenu `}
                            // className={`nav-submenu ${isSubMenuOpen.gallaery ? "" : "hidden"}`}
                            >
                                <ul>
                                    <li>
                                        <a href="">option 1</a>
                                    </li>
                                    <li>
                                        <a href="">option 2</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="navlinks clickOutsideElem"
                        // clickOutsideFunc={(e) => { console.log(e, "manna"); }}
                        // onClick={() => {
                        //     setIsSubMenuOpen((prev) => ({ ...prev, articles: !prev.articles }));
                        // }}
                        >
                            Articles
                            <span>{downArrow}</span>
                            <div
                                className={`nav-submenu `}
                            // className={`nav-submenu ${isSubMenuOpen.articles ? "" : "hidden"}`}
                            >
                                <ul>
                                    <li>
                                        <a href="">option 1</a>
                                    </li>
                                    <li>
                                        <a href="">option 2</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <label htmlFor="themeToggle" className="px-1 py-3 rounded-full toggle">
                            <span className="px-3 text">Residential</span>
                            <span className="px-3 text">Commercial</span>
                            <input type="checkbox" name="toggle" className="hidden" id="themeToggle" />
                            <div className="toggleSlider">
                                <div className="bg"></div>
                            </div>
                        </label>
                        {userDetails?.fname ? <div className="profile_btn">
                            <img src={profilePic} alt="Profile_pic" />
                            {userDetails?.fname}

                            <div className=" nav-submenu">
                                <ul>
                                    <li>
                                        <Link to="/profile"> <span>{profileIcon}</span> Profile</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => logout()}><span >{logoutIcon}</span>  Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div> :
                            <Link to="/login" className="loginBtn">Log In</Link>

                        }


                        <button className="hamburgerBtn">{hamburgerIcon}</button>
                    </nav>
                    <nav className="flex md:hidden">
                        {/* <button className="searchBoxBtn">
                            <span className="h-5 w-5">{searchLogo}</span>
                        </button> */}

                        <button
                            className="hamburgerBtn"
                            onClick={() => {
                                document.getElementById("navbar-mobile-wraper").classList.toggle("w-0-force");
                            }}>
                            {hamburgerIcon}
                        </button>
                    </nav>
                </div>
                <div className={`searchBox  w-full ${navBg ? "" : "hide"} d-flex d-md-none`}>
                    <input type="text" placeholder="Find your new construction " />
                    <button>
                        <span className="h-5 w-5">{searchLogo}</span>
                    </button>
                </div>
            </header>

            <div className="navbar-mobile-wraper w-0-force" id="navbar-mobile-wraper">
                <div className="navbar-mobile">
                    <ul>
                        <li className="has-submenu">
                            <a
                                className=""
                                on={(e) => {
                                    submenuToggle(e);
                                }}
                            >
                                <span className="h-5 w-5">{searchLogo}</span>

                                <span className="menu-title">Gallery</span>
                            </a>

                            <div className="submenu-list">
                                <ul className="">
                                    <li>
                                        <a>
                                            <span className="h-5 w-5">{imageIcon}</span>

                                            <span className="menu-title">Gallery</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="has-submenu">
                            <a
                                className=""
                                onClick={(e) => {
                                    submenuToggle(e);
                                }}>
                                <span className="h-5 w-5">{newsPaperIcon}</span>

                                <span className="menu-title">Article</span>
                            </a>

                            <div className="submenu-list">
                                <ul className="">
                                    <li>
                                        <a>
                                            <span className="h-5 w-5">{searchLogo}</span>

                                            <span className="menu-title">Gallery</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="">
                            <a
                                className=""
                                onClick={(e) => {
                                    submenuToggle(e);
                                }}>
                                <span className="h-5 w-5">{loginIcon}</span>

                                <span className="menu-title">Login</span>
                            </a>
                        </li>
                        <li className="">
                            <a
                                className=""
                                onClick={(e) => {
                                    submenuToggle(e);
                                }}>
                                <span className="h-5 w-5">
                                    <img src={profilePic} alt="Profile_pic" />
                                </span>

                                <span className="menu-title">Profile</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="mobile-tab-bottom">
                <div className="tab">
                    <span>
                        {homeIconSolid}
                    </span>
                    Home
                </div>
                <div className="tab">
                    <span>
                        {mapIcon}
                    </span>
                    Projects
                </div>
                <div className="tab">
                    <span>
                        {imageIcon}
                    </span>
                    Gallery
                </div>
                <div className="tab">
                    <span>
                        {profileIcon}
                    </span>
                    Account
                </div>

            </div>
        </>
    );
}

export default Navbar;

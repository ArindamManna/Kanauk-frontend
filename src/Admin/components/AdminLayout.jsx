import React, { useEffect } from 'react'
import "../scss/adminStyle.css";
import kaunuakLogo from "../asset/images/logo/kaunuck_logo_black.png"
import { Link, useNavigate } from 'react-router-dom';
import { ApiHelperFunction } from '../../Api/ApiHelperfunction';
function AdminLayout({ children }) {
    const navigate = useNavigate()
    useEffect(() => {
        let usertoken = localStorage.getItem("usertoken")
        verifyToken()
        if (usertoken == undefined) {
            navigate("./login")

        }
    }, [])
    async function verifyToken() {
        let res = await ApiHelperFunction({
            urlPath: "admin/verifytoken",
            method: "post",

        })
        if (!res.data?.isAdmin) {
            navigate("./login")
        }
        // console.log(res);
    }
    function submenuToggle(event) {
        event.target.closest('.has-submenu').classList.toggle('open');
    }
    return (
        <>
            <div className="layout has-sidebar fixed-sidebar fixed-header">
                <aside id="sidebar" className="sidebar break-point-lg has-bg-image">

                    <div className="sidebar-layout">
                        <div className="sidebar-header">
                            <span
                            // style="
                            //     text-transform: uppercase;
                            //     font-size: 15px;
                            //     letter-spacing: 3px;
                            //     font-weight: bold;
                            // "
                            ><img src={kaunuakLogo} className="w-100" />
                            </span>
                        </div>
                        <div className="sidebar-content">
                            <div className="ul-box mb-3">
                                <ul className="row">
                                    <li>
                                        <Link to={"/admin/project"} ><span className="w-100">
                                            {/* <img src="images/mi_user.png" /> */}
                                            {/* <br /> */}
                                            Projects</span></Link>
                                    </li>
                                    <li>
                                        <Link to={"/admin/builder"}>
                                            <span className="w-100">
                                                {/* <img src="images/customer.png" /> */}
                                                {/* <br /> */}
                                                Builders</span></Link>
                                    </li>
                                    <li>
                                        <a href="#"><span className="w-100">
                                            {/* <img src="images/order-approve-outline-sharp.png" /> */}
                                            {/* <br /> */}
                                            Agents</span></a>
                                    </li>
                                    <li>
                                        <a href="#"><span className="w-100">
                                            {/* <img src="images/ic_round-inventory.png" /> */}
                                            {/* <br /> */}
                                            Users</span></a>
                                    </li>
                                </ul>
                            </div>
                            <nav className="menu open-current-submenu navbar-mobile">
                                <ul className=''>
                                    <li className="menu-item sub-menu has-submenu">
                                        <a href="#" onClick={(e) => { submenuToggle(e) }} >
                                            <span className="menu-icon">
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.6925 1.75H10.3075C9.84337 1.75 9.39825 1.93437 9.07006 2.26256C8.74188 2.59075 8.5575 3.03587 8.5575 3.5V3.6575C8.55719 3.96438 8.47618 4.26579 8.3226 4.53148C8.16902 4.79717 7.94827 5.01781 7.6825 5.17125L7.30625 5.39C7.04022 5.54359 6.73844 5.62446 6.43125 5.62446C6.12406 5.62446 5.82229 5.54359 5.55625 5.39L5.425 5.32C5.02343 5.08835 4.54636 5.02551 4.0985 5.14527C3.65065 5.26503 3.26861 5.55759 3.03625 5.95875L2.84375 6.29125C2.61211 6.69282 2.54926 7.16989 2.66902 7.61775C2.78878 8.0656 3.08135 8.44764 3.4825 8.68L3.61375 8.7675C3.87824 8.9202 4.09817 9.13945 4.25167 9.40348C4.40517 9.6675 4.48691 9.9671 4.48875 10.2725V10.7188C4.48998 11.0271 4.4097 11.3303 4.25604 11.5977C4.10238 11.8651 3.88081 12.0871 3.61375 12.2412L3.4825 12.32C3.08135 12.5524 2.78878 12.9344 2.66902 13.3823C2.54926 13.8301 2.61211 14.3072 2.84375 14.7087L3.03625 15.0413C3.26861 15.4424 3.65065 15.735 4.0985 15.8547C4.54636 15.9745 5.02343 15.9116 5.425 15.68L5.55625 15.61C5.82229 15.4564 6.12406 15.3755 6.43125 15.3755C6.73844 15.3755 7.04022 15.4564 7.30625 15.61L7.6825 15.8288C7.94827 15.9822 8.16902 16.2028 8.3226 16.4685C8.47618 16.7342 8.55719 17.0356 8.5575 17.3425V17.5C8.5575 17.9641 8.74188 18.4092 9.07006 18.7374C9.39825 19.0656 9.84337 19.25 10.3075 19.25H10.6925C11.1566 19.25 11.6017 19.0656 11.9299 18.7374C12.2581 18.4092 12.4425 17.9641 12.4425 17.5V17.3425C12.4428 17.0356 12.5238 16.7342 12.6774 16.4685C12.831 16.2028 13.0517 15.9822 13.3175 15.8288L13.6938 15.61C13.9598 15.4564 14.2616 15.3755 14.5688 15.3755C14.8759 15.3755 15.1777 15.4564 15.4438 15.61L15.575 15.68C15.9766 15.9116 16.4536 15.9745 16.9015 15.8547C17.3494 15.735 17.7314 15.4424 17.9638 15.0413L18.1563 14.7C18.3879 14.2984 18.4507 13.8214 18.331 13.3735C18.2112 12.9256 17.9187 12.5436 17.5175 12.3112L17.3863 12.2412C17.1192 12.0871 16.8976 11.8651 16.744 11.5977C16.5903 11.3303 16.51 11.0271 16.5113 10.7188V10.2812C16.51 9.97288 16.5903 9.66967 16.744 9.40231C16.8976 9.13494 17.1192 8.91293 17.3863 8.75875L17.5175 8.68C17.9187 8.44764 18.2112 8.0656 18.331 7.61775C18.4507 7.16989 18.3879 6.69282 18.1563 6.29125L17.9638 5.95875C17.7314 5.55759 17.3494 5.26503 16.9015 5.14527C16.4536 5.02551 15.9766 5.08835 15.575 5.32L15.4438 5.39C15.1777 5.54359 14.8759 5.62446 14.5688 5.62446C14.2616 5.62446 13.9598 5.54359 13.6938 5.39L13.3175 5.17125C13.0517 5.01781 12.831 4.79717 12.6774 4.53148C12.5238 4.26579 12.4428 3.96438 12.4425 3.6575V3.5C12.4425 3.03587 12.2581 2.59075 11.9299 2.26256C11.6017 1.93437 11.1566 1.75 10.6925 1.75Z"
                                                        stroke="#BEC9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path
                                                        d="M10.5 13.125C11.9497 13.125 13.125 11.9497 13.125 10.5C13.125 9.05025 11.9497 7.875 10.5 7.875C9.05025 7.875 7.875 9.05025 7.875 10.5C7.875 11.9497 9.05025 13.125 10.5 13.125Z"
                                                        stroke="#BEC9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </span>
                                            <span className="menu-title">Settings</span>
                                        </a>
                                        <div className="sub-menu-list d-block">
                                            <ul>
                                                <li className="menu-item">
                                                    <a href="./setting-paper-type.html">
                                                        <span className="menu-title">Paper Type</span>
                                                    </a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="./setting-printing-products-type.html">
                                                        <span className="menu-title">Printing Product Type</span>
                                                    </a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="#">
                                                        <span className="menu-title">Paper Size Type</span>
                                                    </a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="#">
                                                        <span className="menu-title">Color Type</span>
                                                    </a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="#">
                                                        <span className="menu-title">Book Cover Type </span>
                                                    </a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="#">
                                                        <span className="menu-title">Binding Type</span>
                                                    </a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="#">
                                                        <span className="menu-title">Printing Plate Type</span>
                                                    </a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="#">
                                                        <span className="menu-title">Book Size Type</span>
                                                    </a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="#">
                                                        <span className="menu-title">Printing Machine Type</span>
                                                    </a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="#">
                                                        <span className="menu-title">General Setting</span>
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </aside>
                <div id="overlay" className="overlay"></div>
                <div className="layout">
                    <header className="header">
                        <a id="btn-collapse" className="header-bar" href="#">
                        </a>
                        <a id="btn-toggle" href="#" className="sidebar-toggler break-point-lg">
                            <i className="ri-bar-chart-horizontal-line"></i>
                        </a>
                        <div className="dropdown navbar-nav-right profile-img-text">
                            <a className="dropdown-toggle align-items-center btn btn-secondary dropdown-toggle" type="button"
                                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="d-flex">
                                    <span><img className="img-xs rounded-circle" src="images/face15.jpg" alt="" /></span>
                                    <span className="profile-text ms-2">
                                        <b>Welcome to<br /></b> Henry Klein</span>
                                </span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </header>
                    <div className="page-breadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                {/* <li className="breadcrumb-item">
                                    <a href="#"><i className="ri-home-4-line"></i></a>
                                </li> */}
                                <li className="breadcrumb-item">
                                    <a href="#" className="d-flex align-items-center text-decoration-none">Welcome Back, Admin</a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <main className="content">
                        {children}


                    </main>
                    <div className="overlay"></div>
                </div>
            </div>

        </>
    )
}

export default AdminLayout
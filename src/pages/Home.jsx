import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { left, right, rightArrow, searchLogo } from '../asset/staticData'
import Featured_Project_Card from '../components/Featured_Project_Card'
import Assignments_Sales_Card from '../components/Assignments_Sales_Card'
import builder1 from '../asset/images/builder1.png'
import Featured_Agents_Card from '../components/Featured_Agents_Card'
import popularCitiesBanner from '../asset/images/popularCitiesBanner.png'
import contactUs from '../asset/images/contactUs.png'
import callLogo from '../asset/images/logo/call.png'
import emailLogo from '../asset/images/logo/email.png'
import webLogo from '../asset/images/logo/web.png'
import PopularCities from '../components/PopularCities'
import Our_blog from '../components/Our_blog'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { updateGlobalState } from '../Redux/GlobalSlice'
import OwlCarousel from 'react-owl-carousel';
import Loader from '../components/Loader'
import { ApiHelperFunction } from '../Api/ApiHelperfunction'
import { Link } from 'react-router-dom'
import Swal from '../components/Swal'
import { type } from '@testing-library/user-event/dist/type'
import { options, options2, options3, options4 } from '../asset/carouselOptions'

function Home() {

    const dispatch = useDispatch()
    const [projectList, setProjectList] = useState([])
    const [builderList, setBuilderList] = useState([])
    const [properties, setProperties] = useState([])
    const [loader, setLoader] = useState(false)
    async function fetchProjectList(e) {
        // e.preventDefault();
        setLoader(true)
        let res = await ApiHelperFunction({
            urlPath: "users/project/all",
            method: "get",
        });
        if (res.data) {
            setProjectList(res.data);
            setLoader(false)

        } else {
            alert(res.error.message)
            setLoader(false)
            dispatch(updateGlobalState({
                swalDetails: {
                    isSwalOpen: true,
                    type: "error",
                    title: "Something went wrong",
                    text: "Please contact your administrator"
                }
            }))
        }
    }
    async function fetchBuilders(e) {
        // e.preventDefault();
        setLoader(true)
        let res = await ApiHelperFunction({
            urlPath: "users/builder/all",
            method: "get",
        });
        // console.log(res);
        if (res.data) {
            setBuilderList(res.data);
            setLoader(false)
        } else {
            alert(res.error.message)
            setLoader(false)
            dispatch(updateGlobalState({
                swalDetails: {
                    isSwalOpen: true,
                    type: "error",
                    title: "Something went wrong",
                    text: "Please contact your administrator"
                }
            }))
        }
    }
    async function fetchProperties(e) {
        // e.preventDefault();
        setLoader(true)
        let res = await ApiHelperFunction({
            urlPath: "users/property/all",
            method: "get",
        });
        // console.log(res);
        if (res.data) {
            setProperties(res.data);
            setLoader(false)
        } else {
            alert(res.error.message)
            setLoader(false)
            dispatch(updateGlobalState({
                swalDetails: {
                    isSwalOpen: true,
                    type: "error",
                    title: "Something went wrong",
                    text: "Please contact your administrator"
                }
            }))
        }
    }
    useEffect(() => {
        fetchProjectList()
        fetchBuilders()
        fetchProperties()
    }, [])







    // console.log("projectList", projectList);






    return (
        <>


            {loader ? <Loader /> : ""}
            {/* <Loader /> */}
            <Navbar />
            <section className='home-banner padding'>
                <h1>
                    All you need is one click away
                </h1>
                <h3 className='mb-3'>
                    Find your new construction home
                </h3>
                <div className="searchBox mb-10 w-full md:w-[32rem]">
                    <input type="text" placeholder='Find your new construction ' />
                    <button>
                        <span className='h-5 w-5'>

                            {searchLogo}
                        </span>
                    </button>
                </div>

                <div className='latestProject'>
                    <p>
                        Latest Projects:
                    </p>
                    <div className="btns">
                        {projectList?.toReversed().map((item, i) => {
                            if (i < 4) {
                                return <Link className="projectBtn" key={i} to={`/projectdetails/?project_id=${item?._id}`}>
                                    {item?.name}
                                </Link>
                            } else {
                                return <></>
                            }

                        })}
                        <Link className="projectBtn" to={`/projects`}>
                            View All
                        </Link>

                    </div>
                </div>
            </section>
            <section className='featured-projects-banner padding '>
                <h3>
                    Featured Projects
                </h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

                <div className="projects_slider">
                    {/* <button className='carosolBtn backBtn -left-8 -translate-x-1/2'>

                        <span>

                            {left}
                        </span>
                    </button>
                    <button className='carosolBtn forwardBtn -right-8 translate-x-1/2'>
                        <span>

                            {right}
                        </span>
                    </button> */}
                    {projectList?.length > 0 ?
                        <OwlCarousel className='owl-theme px-4 lg:px-0'{...options}>
                            {projectList?.map((item, index) => {
                                // console.log(item)
                                return <div className='item' key={index}><Featured_Project_Card data={item} /> </div>
                            })}


                        </OwlCarousel> : ""}
                </div>
            </section>
            <section className='padding assignments-sales-banner d-none'>
                <div className="flex flex-col md:flex-row gap-6 md:justify-between items-center mb-10 md:mb-16 xl:mb-24">
                    <h3>
                        Assignment Sales
                    </h3>
                    <button className='viewMoreBtn'>
                        View More
                        <span>
                            {right}
                        </span>
                    </button>
                </div>
                <div className="assignments-salesBox">
                    <Assignments_Sales_Card />
                    <Assignments_Sales_Card />
                    <Assignments_Sales_Card />
                    <Assignments_Sales_Card />
                    <Assignments_Sales_Card />
                    <Assignments_Sales_Card />
                    <Assignments_Sales_Card />
                </div>
            </section>
            <section className='padding featured-builder-banner '>
                <div className=" mb-6 md:mb-10 xl:mb-16">
                    <h3>
                        Featured Builders
                    </h3>

                </div>
                <div className="featured-builder-slider">

                    {builderList?.length > 0 ?
                        <OwlCarousel className='owl-theme px-4 lg:px-0'{...options2}>
                            {builderList?.map((item, index) => {
                                // console.log(item)
                                return <div className='item' key={index}>
                                    <img src={item?.image?.url} alt="" />

                                </div>
                            })}


                        </OwlCarousel> : ""}
                    {/* <OwlCarousel className='owl-theme  px-4 lg:px-0'{...options2}>

                        <div className='item'>
                            <img src={builder1} alt="" />

                        </div>
                        <div className='item'>
                            <img src={builder1} alt="" />

                        </div>
                        <div className='item'>
                            <img src={builder1} alt="" />

                        </div>
                        <div className='item'>
                            <img src={builder1} alt="" />

                        </div>
                        <div className='item'>
                            <img src={builder1} alt="" />

                        </div>
                        <div className='item'>
                            <img src={builder1} alt="" />

                        </div>
                        <div className='item'>
                            <img src={builder1} alt="" />

                        </div>
                    </OwlCarousel> */}



                </div>
            </section>
            <section className='featured-properties-banner '>
                <div className="flex flex-col items-center ">
                    <h3 className='mb-9'>
                        Featured Properties
                    </h3>
                    <div className="properties-box">
                        {properties?.length > 0 ?
                            <OwlCarousel className='owl-theme px-4 lg:px-0'{...options3}>
                                {properties?.map((item, index) => {
                                    // console.log(item)
                                    return <div className='item' key={index}>
                                        <div className="properties" style={{
                                            backgroundImage: `url(${item?.images?.[0]?.url})`
                                        }}>
                                            <div className="bottom">
                                                <p className="title">
                                                    {item?.name}
                                                </p>
                                                <p className="description">
                                                    {item?.description}
                                                </p>
                                                <Link to={`/propertyDetails/?property_id=${item?._id}`} className='viewMoreBtn'>
                                                    View More <span>
                                                        {rightArrow}
                                                    </span>
                                                </Link>
                                            </div>

                                        </div>

                                    </div>
                                })}


                            </OwlCarousel> : ""}




                    </div>

                </div>

            </section>
            <section className='featured-agents-banner padding '>
                <div className="flex flex-col items-center">
                    <h3 className='mb-9'>
                        Featured Agents
                    </h3>
                    <div className="agents-box">
                        <OwlCarousel className='owl-theme px-4 lg:px-0'{...options4}>

                            <div className='item'>

                                <Featured_Agents_Card />
                            </div>
                            <div className='item'>

                                <Featured_Agents_Card />
                            </div>
                            <div className='item'>

                                <Featured_Agents_Card />
                            </div>
                        </OwlCarousel>

                        {/* <button className='carosolBtn backBtn -left-8 -translate-x-1/2'>

                            <span>

                                {left}
                            </span>
                        </button>
                        <button className='carosolBtn forwardBtn -right-8 translate-x-1/2'>
                            <span>

                                {right}
                            </span>
                        </button> */}
                    </div>

                </div>

            </section>
            <section className='popular-cities-banner padding '>
                <div className="flex items-center flex-col md:flex-row mb-14">

                    <div className="left md:w-1/2">
                        <h3 className='mb-9'>
                            Popular Cities
                        </h3>
                        <p className="description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="right md:w-1/2">
                        <img src={popularCitiesBanner} alt="" />
                    </div>
                </div>


                <div className="popularCities-box">
                    <OwlCarousel className='owl-theme px-4 lg:px-0'{...options4}>

                        <div className='item'>
                            <PopularCities />
                        </div>
                        <div className='item'>
                            <PopularCities />
                        </div>
                        <div className='item'>
                            <PopularCities />
                        </div>
                        <div className='item'>
                            <PopularCities />
                        </div>
                        <div className='item'>
                            <PopularCities />
                        </div>
                        <div className='item'>
                            <PopularCities />
                        </div>
                    </OwlCarousel>
                    {/* <button className='carosolBtn backBtn -left-8 -translate-x-1/2'>

                        <span>

                            {left}
                        </span>
                    </button>
                    <button className='carosolBtn forwardBtn -right-8 translate-x-1/2'>
                        <span>

                            {right}
                        </span>
                    </button> */}

                </div>



            </section>
            <section className='our-blogs-banner padding '>
                <Our_blog className="col-span-2 hidden lg:block" />




                <div className=' col-span-3 flex flex-col justify-between'>

                    <div className="top-right mb-4 md:mb-6 xl:mb-8">
                        <div className="flex md:mb-6  mb-4 lg:mb-9 items-center justify-between w-full">

                            <h3 className=''>
                                Our Blogs
                            </h3>
                            <div className="flex items-center gap-4">
                                <button className='carosolBtn backBtn '>
                                    <span>
                                        {left}
                                    </span>
                                </button>
                                <button className='carosolBtn forwardBtn '>
                                    <span>
                                        {right}
                                    </span>
                                </button>
                            </div>
                        </div>
                        <p className="description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <a href="#">Read More</a>
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        <Our_blog className="small" />
                        <Our_blog className="small" />
                    </div>
                </div>

            </section>

            <section className='contactUs-banner '>
                <div className="left">
                    <img src={contactUs} alt="" />
                </div>
                <div className="right ">
                    <h3 className='mb-12'>
                        Contact us
                    </h3>
                    <p className="phoneNo mb-2">
                        <img src={callLogo} alt="" />
                        +91 6362482947
                    </p>
                    <div className="flex gap-3 flex-wrap  md:gap-6 items-center mb-8">
                        <p className="email">
                            <img src={emailLogo} alt="" />
                            kanauk@Gmail.com
                        </p>
                        <p className="web">
                            <img src={webLogo} alt="" />
                            WWW.kanauk.in
                        </p>
                    </div>
                    <form action="" className='contactUsForm'>
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Email' />
                        <textarea type="text" placeholder='Message' />
                    </form>
                </div>

            </section>
            <Footer />
        </>
    )
}

export default Home
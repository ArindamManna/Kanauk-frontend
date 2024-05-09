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

function Home() {
    const [projectList, setProjectList] = useState([])
    const [loader, setLoader] = useState(false)
    async function fetchProjectList(e) {
        // e.preventDefault();
        setLoader(true)
        let res = await ApiHelperFunction({
            urlPath: "users/project/all",
            method: "get",
        });
        console.log(res);
        if (res.data) {
            setProjectList(res.data);
            setLoader(false)
        } else {
            alert(res.error.message)
            setLoader(false)
        }
    }
    useEffect(() => {
        fetchProjectList()
    }, [])




    console.log("projectList", projectList);





    let options = {
        items: 3,
        loop: true,
        nav: true,
        dots: false,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 5000,
        navText: [`<button className='p-0 carosolBtn backBtn left-0 xl:-left-8 -translate-x-1/2'><span><svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg></span> </button>`,
            `  <button className='p-0 carosolBtn forwardBtn right-0 xl:-right-8 translate-x-1/2'><span><svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg></span></button>`],
        responsive: {
            0: {
                items: 1,
            },
            300: {
                items: 1,
            },
            450: {
                items: 2,
            },
            570: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1024: {
                items: 4,
            },
            1400: {
                items: 5,
            },

        }
    }
    let options2 = {
        items: 3,
        loop: true,
        nav: true,
        dots: false,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 5000,
        navText: [`<button className='p-0 carosolBtn backBtn left-0 xl:-left-8 -translate-x-1/2'><span><svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg></span> </button>`,
            `  <button className='p-0 carosolBtn forwardBtn right-0 xl:-right-8 translate-x-1/2'><span><svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg></span></button>`],
        responsive: {
            0: {
                items: 2,
            },
            300: {
                items: 2,
            },
            450: {
                items: 3,
            },
            570: {
                items: 3,
            },
            768: {
                items: 4,
            },
            992: {
                items: 5,
            },
            1024: {
                items: 5,
            },
            1400: {
                items: 6,
            },

        }
    }
    let options3 = {
        items: 3,
        loop: true,
        nav: false,
        dots: false,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        navText: [`<button className='p-0 hide carosolBtn backBtn left-0 xl:-left-8 -translate-x-1/2'><span><svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg></span> </button>`,
            `  <button className='p-0 hide carosolBtn forwardBtn right-0 xl:-right-8 translate-x-1/2'><span><svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg></span></button>`],

        responsive: {
            0: {
                items: 1,
            },
            570: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },


        }
    }
    let options4 = {
        items: 3,
        loop: true,
        nav: true,
        dots: false,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 5000,
        navText: [`<button className='p-0  carosolBtn backBtn left-0 xl:-left-8 -translate-x-1/2'><span><svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg></span> </button>`,
            `  <button className='p-0  carosolBtn forwardBtn right-0 xl:-right-8 translate-x-1/2'><span><svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg></span></button>`],

        responsive: {
            0: {
                items: 1,
            },
            570: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },


        }
    }

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
                        <button className="projectBtn active">
                            Project 1
                        </button>
                        <button className="projectBtn">
                            Project 2
                        </button>
                        <button className="projectBtn">
                            Project 3
                        </button>
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
                    {/* <OwlCarousel className='owl-theme px-4 lg:px-0'{...options}> */}
                    {projectList?.map((item, index) => {
                        console.log(item)
                        return <div className='item' key={index}><Featured_Project_Card data={item} /> </div>
                    })}


                    {/* </OwlCarousel> */}
                </div>
            </section>
            <section className='padding assignments-sales-banner'>
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
                <div className=" mb-10 md:mb-16 xl:mb-24">
                    <h3>
                        Featured Builders
                    </h3>

                </div>
                <div className="featured-builder-slider">
                    <OwlCarousel className='owl-theme px-4 lg:px-0'{...options2}>

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
                    </OwlCarousel>


                    {/* 
                    <button className='carosolBtn backBtn -left-8 -translate-x-1/2'>
                        <span>
                            {left}
                        </span>
                    </button>
                    <button className='carosolBtn forwardBtn -right-8 translate-x-1/2'>
                        <span>
                            {right}
                        </span>
                    </button>
                    <img src={builder1} alt="" />
                    <img src={builder1} alt="" />
                    <img src={builder1} alt="" />
                    <img src={builder1} alt="" />
                    <img src={builder1} alt="" /> */}
                </div>
            </section>
            <section className='featured-properties-banner '>
                <div className="flex flex-col items-center ">
                    <h3 className='mb-9'>
                        Featured Properties
                    </h3>
                    <div className="properties-box">
                        <OwlCarousel className='owl-theme '{...options3}>

                            <div className='item'>
                                <div className="properties">
                                    <div className="bottom">
                                        <p className="title">
                                            Lorem Ipsum
                                        </p>
                                        <p className="description">
                                            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                        </p>
                                        <button className='viewMoreBtn'>
                                            View More <span>
                                                {rightArrow}
                                            </span>
                                        </button>
                                    </div>

                                </div>

                            </div>
                            <div className='item'>
                                <div className="properties">
                                    <div className="bottom">
                                        <p className="title">
                                            Lorem Ipsum
                                        </p>
                                        <p className="description">
                                            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                        </p>
                                        <button className='viewMoreBtn'>
                                            View More <span>
                                                {rightArrow}
                                            </span>
                                        </button>
                                    </div>

                                </div>

                            </div>
                            <div className='item'>
                                <div className="properties">
                                    <div className="bottom">
                                        <p className="title">
                                            Lorem Ipsum
                                        </p>
                                        <p className="description">
                                            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                        </p>
                                        <button className='viewMoreBtn'>
                                            View More <span>
                                                {rightArrow}
                                            </span>
                                        </button>
                                    </div>

                                </div>

                            </div>
                        </OwlCarousel>



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
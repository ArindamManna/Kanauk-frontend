import React from 'react'
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

function Home() {
    // const Dispatch = useDispatch()
    // const { count } = useSelector((state, action) => {
    //     const { count } = state?.GlobalSlice
    //     return {
    //         count
    //     }
    // })
    // console.log(count);

    return (
        <>
            <Navbar />
            <section className='home-banner padding'>
                <h1>
                    All you need is one click away
                </h1>
                <h3 className='mb-3'>
                    Find your new construction home
                </h3>
                <div className="searchBox mb-10 w-[32rem]">
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
            <section className='featured-projects-banner padding'>
                <h3>
                    Featured Projects
                </h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

                <div className="projects_slider">
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
                    <Featured_Project_Card />
                    <Featured_Project_Card />
                    <Featured_Project_Card />
                    <Featured_Project_Card />
                </div>
            </section>
            <section className='padding assignments-sales-banner'>
                <div className="flex justify-between items-center mb-24">
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
            <section className='padding featured-builder-banner'>
                <div className="flex justify-between items-center mb-24">
                    <h3>
                        Featured Builders
                    </h3>

                </div>
                <div className="featured-builder-slider">
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
                    <img src={builder1} alt="" />
                </div>
            </section>
            <section className='featured-properties-banner'>
                <div className="flex flex-col items-center ">
                    <h3 className='mb-9'>
                        Featured Properties
                    </h3>
                    <div className="properties-box">
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

                </div>

            </section>
            <section className='featured-agents-banner padding'>
                <div className="flex flex-col items-center">
                    <h3 className='mb-9'>
                        Featured Agents
                    </h3>
                    <div className="agents-box">
                        <Featured_Agents_Card />
                        <Featured_Agents_Card />
                        <Featured_Agents_Card />

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
                    </div>

                </div>

            </section>
            <section className='popular-cities-banner padding'>
                <div className="flex items-center mb-14">

                    <div className="left w-1/2">
                        <h3 className='mb-9'>
                            Popular Cities
                        </h3>
                        <p className="description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="right w-1/2">
                        <img src={popularCitiesBanner} alt="" />
                    </div>
                </div>


                <div className="popularCities-box">
                    <PopularCities />
                    <PopularCities />
                    <PopularCities />
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

                </div>



            </section>
            <section className='our-blogs-banner padding'>
                <Our_blog className="col-span-2 " />




                <div className=' col-span-3 flex flex-col justify-between'>

                    <div className="top-right ">
                        <div className="flex mb-9 items-center justify-between w-full">

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
                    <div className="grid grid-cols-2 gap-5">
                        <Our_blog className="small" />
                        <Our_blog className="small" />
                    </div>
                </div>

            </section>

            <section className='contactUs-banner '>
                <div className="left">
                    <img src={contactUs} alt="" />
                </div>
                <div className="right padding-r">
                    <h3 className='mb-12'>
                        Contact us
                    </h3>
                    <p className="phoneNo mb-2">
                        <img src={callLogo} alt="" />
                        +91 6362482947
                    </p>
                    <div className="flex gap-6 items-center mb-8">
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
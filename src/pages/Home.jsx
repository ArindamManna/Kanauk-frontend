import React from 'react'
import Navbar from '../components/Navbar'
import { left, right, searchLogo } from '../asset/staticData'
import Featured_Project_Card from '../components/Featured_Project_Card'
import Assignments_Sales_Card from '../components/Assignments_Sales_Card'

function Home() {
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
                </div>
            </section>
        </>
    )
}

export default Home
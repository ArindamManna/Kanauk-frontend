import React from 'react'
import { downArrow, hamburgerIcon, heartSolid } from '../asset/staticData'
import Project_List_Card from '../components/Project_List_Card'

function ProjectListing() {
    return (
        <>
            <section className="projectliisting padding">

                <div className="filterBox">
                    <div className="left">
                        <div className="dropdown-btn">
                            <button>
                                For Sale
                                <span>
                                    {downArrow}
                                </span>
                            </button>

                        </div>
                        <div className="dropdown-btn">
                            <button>
                                For Sale
                                <span>
                                    {downArrow}
                                </span>
                            </button>

                        </div>
                        <div className="dropdown-btn">
                            <button>
                                For Sale
                                <span>
                                    {downArrow}
                                </span>
                            </button>

                        </div>

                    </div>
                    <div className="right">
                        <div className="dropdown-btn">
                            <button>
                                Save Search
                                <span>
                                    {heartSolid}
                                </span>
                            </button>

                        </div>
                        <div className="dropdown-btn">
                            <button>
                                List
                                <span>
                                    {hamburgerIcon}
                                </span>
                            </button>

                        </div>

                    </div>

                </div>
                <div className="listing-map-section">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52518.04296442333!2d88.39201804754333!3d22.566220579850853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771346ae015d%3A0xb540e4bce39763!2sVictoria%20Memorial!5e0!3m2!1sen!2sin!4v1713609339242!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div className="listingBox">
                        <p className="noOfComments">
                            256 Comments
                        </p>
                        <div className="flex mb-4 justify-between gap-4">
                            <p className="title">
                                New construction homes for sale in New York, NY
                            </p>
                            <div className="dropdown-btn">
                                <button>
                                    Sort: Featured
                                    <span>
                                        {hamburgerIcon}
                                    </span>
                                </button>

                            </div>

                        </div>

                        <div className="project-list-cards">
                            <Project_List_Card />
                            <Project_List_Card />
                            <Project_List_Card />
                            <Project_List_Card />
                            <Project_List_Card />
                            <Project_List_Card />
                            <Project_List_Card />

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default ProjectListing
import React, { useEffect, useState } from 'react'
import { downArrow, hamburgerIcon, heartSolid } from '../asset/staticData'
import Project_List_Card from '../components/Project_List_Card'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectsList_Maps from '../components/ProjectsList_Maps'
import { useDispatch } from 'react-redux'
import { ApiHelperFunction } from '../Api/ApiHelperfunction'
import { updateGlobalState } from '../Redux/GlobalSlice'
import Loader from '../components/Loader'

function ProjectListing() {

    const dispatch = useDispatch()
    const [projectList, setProjectList] = useState([])
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
    useEffect(() => {
        fetchProjectList()
    }, [])
    return (
        <>
            {loader ? <Loader /> : ""}
            <Navbar />
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
                    <ProjectsList_Maps projectList={projectList} />
                    <div className="listingBox">
                        <p className="noOfComments">
                            256 Comments
                        </p>
                        <div className="flex mb-4 flex-col md:flex-row justify-between gap-4">
                            <p className="title">
                                New construction homes for sale in New York, NY
                            </p>
                            <div className="dropdown-btn ml-auto">
                                <button>
                                    Sort: Featured
                                    <span>
                                        {hamburgerIcon}
                                    </span>
                                </button>

                            </div>

                        </div>

                        <div className="project-list-cards">
                            {projectList?.map((item, i) => {
                                return <Project_List_Card key={i} data={item} />
                            })}

                        </div>

                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default ProjectListing
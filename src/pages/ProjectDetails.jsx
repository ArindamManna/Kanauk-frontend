import React, { useEffect, useState } from 'react'
import { MailSolid, heartSolid, imageIcon, left, locationIcon, phoneIcon, right, starFill, tickCircle } from '../asset/staticData'
import projectDetailsImage1 from "../asset/images/projectDetailsImage1.png"
import projectDetailsImage2 from "../asset/images/projectDetailsImage2.png"
import projectDetailsImage3 from "../asset/images/projectDetailsImage3.png"
import projectDetailsImage4 from "../asset/images/projectDetailsImage4.png"
import agents1 from "../asset/images/agents1.png"
import builderLogo from "../asset/images/builderLogo.png"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLocation, useSearchParams } from 'react-router-dom'
import { ApiHelperFunction } from '../Api/ApiHelperfunction'
import Loader from '../components/Loader'
import { getObjFromList, update } from '../asset/commonFuntions'
import { Selling_ststus_list, buildingType_list, highlights_type_list, listning_ststus_list } from '../asset/staticLists'
import { updateGlobalState } from '../Redux/GlobalSlice'
import { useDispatch } from 'react-redux'
import { options, projectDetailsImagesOptions } from '../asset/carouselOptions'
import OwlCarousel from 'react-owl-carousel';

function ProjectDetails() {
    const dispatch = useDispatch();
    const [projectdetails, setProjectdetails] = useState({});
    let location = useLocation()
    // console.log(location, "location");
    const [loader, setLoader] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams();
    let project_id = searchParams.get("project_id")

    const inhitialFormdata = {
        fname: "",
        lname: "",
        pnone: "",
        email: "",
        message: "",


    };
    const [formdata, setFormdata] = useState(inhitialFormdata);

    function updateFormdata({ e, position, value }) {
        let result = update({ position, value, form: formdata });
        setFormdata(prev => ({ ...prev, ...result }));
    }

    useEffect(() => {
        fetchProjectdetails()
    }, []);
    async function fetchProjectdetails() {
        setLoader(true)
        let res = await ApiHelperFunction({
            urlPath: `users/project/${project_id}`,
            method: "get",
        });
        setLoader(false)
        console.log(res);
        if (res.data) {
            setProjectdetails(res.data)
        }
    }
    async function contactSalesCenter(e) {
        e.preventDefault();
        console.log(formdata);
        setLoader(true);
        let res = await ApiHelperFunction({
            urlPath: "users/contactus",
            method: "post",
            formData: formdata,
        });
        if (res.data) {
            setLoader(false);
            dispatch(updateGlobalState({
                swalDetails: {
                    isSwalOpen: true,
                    type: "success",
                    title: "Success",
                    text: "Request is sent successfully",
                    okBtnOnclick: () => { }
                }
            }))




        } else {
            console.log(res);
            // alert(res.error.message);
            setLoader(false);
            dispatch(updateGlobalState({
                swalDetails: {
                    isSwalOpen: true,
                    type: "error",
                    title: "Something went wrong",
                    text: res.error.message
                }
            }))
        }
    }
    return (
        <>
            {loader ? <Loader /> : ""}
            <Navbar />
            <section className='pageBreadcrumb padding'>
                <p>
                    Home / NY / Newyork (Metropolitan Area) / Newyork Country / Manhattan / Theater / District / Central park tower
                </p>
                <div className='flex justify-end items-center gap-4'>
                    <button>
                        <span>
                            {MailSolid}
                        </span> Share
                    </button>
                    <button>
                        <span>
                            {heartSolid}
                        </span> Save
                    </button>

                </div>

            </section>

            <section className='projectDetails-gallery padding'>
                <div className="top">

                    <h3>
                        {projectdetails?.name}
                    </h3>
                    <div className="right ml-auto">
                        <button className='active'>
                            Overview
                        </button>
                        <button className=''>
                            Floor Plans(12)
                        </button>
                        <button className=''>
                            Images(26)
                        </button>
                    </div>
                </div>
                <div className="gallery">
                    {projectdetails?.images?.length > 0 ?
                        <OwlCarousel className='owl-theme '{...projectDetailsImagesOptions}>

                            {projectdetails?.images?.map((item, index, arr) => {
                                console.log(index, index % 4)
                                if (index % 4 == 0) {

                                    return <div className='item' key={index}>
                                        <div className='col-span-2 row-span-2 imgHoverAnimation' >
                                            <img src={projectdetails?.images[index]?.url} alt="" />
                                        </div>

                                        {
                                            projectdetails?.images[index + 1] &&
                                            <div className=' imgHoverAnimation' >
                                                <img src={projectdetails?.images[index + 1]?.url} alt="" />
                                            </div>
                                        }
                                        {
                                            projectdetails?.images[index + 2] &&
                                            <div className=' imgHoverAnimation' >
                                                <img src={projectdetails?.images[index + 2]?.url} alt="" />
                                            </div>
                                        }
                                        {
                                            projectdetails?.images[index + 3] &&
                                            <div className='col-span-2  imgHoverAnimation' >
                                                <img src={projectdetails?.images[index + 3]?.url} alt="" />
                                            </div>
                                        }
                                    </div>
                                }
                            })}

                            {/* <img src={projectDetailsImage2} alt="" className='hidden lg:block' />
                            <img src={projectDetailsImage3} alt="" className='hidden lg:block' />
                            <img src={projectDetailsImage4} alt="" className='col-span-2 hidden lg:block' /> */}
                            {/* <div className="imageCount-carosel">
                        
                        <div className="btns">
                            <button>
                                <span>

                                    {left}
                                </span>
                            </button>
                            <button>
                                <span>

                                    {right}
                                </span>
                            </button>
                        </div>
                    </div> */}

                        </OwlCarousel> : ""}
                    <div className="count">
                        <span>
                            {imageIcon}
                        </span>
                        {projectdetails?.images?.length}
                    </div>
                </div>
            </section>

            <section className='projectDetails-main padding'>
                <div className="left">
                    <div className="bilder">
                        <img src={projectdetails?.builder?.image?.url} alt="" />
                        <p className="name">
                            {projectdetails?.builder?.name}
                        </p>
                    </div>
                    <div className="locaiton">
                        <span>
                            {locationIcon}
                        </span>
                        <p>
                            {projectdetails?.location?.label}
                        </p>
                    </div>
                    <div className="review">
                        <span>
                            {starFill}
                        </span>
                        <p>
                            4.8

                            <span>
                                ({projectdetails?.reviews?.length} Reviews)
                            </span>
                        </p>
                    </div>
                    <p className='listing-status'>
                        Listing status :  <span>{getObjFromList({ list: listning_ststus_list, matchdata: { name: "value", value: projectdetails?.listingStatus } })?.label}</span>
                    </p>
                    <p className="price ">
                        Price : ${projectdetails?.price?.from} to ${projectdetails?.price?.to}
                    </p>
                    <div className="project-highlights">
                        {projectdetails?.highlights?.map((item, i) => {
                            let obj = getObjFromList({
                                list: highlights_type_list,
                                matchdata: { name: "value", value: item?.type }
                            })
                            return <div className="item" key={i}>
                                <p className="title">
                                    {obj?.label}
                                </p>
                                <div className="flex items-center gap-1">
                                    <span>
                                        <img src={obj?.img} alt="" />
                                    </span>
                                    <p>{item?.quantity}</p>

                                </div>
                            </div>
                        })}



                    </div>
                    <p className="description">
                        <span> Description:</span>
                        {projectdetails?.description}
                    </p>

                    <div className="avalilable-homes">
                        <p className="title">
                            Available Homes
                        </p>
                        <div className="links">
                            <button className='active'>
                                Floor plans
                            </button>
                            <button>
                                Uits(9)
                            </button>
                            <button>
                                Floor plans
                            </button>

                        </div>

                        <p className='gray'>
                            <span>
                                {projectdetails?.floorPlans?.heading}
                            </span>
                            <br />
                            {projectdetails?.floorPlans?.text}


                        </p>
                        <p className=''>
                            <span>
                                Overview
                            </span>
                            <br />

                            {projectdetails?.overview}

                        </p>
                    </div>

                </div>
                <div className="right">
                    <div className="contact-sales-center">
                        <div className="top">
                            <div className="img">
                                <img src={agents1} alt="" />
                            </div>
                            <p className="name">
                                Jhon Trawres
                            </p>
                            <p className="designation">
                                Sales Reprenststive
                            </p>
                            <a href="#" className='view-profile-link'>View Profile</a>
                            <button className='call-now-btn btn'>
                                <span>
                                    {phoneIcon}
                                </span>
                                Call Now
                            </button>
                            <button className='msg-btn btn'>
                                <span>
                                    {MailSolid}
                                </span>
                                Send A Message
                            </button>
                            <div className='hr bg-white'></div>
                        </div>
                        <div className="form">
                            <p className="title">
                                Contact sales center
                            </p>
                            <form action="" onSubmit={(e) => { contactSalesCenter(e) }}>
                                <div className="inputBox">
                                    <input type="text" placeholder='First Name'

                                        onChange={(e) => {
                                            updateFormdata({
                                                position: {

                                                    name: "fname",
                                                },
                                                value: e.target.value
                                            })
                                        }}
                                    />
                                </div>
                                <div className="inputBox">
                                    <input type="text" placeholder='Last Name'
                                        onChange={(e) => {
                                            updateFormdata({
                                                position: {

                                                    name: "lname",
                                                },
                                                value: e.target.value
                                            })
                                        }} />
                                </div>
                                <div className="inputBox col-span-2">
                                    <input type="text" placeholder='Phone Number'
                                        onChange={(e) => {
                                            updateFormdata({
                                                position: {

                                                    name: "phone",
                                                },
                                                value: e.target.value
                                            })
                                        }}

                                    />
                                </div>
                                <div className="inputBox col-span-2">
                                    <input type="text" placeholder='Email'

                                        onChange={(e) => {
                                            updateFormdata({
                                                position: {

                                                    name: "email",
                                                },
                                                value: e.target.value
                                            })
                                        }}
                                    />
                                </div>
                                <div className="inputBox col-span-2">
                                    <textarea name="" id="" rows="3" placeholder='Messege...'
                                        onChange={(e) => {
                                            updateFormdata({
                                                position: {

                                                    name: "message",
                                                },
                                                value: e.target.value
                                            })
                                        }}
                                    ></textarea>
                                </div>
                                <p className='note-para col-span-2'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <div className='col-span-2 px-10'>

                                    <button type='submit' className='req-btn btn '>

                                        Request Info
                                    </button>
                                </div>

                            </form>

                        </div>
                    </div>
                    <div className="community-location">
                        <p className="title">
                            Community location
                        </p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52518.04296442333!2d88.39201804754333!3d22.566220579850853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771346ae015d%3A0xb540e4bce39763!2sVictoria%20Memorial!5e0!3m2!1sen!2sin!4v1713609339242!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>

                <div className="highlited-details mt-8">
                    <p className="title">
                        {projectdetails?.name}
                    </p>
                    <p className="para">
                        Building Type:{getObjFromList({
                            list: buildingType_list,
                            matchdata: { name: "value", value: projectdetails?.details?.buildingType }
                        })?.label} | Ownership:{projectdetails?.details?.ownership?.ownerName}  | Selling Status: {getObjFromList({
                            list: Selling_ststus_list,
                            matchdata: { name: "value", value: projectdetails?.details?.sellingStatus }
                        })?.label} | Construction Status:Complete Builder(s): Dajia Insurance Group | Architect(s): {projectdetails?.details?.architect?.name} | Interior Designer(s): {projectdetails?.details?.interiorDesigner?.name} | Marketing Company: {projectdetails?.details?.marketingCompany?.name} | Sales Company: {projectdetails?.details?.salesCompany?.name}
                    </p>
                </div>

                <div className="features-amenitis-details">

                    <div className="amenitis-details">
                        <p className="title">
                            Amenities
                        </p>
                        <div className='list'>
                            {projectdetails?.amenitiesList?.map((item, i) => {
                                return <div className="item" key={i}>
                                    <span>
                                        {tickCircle}
                                    </span>
                                    <p>
                                        {item?.label}
                                    </p>
                                </div>
                            })}


                        </div>


                    </div>
                    <div className="feature-details">
                        <p className="title">
                            Features & Finishes
                        </p>
                        <p className="subtitle">
                            {projectdetails?.features_finises?.subTitle}
                        </p>
                        <p className="para">
                            {/* <span>
                                RESIDENCES
                            </span> <br /> */}
                            {projectdetails?.features_finises?.description}
                        </p>


                    </div>

                </div>

            </section>

            <section className='constraction-banner-section'>
                <div className='bannerwraper'>

                    <img src={projectDetailsImage1} alt="" />
                    <div className="content">
                        <p className="title">
                            {projectdetails?.name} Marketing Summary
                        </p>
                        <p className="para">
                            {projectdetails?.details?.marketingCompany?.marketingSummery}
                            <br />
                            <span>
                                Source: The Towers of the Waldorf Astoria
                            </span>
                        </p>

                    </div>
                    <img src={projectDetailsImage1} alt="" className='hidden md:block' />
                </div>

                <div className="links-details padding">

                    <div className="highlited-details">
                        <p className="title">
                            Spring Valley Construction sales center
                        </p>
                        <p className="para">
                            Address: 305 Park Avenue, New York, NY 10022 | Availability: VIRTUAL AND IN-PERSON APPOINTMENTS AVAILABLE Phone: 212-***-**** | Links:
                        </p>

                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default ProjectDetails
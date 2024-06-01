import React, { useEffect, useState } from 'react'
import { MailSolid, heartSolid, imageIcon, locationIcon, starFill, tickCircle } from '../asset/staticData'


import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLocation, useSearchParams } from 'react-router-dom'
import { ApiHelperFunction } from '../Api/ApiHelperfunction'
import Loader from '../components/Loader'
import { getObjFromList } from '../asset/commonFuntions'
import { Selling_ststus_list, buildingType_list, highlights_type_list, listning_ststus_list } from '../asset/staticLists'
import { propertyDetailsImagesOptions } from '../asset/carouselOptions'
import OwlCarousel from 'react-owl-carousel';
import Unit_card from '../components/Unit_card'
import Contact_Sales_Center from '../components/Contact_Sales_Center'

function PropertyDetails() {


    let location = useLocation()
    // console.log(location, "location");
    const [loader, setLoader] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams();
    let property_id = searchParams.get("property_id");


    const [propertyDetails, setPropertyDetails] = useState({});




    useEffect(() => {
        fetchPropertydetails()
    }, []);
    async function fetchPropertydetails() {
        setLoader(true)
        let res = await ApiHelperFunction({
            urlPath: `users/property/${property_id}`,
            method: "get",
        });
        setLoader(false)
        console.log(res);
        if (res.data) {
            setPropertyDetails(res.data)
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
                        {propertyDetails?.name}
                    </h3>

                </div>
                <div className="gallery">
                    {propertyDetails?.images?.length > 0 ?
                        <OwlCarousel className='owl-theme '{...propertyDetailsImagesOptions}>

                            {propertyDetails?.images?.map((item, index, arr) => {
                                console.log(index, index % 4)
                                if (index % 4 == 0) {

                                    return <div className='item' key={index}>
                                        <div className='col-span-2 row-span-2 imgHoverAnimation' >
                                            <img src={propertyDetails?.images[index]?.url} alt="" />
                                        </div>

                                        {
                                            propertyDetails?.images[index + 1] &&
                                            <div className=' imgHoverAnimation' >
                                                <img src={propertyDetails?.images[index + 1]?.url} alt="" />
                                            </div>
                                        }
                                        {
                                            propertyDetails?.images[index + 2] &&
                                            <div className=' imgHoverAnimation' >
                                                <img src={propertyDetails?.images[index + 2]?.url} alt="" />
                                            </div>
                                        }
                                        {
                                            propertyDetails?.images[index + 3] &&
                                            <div className='col-span-2  imgHoverAnimation' >
                                                <img src={propertyDetails?.images[index + 3]?.url} alt="" />
                                            </div>
                                        }
                                    </div>
                                }
                            })}

                            {/* <img src={propertyDetailsImage2} alt="" className='hidden lg:block' />
                            <img src={propertyDetailsImage3} alt="" className='hidden lg:block' />
                            <img src={propertyDetailsImage4} alt="" className='col-span-2 hidden lg:block' /> */}
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
                        {propertyDetails?.images?.length}
                    </div>
                </div>
            </section>

            <section className='projectDetails-main padding'>
                <div className="left">

                    <div className="locaiton">
                        <span>
                            {locationIcon}
                        </span>
                        <p>
                            {propertyDetails?.location?.label}
                        </p>
                    </div>
                    <div className="review">
                        <span>
                            {starFill}
                        </span>
                        <p>
                            4.8

                            <span>
                                ({propertyDetails?.reviews?.length} Reviews)
                            </span>
                        </p>
                    </div>
                    <p className='listing-status'>
                        Listing status :  <span>{getObjFromList({ list: listning_ststus_list, matchdata: { name: "value", value: propertyDetails?.listingStatus } })?.label}</span>
                    </p>
                    <p className="price ">
                        Price : ${propertyDetails?.price?.from} to ${propertyDetails?.price?.to}
                    </p>
                    <div className="project-highlights">
                        {propertyDetails?.highlights?.map((item, i) => {
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
                        {propertyDetails?.description}
                    </p>


                    <div className="highlited-details mt-8">
                        <p className="title">
                            {propertyDetails?.name}
                        </p>
                        <p className="para">
                            Building Type:{getObjFromList({
                                list: buildingType_list,
                                matchdata: { name: "value", value: propertyDetails?.details?.buildingType }
                            })?.label} | Ownership:{propertyDetails?.details?.ownership?.ownerName}  | Selling Status: {getObjFromList({
                                list: Selling_ststus_list,
                                matchdata: { name: "value", value: propertyDetails?.details?.sellingStatus }
                            })?.label} | Construction Status:Complete Builder(s): Dajia Insurance Group | Architect(s): {propertyDetails?.details?.architect?.name} | Interior Designer(s): {propertyDetails?.details?.interiorDesigner?.name} | Marketing Company: {propertyDetails?.details?.marketingCompany?.name} | Sales Company: {propertyDetails?.details?.salesCompany?.name}
                        </p>
                    </div>

                </div>
                <div className="right">
                    <Contact_Sales_Center />


                </div>





            </section>


            <Footer />
        </>
    )
}

export default PropertyDetails
import React from 'react'
import { MailSolid, heartSolid, imageIcon, left, locationIcon, phoneIcon, right, starFill, tickCircle } from '../asset/staticData'
import projectDetailsImage1 from "../asset/images/projectDetailsImage1.png"
import projectDetailsImage2 from "../asset/images/projectDetailsImage2.png"
import projectDetailsImage3 from "../asset/images/projectDetailsImage3.png"
import projectDetailsImage4 from "../asset/images/projectDetailsImage4.png"
import agents1 from "../asset/images/agents1.png"
import builderLogo from "../asset/images/builderLogo.png"
import bedImg from "../asset/images/small/bed.png"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ProjectDetails() {
    return (
        <>
            <Navbar />
            <section className='pageBreadcrumb padding'>
                <p>
                    Home / NY / Newyork (Metropolitan Area) / Newyork Country / Manhattan / Theater / District / Central park tower
                </p>
                <div className='flex items-center gap-4'>
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
                        Spring Valley Construction
                    </h3>
                    <div className="right">
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
                    <img src={projectDetailsImage1} alt="" className='col-span-2 row-span-2' />
                    <img src={projectDetailsImage2} alt="" />
                    <img src={projectDetailsImage3} alt="" />
                    <img src={projectDetailsImage4} alt="" className='col-span-2' />
                    <div className="imageCount-carosel">
                        <div className="count">
                            <span>
                                {imageIcon}
                            </span>
                            26
                        </div>
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
                    </div>
                </div>
            </section>

            <section className='projectDetails-main padding'>
                <div className="left">
                    <div className="bilder">
                        <img src={builderLogo} alt="" />
                        <p className="name">
                            By Pearl Valley Inc.
                        </p>
                    </div>
                    <div className="locaiton">
                        <span>
                            {locationIcon}
                        </span>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                    <div className="review">
                        <span>
                            {starFill}
                        </span>
                        <p>
                            4.8

                            <span>
                                (256 Reviews)
                            </span>
                        </p>
                    </div>
                    <p className='listing-status'>
                        Listing status :  <span>Selling</span>
                    </p>
                    <p className="price ">
                        Price : $6,500,000 to $195,000,000
                    </p>
                    <div className="project-highlights">
                        <div className="item">
                            <p className="title">
                                Condo
                            </p>
                            <div className="flex items-center gap-1">
                                <span>
                                    <img src={bedImg} alt="" srcset="" />
                                </span>
                                <p>1</p>

                            </div>
                        </div>
                        <div className="item">
                            <p className="title">
                                Condo
                            </p>
                            <div className="flex items-center gap-1">
                                <span>
                                    <img src={bedImg} alt="" srcset="" />
                                </span>
                                <p>1</p>

                            </div>
                        </div>
                        <div className="item">
                            <p className="title">
                                Condo
                            </p>
                            <div className="flex items-center gap-1">
                                <span>
                                    <img src={bedImg} alt="" srcset="" />
                                </span>
                                <p>1</p>

                            </div>
                        </div>
                        <div className="item">
                            <p className="title">
                                Condo
                            </p>
                            <div className="flex items-center gap-1">
                                <span>
                                    <img src={bedImg} alt="" srcset="" />
                                </span>
                                <p>1</p>

                            </div>
                        </div>
                        <div className="item">
                            <p className="title">
                                Condo
                            </p>
                            <div className="flex items-center gap-1">
                                <span>
                                    <img src={bedImg} alt="" srcset="" />
                                </span>
                                <p>1</p>

                            </div>
                        </div>
                        <div className="item">
                            <p className="title">
                                Condo
                            </p>
                            <div className="flex items-center gap-1">
                                <span>
                                    <img src={bedImg} alt="" srcset="" />
                                </span>
                                <p>1</p>

                            </div>
                        </div>

                    </div>
                    <p className="description">
                        <span> Description:</span>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                                Floor plans are coming soon!
                            </span>
                            <br />
                            Save this community to receive email alerts when more <a href="">information</a> becomes available.
                            Alternatively, you can request more information to inquire about floor plans.


                        </p>
                        <p className=''>
                            <span>
                                Overview
                            </span>
                            <br />

                            Central Park Tower is a new condo community by Extell Development Company and SMI USA at 217 West 57th Street, Manhattan. Available units range in price from $6,500,000 to $195,000,000. <a href="">Central Park</a> Tower has a total of 179 units. Sizes range from 1435 to 17545 square feet.

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
                            <form action="">
                                <div className="inputBox">
                                    <input type="text" placeholder='First Name' />
                                </div>
                                <div className="inputBox">
                                    <input type="text" placeholder='Last Name' />
                                </div>
                                <div className="inputBox col-span-2">
                                    <input type="text" placeholder='Phone Number' />
                                </div>
                                <div className="inputBox col-span-2">
                                    <input type="text" placeholder='Email' />
                                </div>
                                <div className="inputBox col-span-2">
                                    <textarea name="" id="" rows="3" placeholder='Messege...'></textarea>
                                </div>
                                <p className='note-para col-span-2'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <div className='col-span-2 px-10'>

                                    <button className='req-btn btn '>

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
                        Spring Valley Construction
                    </p>
                    <p className="para">
                        Building Type:Condo | <a href="">Ownership:Condominium</a> | Selling Status:Selling | Construction Status:Complete Builder(s): Dajia Insurance Group | Architect(s): Skidmore, Owings & Merrill LLP | Interior Designer(s): Pierre Yves Rochon and Jean-Louis Deniot | Marketing Company: Douglas Elliman | Sales Company: Douglas Elliman
                    </p>
                </div>
                <div className="highlited-details">
                    <p className="title">
                        Spring Valley Construction
                    </p>
                    <p className="para">
                        Building Type:Condo | <a href="">Ownership:Condominium</a> | Selling Status:Selling | Construction Status:Complete Builder(s): Dajia Insurance Group | Architect(s): Skidmore, Owings & Merrill LLP | Interior Designer(s): Pierre Yves Rochon and Jean-Louis Deniot | Marketing Company: Douglas Elliman | Sales Company: Douglas Elliman
                    </p>
                </div>

                <div className="features-amenitis-details">

                    <div className="amenitis-details">
                        <p className="title">
                            Amenities
                        </p>
                        <div className='list'>
                            <div className="item">
                                <span>
                                    {tickCircle}
                                </span>
                                <p>
                                    Board Room
                                </p>
                            </div>
                            <div className="item">
                                <span>
                                    {tickCircle}
                                </span>
                                <p>
                                    Board Room
                                </p>
                            </div>
                            <div className="item">
                                <span>
                                    {tickCircle}
                                </span>
                                <p>
                                    Board Room
                                </p>
                            </div>
                            <div className="item">
                                <span>
                                    {tickCircle}
                                </span>
                                <p>
                                    Board Room
                                </p>
                            </div>

                        </div>


                    </div>
                    <div className="feature-details">
                        <p className="title">
                            Features & Finishes
                        </p>
                        <p className="subtitle">
                            CLASSIC GRANDEUR AND MODERN COMFORT
                        </p>
                        <p className="para">
                            <span>
                                RESIDENCES
                            </span> <br />
                            Inspired by the hotel’s classic grandeur, internationally acclaimed designer Jean-Louis Deniot has created residences that balance modern comfort with Art Deco opulence; blending the old and the new; the European and the American; the grand and the intimate. Each residence celebrates the scale and beauty of the original architecture—a perfect balance of aesthetic and practical considerations—with windows that replicate the building’s original design and flood the rooms with dynamic views of the New York cityscape. Kitchens feature wood and lacquer cabinetry custom-designed by Deniot and fabricated by Italian design house Molteni&C, cleverly concealing top-of-the-line German appliances by Gaggenau. Elegant primary bathrooms offer heated floors, rain showers, and custom Italian vanities. Handcrafted finishes, natural materials, and subtle Art Deco references bring a sense of history to these gracious contemporary spaces.THE SCALE AND BEAUTY OF THE ORIGINAL ART DECO ARCHITECTURE, WITH ITS DISTINCTIVE DETAILING AND SET-BACK TERRACES, EXISTS IN PERFECT HARMONY WITH CONTEMPORARY DESIGN—BLENDING THE OLD AND THE NEW, THE COSMOPOLITAN AND THE AMERICAN, THE GRAND AND THE INTIMATE.
                        </p>


                    </div>

                </div>

            </section>

            <section className='constraction-banner-section'>
                <img src={projectDetailsImage1} alt="" />
                <div className="content">
                    <p className="title">
                        Spring Valley Construction Marketing Summary
                    </p>
                    <p className="para">
                        INSPIRED BY HERITAGE, GLAMOUR, AND SOPHISTICATIONThe story of the Waldorf Astoria is, in many ways a story of New York City—a story of ambition, innovation, and achievement. From residential interior designer Jean-Louis Deniot, to architect Skidmore, Owings & Merrill, to hotel interior designer Pierre-Yves Rochon, the team behind the restoration of the Waldorf Astoria are all global icons in their own right.
                        <br />
                        <span>
                            Source: The Towers of the Waldorf Astoria
                        </span>
                    </p>

                </div>
                <img src={projectDetailsImage1} alt="" />

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
import React from 'react'
import logo from "../asset/images/logo/kaunuck_logo footer.png"

function Footer() {
    return (
        <footer className='padding'>
            <div className='footer'>

                <div className='col-span-2 md:col-span-1 flex items-center flex-col md:items-start'>
                    <img src={logo} alt="" className=' mb-2 md:mb-4 lg:mb-6' />
                    <p className="description">
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al
                    </p>
                    <div className="flex items-center gap-2">

                    </div>
                </div>
                <div className='col-span-1 flex flex-col items-center md:items-start'>
                    <p className="title">
                        Contact Us
                    </p>
                    <p className="contactDetails">
                        754 NE 60th St Miami, FL 33879Call us FREE +1 (800) 990 8877eiddo@qodeinteractive.com
                    </p>
                </div>
                <div className='col-span-2 lg:col-span-1'>
                    <p className="newsletter">
                        Newsletter Subscribe
                    </p>
                    <input type="text" placeholder='Email' />
                    <button className='subscribeBtn'>subscribe</button>
                </div>
            </div>

            <div className='copyrightDiv col-span-3'>
                © 2023 Hindil.in, All Rights Reserved
            </div>

        </footer>
    )
}

export default Footer
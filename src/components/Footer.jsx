import React from 'react'
import logo from "../asset/images/logo/kaunuck_logo footer.png"

function Footer() {
    return (
        <footer className='padding'>
            <div>
                <img src={logo} alt="" className='mb-6' />
                <p className="description">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al
                </p>
                <div className="flex items-center gap-2">

                </div>
            </div>
            <div>
                <p className="title">
                    Contact Us
                </p>
                <p className="contactDetails">
                    754 NE 60th St Miami, FL 33879Call us FREE +1 (800) 990 8877eiddo@qodeinteractive.com
                </p>
            </div>
            <div>
                <p className="newsletter">
                    Newsletter Subscribe
                </p>
                <input type="text" placeholder='Email' />
                <button className='subscribeBtn'>subscribe</button>
            </div>

            <div className='copyrightDiv'>
                © 2023 Hindil.in, All Rights Reserved
            </div>

        </footer>
    )
}

export default Footer
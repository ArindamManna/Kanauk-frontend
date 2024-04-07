
import React from 'react'
import banner1 from "../asset/images/featuredProjectImage_2.png"
import agentsPic from "../asset/images/agents1.png"

function Our_blog({ className }) {
    return (
        <div className={`${className} our_blog`}
            style={{
                backgroundImage: `url(${banner1})`
            }}
        >
            <div className="bottom">
                <p className="titleAndDate">
                    Lorem Ipsum  <span className='date'>
                        | date 07-10-23
                    </span>
                </p>
                <div className="title">
                    Lorem Ipsum is simply dummy text of the printing and
                </div>

                <div className="flex items-center gap-4">
                    <img src={agentsPic} alt="" className='profilePic' />
                    <div>

                        <p className="name">
                            elena bose
                        </p>
                        <p className="time">
                            15 hours ago
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Our_blog
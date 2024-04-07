import React from 'react'
import agentsPic from "../asset/images/agents1.png"
import phone from "../asset/images/logo/phone.png"

function Featured_Agents_Card() {
    return (
        <div className="Featured_Agents_Card">
            <img src={agentsPic} alt="" />
            <p className="title">
                Melanie Piche
                - the BREL team
            </p>
            <p className="subTitle">
                Bspoke Realty Inc., Brokereage
            </p>
            <p className="microTitle">
                Review 9/11/23
            </p>
            <p className="description">
                Her ability to secure an early unit for me allowed me to select a nice floor plan ...
            </p>
            <button className='callUsBtn'>
                <img src={phone} alt="" />
                Call Us For More Info
            </button>
        </div>
    )
}

export default Featured_Agents_Card
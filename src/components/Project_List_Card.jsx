import React from 'react'
import { getObjFromList } from '../asset/commonFuntions'
import { Selling_ststus_list, buildingType_list, highlights_type_list, listning_ststus_list } from '../asset/staticLists'
import { cardIcon, heart } from '../asset/staticData'

function Project_List_Card({ data }) {
    const { name, listingStatus, price, builder, location, highlights, images } = data ? data : {}
    return (
        <>
            <div className="project-list-card">
                <div className="project-img">
                    <img src={images?.[0]?.url} alt="" />
                    <div className="status">
                        {listingStatus}
                    </div>
                    <div className="watchList">
                        {heart}
                    </div>
                    <div className="is-verified">
                        Verified
                    </div>

                </div>
                <p className="project-name mb-0">
                    {name}
                </p>
                <p className="price mb-0">
                    From {price?.from}
                </p>
                <p className="builder-name">
                    {builder?.name}
                </p>
                <p className="location">
                    {location?.label}
                </p>
                <div className=" details-box flex-wrap gap-2">
                    {highlights?.map((item, i) => {
                        let obj = getObjFromList({
                            list: highlights_type_list,
                            matchdata: { name: "value", value: item?.type }
                        })
                        return <div className="details pr-2 pl-0 ">
                            <div className="flex items-center ">
                                <span>
                                    <img src={obj?.img} alt="" />
                                </span>
                                <p className='ml-1 mb-0'>{obj?.label} {item?.quantity}</p>
                            </div>
                        </div>

                    })}





                </div>
            </div>
        </>
    )
}

export default Project_List_Card
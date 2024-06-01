import React from 'react'
import { Link } from 'react-router-dom'
import { highlights_type_list } from '../asset/staticLists';
import { getObjFromList } from '../asset/commonFuntions';
import { right } from '../asset/staticData';

function Unit_card({ item }) {
    const { highlights, images } = item ? item : {};
    console.log(item, "items");
    return (
        <>
            <Link className='unit' to={`/propertyDetails/?property_id=${item?._id}`}>
                <div className="left">
                    <div className="img-box">
                        <img src={images?.[0]?.url} alt="" />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div className="title">
                            {item.name}
                        </div>


                        <div className='property-highlights '>
                            {highlights?.map((item, i) => {
                                let obj = getObjFromList({
                                    list: highlights_type_list,
                                    matchdata: { name: "value", value: item?.type }
                                })
                                return <div className="flex items-center gap-2 item" key={i}>
                                    <span>
                                        <img src={obj?.img} alt="" />
                                    </span>
                                    <p className='mb-0'>{item?.quantity}</p>
                                    <p className="title mb-0">
                                        {obj?.label}
                                    </p>

                                </div>
                            })}
                        </div>


                    </div>
                </div>
                <div className="right">
                    <div className="price">
                        <p className='mb-0'>
                            From - ${item.price.from}
                        </p>
                        <p className='mb-0'>
                            To -  ${item.price.to}
                        </p>
                    </div>
                    <div className="btn-box">
                        <button className="btn">
                            <span className='h-5 w-5'>

                                {right}
                            </span>
                        </button>
                    </div>
                </div>

            </Link>
        </>
    )
}

export default Unit_card
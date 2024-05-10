import React from "react";
import featuredProjectImage_2 from "../asset/images/featuredProjectImage_2.png";
import { Link } from "react-router-dom";
// import featuredProjectImage_1 from "../asset/images/banner1.png";

function Featured_Project_Card({ data }) {
    const { name, location, images, price } = data ? data : {};
    return (
        <>
            <div className="Featured_Project_Card">
                <Link to={`/admin/projectview/?project_id=${data?._id}`}>
                    <img src={images[0]?.url} alt="" />
                </Link>
                <div className="content">
                    <p className="title">{name}</p>
                    <p className="location">{location?.label}</p>
                    <p className="price">
                        ${price?.from} - {price.to}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Featured_Project_Card;

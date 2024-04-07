import React from "react";

const BuilderLeftCard = () => {
    return (
        <div className="builder_card">
            <div className="card">
                <img src={require("../asset/images/banner1.png")} alt="" />
                <div className="content">
                    <div className="title">Whitby Meadows</div>
                    <div className="price">From $950,990</div>
                    <div className="desc">
                        Townhouse, Single Family Home | Construction <br /> Tounton Road West, Whitby, Ontario
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuilderLeftCard;

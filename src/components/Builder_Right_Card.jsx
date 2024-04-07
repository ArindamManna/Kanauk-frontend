import React from "react";

const BuilderRightCard = () => {
    return (
        <div className="newscard">
            <img src={require("../asset/images/builder/companyNews.png")} alt="" />

            <div className="content">
                <div className="text">Dream Unlimited, Great Gulf Chosen To Create Stunning Quayside Devlopment</div>
                <div className="date">Feb 15 2024 at 12:00Am</div>
            </div>
        </div>
    );
};

export default BuilderRightCard;

import React from "react";
import Propertylisting from "../components/Propertylisting";
import Navbar from "../components/Navbar";
import Upload from "../components/upload";

const Property = () => {
    return (
        <div className="property">
            <Navbar />
            <Propertylisting />
            <Upload />
        </div>
    );
};

export default Property;
